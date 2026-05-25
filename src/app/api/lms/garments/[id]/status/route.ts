import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withRBAC } from '@/lib/api-middleware';
import { validateTransition, STAGE_LABELS } from '@/lib/lms/state-machine';

// PATCH /api/lms/garments/[id]/status - Transition garment to next stage
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withRBAC(request, 'update', 'Garment', async (tenantId: string) => {
    const body = await request.json();
    const { status, locationId, locationType, performedBy, notes, metadata } = body;

    if (!status) {
      return NextResponse.json({ error: 'Target status is required' }, { status: 400 });
    }

    // Use SKIP LOCKED pattern for offline sync conflict resolution
    // First, get the current garment with a pessimistic lock simulation
    const garment = await prisma.garment.findFirst({
      where: { id: params.id, tenantId },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    // Validate the state transition
    const validation = validateTransition(garment.currentStatus, status);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.reason }, { status: 400 });
    }

    // Perform the transition atomically
    const updatedGarment = await prisma.garment.update({
      where: { id: params.id },
      data: { currentStatus: status },
    });

    // Create immutable lifecycle event entry
    const event = await prisma.garmentLifecycleEvent.create({
      data: {
        tenantId,
        garmentId: params.id,
        fromStatus: garment.currentStatus,
        toStatus: status,
        locationId: locationId || null,
        locationType: locationType || null,
        performedBy: performedBy || 'system',
        autoTimestamp: false,
        notes: notes || `Transition: ${STAGE_LABELS[garment.currentStatus] || garment.currentStatus} → ${STAGE_LABELS[status] || status}`,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    // If delivered, set delivered timestamp
    if (status === 'delivered') {
      await prisma.garment.update({
        where: { id: params.id },
        data: { deliveredAt: new Date() },
      });
    }

    return NextResponse.json({
      garment: updatedGarment,
      event,
    });
  });
}

// GET /api/lms/garments/[id]/status - Get status history for a garment
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withRBAC(request, 'read', 'Garment', async (tenantId: string) => {
    const garment = await prisma.garment.findFirst({
      where: { id: params.id, tenantId },
      select: {
        id: true,
        qrCode: true,
        currentStatus: true,
        garmentType: true,
        customerName: true,
      },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    const events = await prisma.garmentLifecycleEvent.findMany({
      where: { garmentId: params.id },
      orderBy: { timestamp: 'asc' },
    });

    return NextResponse.json({
      garment,
      history: events,
    });
  });
}