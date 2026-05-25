import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/routes/[id]/stops - Get stops for a route
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withTenant(request, async (tenantId: string) => {
    const route = await prisma.route.findFirst({
      where: { id: params.id, tenantId },
    });

    if (!route) {
      return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    }

    const stops = await prisma.routeStop.findMany({
      where: { routeId: params.id },
      include: {
        outlet: { select: { name: true, code: true, phone: true, address: true } },
      },
      orderBy: { stopOrder: 'asc' },
    });

    return NextResponse.json({ route, stops });
  });
}

// POST /api/lms/routes/[id]/stops - Add or update a stop on a route
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withTenant(request, async (tenantId: string) => {
    const route = await prisma.route.findFirst({
      where: { id: params.id, tenantId },
    });

    if (!route) {
      return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    }

    const body = await request.json();

    // If stopId provided, this is an update (mark as completed/failed)
    if (body.stopId) {
      const updateData: any = { status: body.status };
      if (body.status === 'completed') {
        updateData.completedAt = new Date();
      }
      if (body.failedReason) {
        updateData.failedReason = body.failedReason;
      }

      const stop = await prisma.routeStop.update({
        where: { id: body.stopId },
        data: updateData,
      });

      // Update route completion count
      const completedStops = await prisma.routeStop.count({
        where: { routeId: params.id, status: 'completed' },
      });

      await prisma.route.update({
        where: { id: params.id },
        data: { completedStops },
      });

      return NextResponse.json(stop);
    }

    // Otherwise, create a new stop
    const lastStop = await prisma.routeStop.findFirst({
      where: { routeId: params.id },
      orderBy: { stopOrder: 'desc' },
    });

    const stop = await prisma.routeStop.create({
      data: {
        routeId: params.id,
        stopOrder: (lastStop?.stopOrder || 0) + 1,
        type: body.type || 'delivery',
        outletId: body.outletId || null,
        address: body.address || null,
        contactName: body.contactName || null,
        contactPhone: body.contactPhone || null,
        latitude: body.latitude ? parseFloat(body.latitude) : null,
        longitude: body.longitude ? parseFloat(body.longitude) : null,
        garmentCount: body.garmentCount || 0,
        notes: body.notes || null,
      },
    });

    // Update total stops count on route
    await prisma.route.update({
      where: { id: params.id },
      data: { totalStops: { increment: 1 } },
    });

    return NextResponse.json(stop, { status: 201 });
  });
}