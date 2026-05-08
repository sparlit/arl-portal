import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/maintenance',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'maintenance-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Maintenance Dashboard', permission: 'maintenance:read' }
      },
      {
        path: 'preventivemaintenance',
        name: 'maintenance-preventivemaintenance',
        component: () => import('./views/PreventiveMaintenance.vue'),
        meta: { title: 'PreventiveMaintenance', permission: 'maintenance:read' }
      },
      {
        path: 'spareparts',
        name: 'maintenance-spareparts',
        component: () => import('./views/SpareParts.vue'),
        meta: { title: 'SpareParts', permission: 'maintenance:read' }
      },
      {
        path: 'workorders',
        name: 'maintenance-workorders',
        component: () => import('./views/WorkOrders.vue'),
        meta: { title: 'WorkOrders', permission: 'maintenance:read' }
      },
      {
        path: 'breakdownalerts',
        name: 'maintenance-breakdownalerts',
        component: () => import('./views/BreakdownAlerts.vue'),
        meta: { title: 'BreakdownAlerts', permission: 'maintenance:read' }
      },
    ]
  }
];

export default routes;
