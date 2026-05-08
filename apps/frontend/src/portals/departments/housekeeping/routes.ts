import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/housekeeping',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'housekeeping-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Housekeeping Dashboard', permission: 'housekeeping:read' }
      },
      {
        path: 'areamanager',
        name: 'housekeeping-areamanager',
        component: () => import('./views/AreaManager.vue'),
        meta: { title: 'Area Manager', permission: 'housekeeping:read' }
      },
      {
        path: 'cleaningschedule',
        name: 'housekeeping-cleaningschedule',
        component: () => import('./views/CleaningSchedule.vue'),
        meta: { title: 'CleaningSchedule', permission: 'housekeeping:read' }
      },
      {
        path: 'taskchecklist',
        name: 'housekeeping-taskchecklist',
        component: () => import('./views/TaskChecklist.vue'),
        meta: { title: 'TaskChecklist', permission: 'housekeeping:read' }
      },
      {
        path: 'deepcleaningplanner',
        name: 'housekeeping-deepcleaningplanner',
        component: () => import('./views/DeepCleaningPlanner.vue'),
        meta: { title: 'DeepCleaningPlanner', permission: 'housekeeping:read' }
      },
      {
        path: 'supplyinventory',
        name: 'housekeeping-supplyinventory',
        component: () => import('./views/SupplyInventory.vue'),
        meta: { title: 'SupplyInventory', permission: 'housekeeping:read' }
      },
    ]
  }
];

export default routes;
