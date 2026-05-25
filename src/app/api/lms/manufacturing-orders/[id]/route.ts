import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const order = await prisma.manufacturingOrder.findFirst({ where: { id: params.id, tenantId },
      include: { outlet: { select: { name: true, code: true } } }
    });
    if (!order) return NextResponse.json({ error: 'Manufacturing order not found' }, { status: 404 });
    return NextResponse.json(order);
  });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const order = await prisma.manufacturingOrder.findFirst({ where: { id: params.id, tenantId } });
    if (!order) return NextResponse.json({ error: 'Manufacturing order not found' }, { status: 404 });

    const updateData: any = {};
    if (body.status) updateData.status = body.status;
    if (body.priority) updateData.priority = body.priority;
    if (body.completedItems !== undefined) updateData.completedItems = body.completedItems;
    if (body.defectiveItems !== undefined) updateData.defectiveItems = body.defectiveItems;
    if (body.assignedTo) updateData.assignedTo = body.assignedTo;
    if (body.notes) updateData.notes = body.notes;
    if (body.status === 'in_progress') updateData.startedAt = new Date();
    if (body.status === 'completed') updateData.completedAt = new Date();

    const updated = await prisma.manufacturingOrder.update({ where: { id: params.id }, data: updateData });
    return NextResponse.json(updated);
  });
}