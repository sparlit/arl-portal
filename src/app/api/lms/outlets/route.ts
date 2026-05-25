import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/outlets - List all outlets/branches
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');

    const where: any = { tenantId };
    if (type) where.type = type;
    if (status) where.status = status;

    const outlets = await prisma.outlet.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(outlets);
  });
}

// POST /api/lms/outlets - Create a new outlet/branch
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { name, code, type, address, phone, email, managerName, latitude, longitude, openingTime, closingTime, serviceTypes } = body;

    if (!name || !code) {
      return NextResponse.json({ error: 'Name and code are required' }, { status: 400 });
    }

    const existing = await prisma.outlet.findFirst({
      where: { tenantId, code },
    });

    if (existing) {
      return NextResponse.json({ error: `Outlet with code "${code}" already exists` }, { status: 409 });
    }

    const outlet = await prisma.outlet.create({
      data: {
        tenantId,
        name,
        code,
        type: type || 'retail',
        address,
        phone,
        email,
        managerName,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        openingTime,
        closingTime,
        serviceTypes: serviceTypes ? JSON.stringify(serviceTypes) : null,
      },
    });

    return NextResponse.json(outlet, { status: 201 });
  });
}