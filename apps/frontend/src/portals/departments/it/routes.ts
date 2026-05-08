import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/it',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'it-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'It Dashboard', permission: 'it:read' }
      },
      {
        path: 'servermonitoring',
        name: 'it-servermonitoring',
        component: () => import('./views/ServerMonitoring.vue'),
        meta: { title: 'ServerMonitoring', permission: 'it:read' }
      },
      {
        path: 'applicationlogs',
        name: 'it-applicationlogs',
        component: () => import('./views/ApplicationLogs.vue'),
        meta: { title: 'ApplicationLogs', permission: 'it:read' }
      },
      {
        path: 'modulehealth',
        name: 'it-modulehealth',
        component: () => import('./views/ModuleHealth.vue'),
        meta: { title: 'ModuleHealth', permission: 'it:read' }
      },
      {
        path: 'apigateway',
        name: 'it-apigateway',
        component: () => import('./views/APIGateway.vue'),
        meta: { title: 'APIGateway', permission: 'it:read' }
      },
      {
        path: 'databasemonitor',
        name: 'it-databasemonitor',
        component: () => import('./views/DatabaseMonitor.vue'),
        meta: { title: 'DatabaseMonitor', permission: 'it:read' }
      },
      {
        path: 'securitycenter',
        name: 'it-securitycenter',
        component: () => import('./views/SecurityCenter.vue'),
        meta: { title: 'SecurityCenter', permission: 'it:read' }
      },
      {
        path: 'backupmanagement',
        name: 'it-backupmanagement',
        component: () => import('./views/BackupManagement.vue'),
        meta: { title: 'BackupManagement', permission: 'it:read' }
      },
      {
        path: 'releasemanagement',
        name: 'it-releasemanagement',
        component: () => import('./views/ReleaseManagement.vue'),
        meta: { title: 'ReleaseManagement', permission: 'it:read' }
      },
      {
        path: 'itticketsystem',
        name: 'it-itticketsystem',
        component: () => import('./views/ITTicketSystem.vue'),
        meta: { title: 'ITTicketSystem', permission: 'it:read' }
      },
    ]
  }
];

export default routes;
