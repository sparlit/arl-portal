import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { withTenant } from '@/lib/api-middleware';

// GET /api/lms/dashboard - LMS dashboard with key metrics
export async function GET(request: NextRequest) {
  return withTenant(request, async (tenantId: string) => {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    const queryDate = dateParam ? new Date(dateParam) : new Date();
    const startOfDay = new Date(queryDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(queryDate.setHours(23, 59, 59, 999));

    // Garment counts by status
    const garmentsByStatus = await prisma.garment.groupBy({
      by: ['currentStatus'],
      where: { tenantId },
      _count: true,
    });

    // Garments received today
    const garmentsToday = await prisma.garment.count({
      where: {
        tenantId,
        createdAt: { gte: startOfDay, lte: endOfDay },
      },
    });

    // Garments delivered today
    const garmentsDeliveredToday = await prisma.garment.count({
      where: {
        tenantId,
        deliveredAt: { gte: startOfDay, lte: endOfDay },
      },
    });

    // Active garments (received but not yet delivered/cancelled)
    const activeGarments = await prisma.garment.count({
      where: {
        tenantId,
        currentStatus: { notIn: ['delivered', 'cancelled'] },
      },
    });

    // Outlet counts
    const outletsByType = await prisma.outlet.groupBy({
      by: ['type'],
      where: { tenantId },
      _count: true,
    });

    // Production station load
    const stationsByStatus = await prisma.productionStation.groupBy({
      by: ['status'],
      where: { tenantId },
      _count: true,
    });

    // Manufacturing orders
    const ordersByStatus = await prisma.manufacturingOrder.groupBy({
      by: ['status'],
      where: { tenantId },
      _count: true,
    });

    const totalOrderItems = await prisma.manufacturingOrder.aggregate({
      where: { tenantId },
      _sum: { totalItems: true, completedItems: true, defectiveItems: true },
    });

    // Active routes
    const activeRoutes = await prisma.route.count({
      where: { tenantId, status: 'active' },
    });

    // Today's dispatches
    const dispatchesToday = await prisma.driverDispatch.count({
      where: {
        tenantId,
        shiftDate: { gte: startOfDay, lte: endOfDay },
      },
    });

    // Inventory summary
    const recentInventory = await prisma.inventoryTransaction.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    // Damage/stain stats
    const damagedGarments = await prisma.garment.count({
      where: { tenantId, hasDamage: true },
    });
    const stainedGarments = await prisma.garment.count({
      where: { tenantId, hasStains: true },
    });
    const qcFailedGarments = await prisma.garment.count({
      where: { tenantId, qcPassed: false },
    });

    // Build status distribution map
    const statusDistribution: Record<string, number> = {};
    const allGarments = await prisma.garment.count({ where: { tenantId } });
    garmentsByStatus.forEach(g => {
      statusDistribution[g.currentStatus] = g._count;
    });

    return NextResponse.json({
      summary: {
        totalGarments: allGarments,
        activeGarments,
        garmentsToday,
        garmentsDeliveredToday,
        damaged: damagedGarments,
        stained: stainedGarments,
        qcFailed: qcFailedGarments,
        activeRoutes,
        dispatchesToday,
      },
      statusDistribution,
      outlets: {
        total: outletsByType.reduce((s, o) => s + o._count, 0),
        byType: Object.fromEntries(outletsByType.map(o => [o.type, o._count])),
      },
      production: {
        stationsByStatus: Object.fromEntries(stationsByStatus.map(s => [s.status, s._count])),
        ordersByStatus: Object.fromEntries(ordersByStatus.map(o => [o.status, o._count])),
        totalItems: totalOrderItems._sum.totalItems || 0,
        completedItems: totalOrderItems._sum.completedItems || 0,
        defectiveItems: totalOrderItems._sum.defectiveItems || 0,
      },
      recentInventory,
    });
  });
}