import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';
import { generateGarmentQRCode } from '@/lib/lms/state-machine';

// GET /api/lms/garments - List garments with optional filters
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const orderId = searchParams.get('orderId');
    const outletId = searchParams.get('outletId');
    const qrCode = searchParams.get('qrCode');
    const rfidTag = searchParams.get('rfidTag');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const where: any = { tenantId };
    if (status) where.currentStatus = status;
    if (orderId) where.orderId = orderId;
    if (outletId) where.outletId = outletId;
    if (qrCode) where.qrCode = qrCode;
    if (rfidTag) where.rfidTag = rfidTag;

    const garments = await prisma.garment.findMany({
      where,
      include: {
        statusHistory: {
          orderBy: { timestamp: 'desc' },
          take: 5,
        },
        order: {
          select: { orderNumber: true, status: true },
        },
        outlet: {
          select: { name: true, code: true },
        },
        deliveredToOutlet: {
          select: { name: true, code: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });

    const total = await prisma.garment.count({ where });

    return NextResponse.json({ garments, total, limit, offset });
  });
}

// POST /api/lms/garments - Create new garment(s) in bulk
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { items, orderId, outletId, customerName, customerPhone } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Items array is required' }, { status: 400 });
    }

    const orderNumber = orderId ? (await prisma.laundryOrder.findUnique({ where: { id: orderId }, select: { orderNumber: true } }))?.orderNumber : 'BULK';

    const garments = await Promise.all(
      items.map(async (item: any, index: number) => {
        const qrCode = generateGarmentQRCode(orderNumber || 'NEW', index + 1);
        
        const garment = await prisma.garment.create({
          data: {
            tenantId,
            qrCode,
            rfidTag: item.rfidTag,
            orderId: orderId || null,
            outletId: outletId || null,
            customerName: item.customerName || customerName,
            customerPhone: item.customerPhone || customerPhone,
            garmentType: item.garmentType,
            color: item.color,
            brand: item.brand,
            fabricType: item.fabricType,
            specialCare: item.specialCare || false,
            notes: item.notes,
            currentStatus: 'received',
            hasDamage: item.hasDamage || false,
            damageNotes: item.damageNotes,
            hasStains: item.hasStains || false,
            stainType: item.stainType,
            stainNotes: item.stainNotes,
          },
        });

        // Create initial lifecycle event
        await prisma.garmentLifecycleEvent.create({
          data: {
            tenantId,
            garmentId: garment.id,
            fromStatus: 'received',
            toStatus: 'received',
            locationId: outletId || null,
            locationType: 'outlet',
            performedBy: item.performedBy || 'system',
            notes: 'Garment received and registered in system',
          },
        });

        return garment;
      })
    );

    return NextResponse.json(garments, { status: 201 });
  });
}