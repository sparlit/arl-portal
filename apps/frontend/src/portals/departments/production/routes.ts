import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/production',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'production-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Production Dashboard', permission: 'production:read' }
      },
      {
        path: 'orderqueue',
        name: 'production-orderqueue',
        component: () => import('./views/OrderQueue.vue'),
        meta: { title: 'OrderQueue', permission: 'production:read' }
      },
      {
        path: 'washingstation',
        name: 'production-washingstation',
        component: () => import('./views/WashingStation.vue'),
        meta: { title: 'WashingStation', permission: 'production:read' }
      },
      {
        path: 'dryingstation',
        name: 'production-dryingstation',
        component: () => import('./views/DryingStation.vue'),
        meta: { title: 'DryingStation', permission: 'production:read' }
      },
    ]
  }
];

export default routes;
