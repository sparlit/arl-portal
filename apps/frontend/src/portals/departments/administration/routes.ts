import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/administration',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'administration-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Administration Dashboard', permission: 'administration:read' }
      },
      {
        path: 'companysettings',
        name: 'administration-companysettings',
        component: () => import('./views/CompanySettings.vue'),
        meta: { title: 'CompanySettings', permission: 'administration:read' }
      },
      {
        path: 'usermanagement',
        name: 'administration-usermanagement',
        component: () => import('./views/UserManagement.vue'),
        meta: { title: 'UserManagement', permission: 'administration:read' }
      },
      {
        path: 'rolepermissionmanager',
        name: 'administration-rolepermissionmanager',
        component: () => import('./views/RolePermissionManager.vue'),
        meta: { title: 'RolePermission Manager', permission: 'administration:read' }
      },
      {
        path: 'modulemanagement',
        name: 'administration-modulemanagement',
        component: () => import('./views/ModuleManagement.vue'),
        meta: { title: 'ModuleManagement', permission: 'administration:read' }
      },
      {
        path: 'systemconfiguration',
        name: 'administration-systemconfiguration',
        component: () => import('./views/SystemConfiguration.vue'),
        meta: { title: 'SystemConfiguration', permission: 'administration:read' }
      },
      {
        path: 'auditlogviewer',
        name: 'administration-auditlogviewer',
        component: () => import('./views/AuditLogViewer.vue'),
        meta: { title: 'AuditLogViewer', permission: 'administration:read' }
      },
      {
        path: 'branchmanagement',
        name: 'administration-branchmanagement',
        component: () => import('./views/BranchManagement.vue'),
        meta: { title: 'BranchManagement', permission: 'administration:read' }
      },
      {
        path: 'announcementboard',
        name: 'administration-announcementboard',
        component: () => import('./views/AnnouncementBoard.vue'),
        meta: { title: 'AnnouncementBoard', permission: 'administration:read' }
      },
      {
        path: 'reportscenter',
        name: 'administration-reportscenter',
        component: () => import('./views/ReportsCenter.vue'),
        meta: { title: 'ReportsCenter', permission: 'administration:read' }
      },
    ]
  }
];

export default routes;
