import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withRBAC } from '@/lib/api-middleware';
import { validateTransition, GARMENT_STAGES, STAGE_LABELS } from '@/lib/lms/state-machine';

// GET /api/lms/garments/[id] - Get single garment with full history
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withRBAC(request, 'read', 'Garment', async (tenantId: string) => {
    const garment = await prisma.garment.findFirst({
      where: { id: params.id, tenantId },
      include: {
        statusHistory: {
          orderBy: { timestamp: 'desc' },
        },
        order: {
          select: { orderNumber: true, status: true, totalAmount: true },
        },
        outlet: {
          select: { name: true, code: true, phone: true },
        },
        deliveredToOutlet: {
          select: { name: true, code: true },
        },
      },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    return NextResponse.json(garment);
  });
}

// PATCH /api/lms/garments/[id] - Update garment details
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withRBAC(request, 'update', 'Garment', async (tenantId: string) => {
    const body = await request.json();
    const garment = await prisma.garment.findFirst({
      where: { id: params.id, tenantId },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    // Fields that can be updated directly
    const updatableFields = [
      'garmentType', 'color', 'brand', 'fabricType', 'specialCare', 'notes',
      'hasDamage', 'damageNotes', 'damagePhoto',
      'hasStains', 'stainType', 'stainNotes',
      'qcPassed', 'qcNotes', 'defectType',
      'customerName', 'customerPhone', 'rfidTag',
    ];

    const updateData: any = {};
    for (const field of updatableFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    // Handle outlet assignment
    if (body.deliveredToOutletId) {
      updateData.deliveredToOutletId = body.deliveredToOutletId;
    }
    if (body.deliveredAt) {
      updateData.deliveredAt = new Date(body.deliveredAt);
    }

    const updated = await prisma.garment.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(updated);
  });
}

// DELETE /api/lms/garments/[id] - Soft cancel a garment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withRBAC(request, 'delete', 'Garment', async (tenantId: string) => {
    const garment = await prisma.garment.findFirst({
      where: { id: params.id, tenantId },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    // Soft cancel - move to cancelled state
    const validation = validateTransition(garment.currentStatus, GARMENT_STAGES.CANCELLED);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.reason }, { status: 400 });
    }

    await prisma.garment.update({
      where: { id: params.id },
      data: { currentStatus: GARMENT_STAGES.CANCELLED },
    });

    // Log the cancellation event
    await prisma.garmentLifecycleEvent.create({
      data: {
        tenantId,
        garmentId: params.id,
        fromStatus: garment.currentStatus,
        toStatus: GARMENT_STAGES.CANCELLED,
        performedBy: 'system',
        notes: 'Garment cancelled/deleted from system',
      },
    });

    return NextResponse.json({ success: true });
  });
}