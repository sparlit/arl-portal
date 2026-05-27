import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/procurement',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'procurement-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Procurement Dashboard', permission: 'procurement:read' }
      },
      {
        path: 'vendormanagement',
        name: 'procurement-vendormanagement',
        component: () => import('./views/VendorManagement.vue'),
        meta: { title: 'VendorManagement', permission: 'procurement:read' }
      },
      {
        path: 'purchaseorders',
        name: 'procurement-purchaseorders',
        component: () => import('./views/PurchaseOrders.vue'),
        meta: { title: 'PurchaseOrders', permission: 'procurement:read' }
      },
      {
        path: 'rfq',
        name: 'procurement-rfq',
        component: () => import('./views/RFQ.vue'),
        meta: { title: 'RFQ', permission: 'procurement:read' }
      },
      {
        path: 'supplierscorecards',
        name: 'procurement-supplierscorecards',
        component: () => import('./views/SupplierScorecards.vue'),
        meta: { title: 'SupplierScorecards', permission: 'procurement:read' }
      },
      {
        path: 'negotiations',
        name: 'procurement-negotiations',
        component: () => import('./views/Negotiations.vue'),
        meta: { title: 'Negotiations', permission: 'procurement:read' }
      },
    ]
  }
];

export default routes;
