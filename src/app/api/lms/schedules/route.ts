import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/schedules - List production schedules
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const stationId = searchParams.get('stationId');
    const outletId = searchParams.get('outletId');
    const date = searchParams.get('date');
    const status = searchParams.get('status');

    const where: any = { tenantId };
    if (stationId) where.stationId = stationId;
    if (outletId) where.outletId = outletId;
    if (status) where.status = status;
    if (date) {
      const d = new Date(date);
      where.scheduledDate = {
        gte: new Date(d.setHours(0, 0, 0, 0)),
        lte: new Date(d.setHours(23, 59, 59, 999)),
      };
    }

    const schedules = await prisma.productionSchedule.findMany({
      where,
      include: {
        station: { select: { name: true, code: true, type: true } },
        outlet: { select: { name: true, code: true } },
      },
      orderBy: [{ scheduledDate: 'asc' }, { startTime: 'asc' }],
    });

    return NextResponse.json(schedules);
  });
}

// POST /api/lms/schedules - Create a production schedule
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { stationId, outletId, scheduledDate, startTime, endTime, itemCount, batchNumber, notes } = body;

    if (!scheduledDate) {
      return NextResponse.json({ error: 'Scheduled date is required' }, { status: 400 });
    }

    const schedule = await prisma.productionSchedule.create({
      data: {
        tenantId,
        stationId: stationId || null,
        outletId: outletId || null,
        scheduledDate: new Date(scheduledDate),
        startTime: startTime ? new Date(startTime) : null,
        endTime: endTime ? new Date(endTime) : null,
        itemCount: itemCount || 0,
        batchNumber: batchNumber || null,
        notes: notes || null,
        status: 'scheduled',
      },
    });

    return NextResponse.json(schedule, { status: 201 });
  });
}