import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/stations - List production stations
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const outletId = searchParams.get('outletId');

    const where: any = { tenantId };
    if (type) where.type = type;
    if (status) where.status = status;
    if (outletId) where.outletId = outletId;

    const stations = await prisma.productionStation.findMany({
      where,
      include: {
        outlet: { select: { name: true, code: true } },
        schedules: {
          where: {
            scheduledDate: {
              gte: new Date(new Date().setHours(0, 0, 0, 0)),
              lte: new Date(new Date().setHours(23, 59, 59, 999)),
            },
          },
          orderBy: { startTime: 'asc' },
        },
      },
      orderBy: [{ type: 'asc' }, { name: 'asc' }],
    });

    return NextResponse.json(stations);
  });
}

// POST /api/lms/stations - Create a production station
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { name, code, type, outletId, capacity, cycleDuration } = body;

    if (!name || !code || !type) {
      return NextResponse.json({ error: 'Name, code, and type are required' }, { status: 400 });
    }

    const existing = await prisma.productionStation.findFirst({
      where: { tenantId, code },
    });

    if (existing) {
      return NextResponse.json({ error: `Station with code "${code}" already exists` }, { status: 409 });
    }

    const station = await prisma.productionStation.create({
      data: {
        tenantId,
        name,
        code,
        type,
        outletId: outletId || null,
        capacity: capacity || 0,
        cycleDuration: cycleDuration || 0,
        status: 'idle',
      },
    });

    return NextResponse.json(station, { status: 201 });
  });
}