import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/security',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'security-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Security Dashboard', permission: 'security:read' }
      },
      {
        path: 'cameramanagement',
        name: 'security-cameramanagement',
        component: () => import('./views/CameraManagement.vue'),
        meta: { title: 'CameraManagement', permission: 'security:read' }
      },
      {
        path: 'alertfeed',
        name: 'security-alertfeed',
        component: () => import('./views/AlertFeed.vue'),
        meta: { title: 'AlertFeed', permission: 'security:read' }
      },
      {
        path: 'accesscontrollog',
        name: 'security-accesscontrollog',
        component: () => import('./views/AccessControlLog.vue'),
        meta: { title: 'AccessControlLog', permission: 'security:read' }
      },
      {
        path: 'incidentmanager',
        name: 'security-incidentmanager',
        component: () => import('./views/IncidentManager.vue'),
        meta: { title: 'Incident Manager', permission: 'security:read' }
      },
      {
        path: 'guardpatrolmanagement',
        name: 'security-guardpatrolmanagement',
        component: () => import('./views/GuardPatrolManagement.vue'),
        meta: { title: 'GuardPatrolManagement', permission: 'security:read' }
      },
      {
        path: 'visitormanagement',
        name: 'security-visitormanagement',
        component: () => import('./views/VisitorManagement.vue'),
        meta: { title: 'VisitorManagement', permission: 'security:read' }
      },
      {
        path: 'keyassetmanagement',
        name: 'security-keyassetmanagement',
        component: () => import('./views/KeyAssetManagement.vue'),
        meta: { title: 'KeyAssetManagement', permission: 'security:read' }
      },
      {
        path: 'securityreport',
        name: 'security-securityreport',
        component: () => import('./views/SecurityReport.vue'),
        meta: { title: 'SecurityReport', permission: 'security:read' }
      },
      {
        path: 'emergencyprotocols',
        name: 'security-emergencyprotocols',
        component: () => import('./views/EmergencyProtocols.vue'),
        meta: { title: 'EmergencyProtocols', permission: 'security:read' }
      },
    ]
  }
];

export default routes;
