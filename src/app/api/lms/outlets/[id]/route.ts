import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const outlet = await prisma.outlet.findFirst({ where: { id: params.id, tenantId },
      include: {
        _count: { select: { garmentsReceived: true, garmentsDelivered: true, manufacturingOrders: true } }
      }
    });
    if (!outlet) return NextResponse.json({ error: 'Outlet not found' }, { status: 404 });
    return NextResponse.json(outlet);
  });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const outlet = await prisma.outlet.findFirst({ where: { id: params.id, tenantId } });
    if (!outlet) return NextResponse.json({ error: 'Outlet not found' }, { status: 404 });

    const updated = await prisma.outlet.update({ where: { id: params.id }, data: body });
    return NextResponse.json(updated);
  });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const outlet = await prisma.outlet.findFirst({ where: { id: params.id, tenantId } });
    if (!outlet) return NextResponse.json({ error: 'Outlet not found' }, { status: 404 });
    await prisma.outlet.update({ where: { id: params.id }, data: { status: 'inactive' } });
    return NextResponse.json({ success: true });
  });
}