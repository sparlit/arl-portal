import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/dispatch - List driver dispatches
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const status = searchParams.get('status');
    const driverName = searchParams.get('driverName');

    const where: any = { tenantId };
    if (date) {
      const d = new Date(date);
      where.shiftDate = {
        gte: new Date(d.setHours(0, 0, 0, 0)),
        lte: new Date(d.setHours(23, 59, 59, 999)),
      };
    }
    if (status) where.status = status;
    if (driverName) where.driverName = { contains: driverName, mode: 'insensitive' };

    const dispatches = await prisma.driverDispatch.findMany({
      where,
      orderBy: [{ shiftDate: 'desc' }, { driverName: 'asc' }],
    });

    return NextResponse.json(dispatches);
  });
}

// POST /api/lms/dispatch - Create or update a driver dispatch
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { driverName, driverPhone, vehicleId, vehiclePlate, shiftDate, startTime, routeId, notes } = body;

    if (!driverName || !shiftDate) {
      return NextResponse.json({ error: 'Driver name and shift date are required' }, { status: 400 });
    }

    // Check if dispatch already exists for this driver on this date
    const existing = await prisma.driverDispatch.findFirst({
      where: {
        tenantId,
        driverName,
        shiftDate: {
          gte: new Date(new Date(shiftDate).setHours(0, 0, 0, 0)),
          lte: new Date(new Date(shiftDate).setHours(23, 59, 59, 999)),
        },
      },
    });

    if (existing) {
      // Update existing dispatch (clock-in/out, status changes)
      const updated = await prisma.driverDispatch.update({
        where: { id: existing.id },
        data: {
          driverPhone: driverPhone || existing.driverPhone,
          vehicleId: vehicleId || existing.vehicleId,
          vehiclePlate: vehiclePlate || existing.vehiclePlate,
          startTime: startTime ? new Date(startTime) : existing.startTime,
          endTime: body.endTime ? new Date(body.endTime) : existing.endTime,
          status: body.status || existing.status,
          routeId: routeId || existing.routeId,
          notes: notes || existing.notes,
        },
      });
      return NextResponse.json(updated);
    }

    const dispatch = await prisma.driverDispatch.create({
      data: {
        tenantId,
        driverName,
        driverPhone: driverPhone || null,
        vehicleId: vehicleId || null,
        vehiclePlate: vehiclePlate || null,
        shiftDate: new Date(shiftDate),
        startTime: startTime ? new Date(startTime) : null,
        endTime: body.endTime ? new Date(body.endTime) : null,
        status: body.status || 'scheduled',
        routeId: routeId || null,
        notes: notes || null,
      },
    });

    return NextResponse.json(dispatch, { status: 201 });
  });
}