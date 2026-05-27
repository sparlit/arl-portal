import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/transport',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'transport-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Transport Dashboard', permission: 'transport:read' }
      },
      {
        path: 'dispatchboard',
        name: 'transport-dispatchboard',
        component: () => import('./views/DispatchBoard.vue'),
        meta: { title: 'DispatchBoard', permission: 'transport:read' }
      },
      {
        path: 'routeplanner',
        name: 'transport-routeplanner',
        component: () => import('./views/RoutePlanner.vue'),
        meta: { title: 'RoutePlanner', permission: 'transport:read' }
      },
      {
        path: 'drivermanagement',
        name: 'transport-drivermanagement',
        component: () => import('./views/DriverManagement.vue'),
        meta: { title: 'DriverManagement', permission: 'transport:read' }
      },
      {
        path: 'vehiclemanagement',
        name: 'transport-vehiclemanagement',
        component: () => import('./views/VehicleManagement.vue'),
        meta: { title: 'VehicleManagement', permission: 'transport:read' }
      },
      {
        path: 'deliveryexecution',
        name: 'transport-deliveryexecution',
        component: () => import('./views/DeliveryExecution.vue'),
        meta: { title: 'DeliveryExecution', permission: 'transport:read' }
      },
      {
        path: 'pickupexecution',
        name: 'transport-pickupexecution',
        component: () => import('./views/PickupExecution.vue'),
        meta: { title: 'PickupExecution', permission: 'transport:read' }
      },
      {
        path: 'zonemanagement',
        name: 'transport-zonemanagement',
        component: () => import('./views/ZoneManagement.vue'),
        meta: { title: 'ZoneManagement', permission: 'transport:read' }
      },
      {
        path: 'faileddeliverymanagement',
        name: 'transport-faileddeliverymanagement',
        component: () => import('./views/FailedDeliveryManagement.vue'),
        meta: { title: 'FailedDeliveryManagement', permission: 'transport:read' }
      },
      {
        path: 'transportanalytics',
        name: 'transport-transportanalytics',
        component: () => import('./views/TransportAnalytics.vue'),
        meta: { title: 'TransportAnalytics', permission: 'transport:read' }
      },
    ]
  }
];

export default routes;
