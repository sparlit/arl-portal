import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const route = await prisma.route.findFirst({ where: { id: params.id, tenantId },
      include: { stops: { orderBy: { stopOrder: 'asc' }, include: { outlet: { select: { name: true, code: true } } } } }
    });
    if (!route) return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    return NextResponse.json(route);
  });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const route = await prisma.route.findFirst({ where: { id: params.id, tenantId } });
    if (!route) return NextResponse.json({ error: 'Route not found' }, { status: 404 });

    const updateData: any = {};
    if (body.status) updateData.status = body.status;
    if (body.driverId) updateData.driverId = body.driverId;
    if (body.vehicleId) updateData.vehicleId = body.vehicleId;
    if (body.totalDistance !== undefined) updateData.totalDistance = body.totalDistance;
    if (body.startedAt) updateData.startedAt = new Date(body.startedAt);
    if (body.completedAt) updateData.completedAt = new Date(body.completedAt);

    const updated = await prisma.route.update({ where: { id: params.id }, data: updateData });
    return NextResponse.json(updated);
  });
}