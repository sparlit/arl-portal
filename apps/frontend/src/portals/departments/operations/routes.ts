import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/operations',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'operations-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Operations Dashboard', permission: 'operations:read' }
      },
      {
        path: 'orderlifecyclemanager',
        name: 'operations-orderlifecyclemanager',
        component: () => import('./views/OrderLifecycleManager.vue'),
        meta: { title: 'OrderLifecycle Manager', permission: 'operations:read' }
      },
      {
        path: 'capacityplanning',
        name: 'operations-capacityplanning',
        component: () => import('./views/CapacityPlanning.vue'),
        meta: { title: 'CapacityPlanning', permission: 'operations:read' }
      },
      {
        path: 'slamonitor',
        name: 'operations-slamonitor',
        component: () => import('./views/SLAMonitor.vue'),
        meta: { title: 'SLAMonitor', permission: 'operations:read' }
      },
      {
        path: 'exceptionmanagement',
        name: 'operations-exceptionmanagement',
        component: () => import('./views/ExceptionManagement.vue'),
        meta: { title: 'ExceptionManagement', permission: 'operations:read' }
      },
      {
        path: 'interdepartmentworkflow',
        name: 'operations-interdepartmentworkflow',
        component: () => import('./views/InterDepartmentWorkflow.vue'),
        meta: { title: 'InterDepartmentWorkflow', permission: 'operations:read' }
      },
      {
        path: 'branchoperations',
        name: 'operations-branchoperations',
        component: () => import('./views/BranchOperations.vue'),
        meta: { title: 'BranchOperations', permission: 'operations:read' }
      },
      {
        path: 'processconfiguration',
        name: 'operations-processconfiguration',
        component: () => import('./views/ProcessConfiguration.vue'),
        meta: { title: 'ProcessConfiguration', permission: 'operations:read' }
      },
      {
        path: 'resourceallocation',
        name: 'operations-resourceallocation',
        component: () => import('./views/ResourceAllocation.vue'),
        meta: { title: 'ResourceAllocation', permission: 'operations:read' }
      },
      {
        path: 'dailyoperationsreport',
        name: 'operations-dailyoperationsreport',
        component: () => import('./views/DailyOperationsReport.vue'),
        meta: { title: 'DailyOperationsReport', permission: 'operations:read' }
      },
    ]
  }
];

export default routes;
