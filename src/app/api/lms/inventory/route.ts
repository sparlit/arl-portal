import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/inventory - List inventory transactions
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const itemName = searchParams.get('itemName');

    const where: any = { tenantId };
    if (type) where.type = type;
    if (itemName) where.itemName = { contains: itemName, mode: 'insensitive' };

    const transactions = await prisma.inventoryTransaction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    // Calculate summary
    const summary = {
      totalInbound: transactions.filter(t => t.type === 'inbound').reduce((s, t) => s + t.quantity, 0),
      totalOutbound: transactions.filter(t => t.type === 'outbound').reduce((s, t) => s + t.quantity, 0),
      totalAdjustments: transactions.filter(t => t.type === 'adjustment').length,
      byType: {} as Record<string, number>,
    };

    transactions.forEach(t => {
      const key = t.type || 'unknown';
      summary.byType[key] = (summary.byType[key] || 0) + t.quantity;
    });

    return NextResponse.json({ transactions, summary });
  });
}

// POST /api/lms/inventory - Record an inventory transaction
export async function POST(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const body = await request.json();
    const { type, itemId, itemName, quantity, unit, source, destination, referenceNo, notes, performedBy } = body;

    if (!type || !itemName || quantity === undefined) {
      return NextResponse.json({ error: 'Type, itemName, and quantity are required' }, { status: 400 });
    }

    const transaction = await prisma.inventoryTransaction.create({
      data: {
        tenantId,
        type,
        itemId: itemId || null,
        itemName,
        quantity: parseFloat(quantity),
        unit: unit || 'kg',
        source: source || null,
        destination: destination || null,
        referenceNo: referenceNo || null,
        notes: notes || null,
        performedBy: performedBy || null,
      },
    });

    return NextResponse.json(transaction, { status: 201 });
  });
}