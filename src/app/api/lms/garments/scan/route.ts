import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withRBAC } from '@/lib/api-middleware';
import { validateTransition, GARMENT_STAGES } from '@/lib/lms/state-machine';

// POST /api/lms/garments/scan - QR/RFID scan endpoint for fast status transition
export async function POST(request: NextRequest) {
  return withRBAC(request, 'update', 'Garment', async (tenantId: string) => {
    const body = await request.json();
    const { qrCode, rfidTag, status, locationId, locationType, performedBy, notes } = body;

    if (!qrCode && !rfidTag) {
      return NextResponse.json({ error: 'qrCode or rfidTag required' }, { status: 400 });
    }

    // Find garment by QR code or RFID tag
    const where: any = { tenantId };
    if (qrCode) where.qrCode = qrCode;
    if (rfidTag) where.rfidTag = rfidTag;

    const garment = await prisma.garment.findFirst({ where });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found for scanned identifier' }, { status: 404 });
    }

    // If status provided, validate and transition
    if (status) {
      const validation = validateTransition(garment.currentStatus, status);
      if (!validation.valid) {
        return NextResponse.json({ error: validation.reason }, { status: 400 });
      }

      // Update garment status
      await prisma.garment.update({
        where: { id: garment.id },
        data: { currentStatus: status },
      });

      // Log lifecycle event
      await prisma.garmentLifecycleEvent.create({
        data: {
          tenantId,
          garmentId: garment.id,
          fromStatus: garment.currentStatus,
          toStatus: status,
          locationId: locationId || null,
          locationType: locationType || 'scan',
          performedBy: performedBy || 'scanner',
          notes: notes || `QR/RFID scan transition`,
          metadata: JSON.stringify({ qrCode, rfidTag, scannerId: performedBy }),
        },
      });

      if (status === 'delivered') {
        await prisma.garment.update({
          where: { id: garment.id },
          data: { deliveredAt: new Date() },
        });
      }
    }

    // Return garment with full details
    const updated = await prisma.garment.findFirst({
      where: { id: garment.id },
      include: {
        statusHistory: {
          orderBy: { timestamp: 'desc' },
          take: 10,
        },
      },
    });

    return NextResponse.json(updated);
  });
}

// GET /api/lms/garments/scan - Lookup by QR/RFID
export async function GET(request: NextRequest) {
  return withRBAC(request, 'read', 'Garment', async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const qrCode = searchParams.get('qrCode');
    const rfidTag = searchParams.get('rfidTag');

    if (!qrCode && !rfidTag) {
      return NextResponse.json({ error: 'qrCode or rfidTag query param required' }, { status: 400 });
    }

    const where: any = { tenantId };
    if (qrCode) where.qrCode = qrCode;
    if (rfidTag) where.rfidTag = rfidTag;

    const garment = await prisma.garment.findFirst({
      where,
      include: {
        statusHistory: {
          orderBy: { timestamp: 'desc' },
          take: 20,
        },
        order: { select: { orderNumber: true } },
      },
    });

    if (!garment) {
      return NextResponse.json({ error: 'Garment not found' }, { status: 404 });
    }

    return NextResponse.json(garment);
  });
}