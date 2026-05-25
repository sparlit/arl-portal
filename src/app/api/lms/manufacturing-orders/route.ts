import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';
import { generateManufacturingOrderNumber } from '@/lib/lms/state-machine';

// GET /api/lms/manufacturing-orders - List manufacturing orders (for production load balancing)
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const outletId = searchParams.get('outletId');
    const priority = searchParams.get('priority');
    const date = searchParams.get('date');

    const where: any = { tenantId };
    if (status) where.status = status;
    if (outletId) where.outletId = outletId;
    if (priority) where.priority = priority;
    if (date) {
      const d = new Date(date);
      where.scheduledDate = {
        gte: new Date(d.setHours(0, 0, 0, 0)),
        lte: new Date(d.setHours(23, 59, 59, 999)),
      };
    }

    const orders = await prisma.manufacturingOrder.findMany({
      where,
      include: {
        outlet: { select: { name: true, code: true } },
      },
      orderBy: [
        { priority: 'asc' }, // urgent first
        { scheduledDate: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    // Calculate load balancing metrics
    const totalPending = orders.filter(o => o.status === 'pending').length;
    const totalInProgress = orders.filter(o => o.status === 'in_progress').length;
    const totalCompleted = orders.filter(o => o.status === 'completed').length;
    const totalDefective = orders.reduce((sum, o) => sum + o.defectiveItems, 0);
    const totalItems = orders.reduce((sum, o) => sum + o.totalItems, 0);

    return NextResponse.json({
      orders,
      metrics: {
        totalOrders: orders.length,
        totalPending,
        totalInProgress,
        totalCompleted,
        totalDefective,
        totalItems,
        defectRate: totalItems > 0 ? ((totalDefective / totalItems) * 100).toFixed(2) : '0.00',
      },
    });
  });
}

// POST /api/lms/manufacturing-orders - Create a manufacturing order
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { outletId, priority, totalItems, scheduledDate, assignedTo, notes } = body;

    const orderNumber = generateManufacturingOrderNumber();

    const order = await prisma.manufacturingOrder.create({
      data: {
        tenantId,
        orderNumber,
        outletId: outletId || null,
        priority: priority || 'normal',
        totalItems: totalItems || 0,
        scheduledDate: scheduledDate ? new Date(scheduledDate) : null,
        assignedTo: assignedTo || null,
        notes: notes || null,
        status: 'pending',
      },
    });

    return NextResponse.json(order, { status: 201 });
  });
}