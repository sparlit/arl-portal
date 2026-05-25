import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/routes - List delivery routes
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const zone = searchParams.get('zone');
    const status = searchParams.get('status');
    const date = searchParams.get('date');

    const where: any = { tenantId };
    if (zone) where.zone = zone;
    if (status) where.status = status;
    if (date) {
      const d = new Date(date);
      where.scheduledDate = {
        gte: new Date(d.setHours(0, 0, 0, 0)),
        lte: new Date(d.setHours(23, 59, 59, 999)),
      };
    }

    const routes = await prisma.route.findMany({
      where,
      include: {
        stops: {
          orderBy: { stopOrder: 'asc' },
          include: {
            outlet: { select: { name: true, code: true, phone: true, address: true } },
          },
        },
      },
      orderBy: [{ scheduledDate: 'asc' }, { name: 'asc' }],
    });

    return NextResponse.json(routes);
  });
}

// POST /api/lms/routes - Create a new delivery route
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { name, code, zone, driverId, vehicleId, scheduledDate, stops } = body;

    if (!name || !code) {
      return NextResponse.json({ error: 'Name and code are required' }, { status: 400 });
    }

    const route = await prisma.route.create({
      data: {
        tenantId,
        name,
        code,
        zone: zone || null,
        driverId: driverId || null,
        vehicleId: vehicleId || null,
        scheduledDate: scheduledDate ? new Date(scheduledDate) : null,
        status: 'active',
        totalStops: stops?.length || 0,
        stops: stops ? {
          create: stops.map((stop: any, index: number) => ({
            stopOrder: index + 1,
            type: stop.type || 'delivery',
            outletId: stop.outletId || null,
            address: stop.address || null,
            contactName: stop.contactName || null,
            contactPhone: stop.contactPhone || null,
            latitude: stop.latitude ? parseFloat(stop.latitude) : null,
            longitude: stop.longitude ? parseFloat(stop.longitude) : null,
            garmentCount: stop.garmentCount || 0,
            notes: stop.notes || null,
          })),
        } : undefined,
      },
      include: { stops: { orderBy: { stopOrder: 'asc' } } },
    });

    return NextResponse.json(route, { status: 201 });
  });
}