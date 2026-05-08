import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/warehouse',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'warehouse-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Warehouse Dashboard', permission: 'warehouse:read' }
      },
      {
        path: 'stockoverview',
        name: 'warehouse-stockoverview',
        component: () => import('./views/StockOverview.vue'),
        meta: { title: 'StockOverview', permission: 'warehouse:read' }
      },
      {
        path: 'inboundmanagement',
        name: 'warehouse-inboundmanagement',
        component: () => import('./views/InboundManagement.vue'),
        meta: { title: 'InboundManagement', permission: 'warehouse:read' }
      },
      {
        path: 'outboundmanagement',
        name: 'warehouse-outboundmanagement',
        component: () => import('./views/OutboundManagement.vue'),
        meta: { title: 'OutboundManagement', permission: 'warehouse:read' }
      },
      {
        path: 'stockadjustment',
        name: 'warehouse-stockadjustment',
        component: () => import('./views/StockAdjustment.vue'),
        meta: { title: 'StockAdjustment', permission: 'warehouse:read' }
      },
      {
        path: 'reordermanagement',
        name: 'warehouse-reordermanagement',
        component: () => import('./views/ReorderManagement.vue'),
        meta: { title: 'ReorderManagement', permission: 'warehouse:read' }
      },
      {
        path: 'binlocationmanagement',
        name: 'warehouse-binlocationmanagement',
        component: () => import('./views/BinLocationManagement.vue'),
        meta: { title: 'BinLocationManagement', permission: 'warehouse:read' }
      },
      {
        path: 'cyclecount',
        name: 'warehouse-cyclecount',
        component: () => import('./views/CycleCount.vue'),
        meta: { title: 'CycleCount', permission: 'warehouse:read' }
      },
      {
        path: 'suppliermanagement',
        name: 'warehouse-suppliermanagement',
        component: () => import('./views/SupplierManagement.vue'),
        meta: { title: 'SupplierManagement', permission: 'warehouse:read' }
      },
      {
        path: 'inventoryreports',
        name: 'warehouse-inventoryreports',
        component: () => import('./views/InventoryReports.vue'),
        meta: { title: 'InventoryReports', permission: 'warehouse:read' }
      },
    ]
  }
];

export default routes;
