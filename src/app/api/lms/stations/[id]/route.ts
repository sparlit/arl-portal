import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const station = await prisma.productionStation.findFirst({ where: { id: params.id, tenantId },
      include: { outlet: { select: { name: true } }, schedules: { orderBy: { scheduledDate: 'desc' }, take: 10 } }
    });
    if (!station) return NextResponse.json({ error: 'Station not found' }, { status: 404 });
    return NextResponse.json(station);
  });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const station = await prisma.productionStation.findFirst({ where: { id: params.id, tenantId } });
    if (!station) return NextResponse.json({ error: 'Station not found' }, { status: 404 });

    const updated = await prisma.productionStation.update({ where: { id: params.id }, data: body });
    return NextResponse.json(updated);
  });
}