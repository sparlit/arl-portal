import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/claims',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'claims-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Claims Dashboard', permission: 'claims:read' }
      },
      {
        path: 'claimmanager',
        name: 'claims-claimmanager',
        component: () => import('./views/ClaimManager.vue'),
        meta: { title: 'Claim Manager', permission: 'claims:read' }
      },
      {
        path: 'newclaim',
        name: 'claims-newclaim',
        component: () => import('./views/NewClaim.vue'),
        meta: { title: 'NewClaim', permission: 'claims:read' }
      },
      {
        path: 'investigation',
        name: 'claims-investigation',
        component: () => import('./views/Investigation.vue'),
        meta: { title: 'Investigation', permission: 'claims:read' }
      },
      {
        path: 'compensationcalculator',
        name: 'claims-compensationcalculator',
        component: () => import('./views/CompensationCalculator.vue'),
        meta: { title: 'CompensationCalculator', permission: 'claims:read' }
      },
      {
        path: 'approvalworkflow',
        name: 'claims-approvalworkflow',
        component: () => import('./views/ApprovalWorkflow.vue'),
        meta: { title: 'ApprovalWorkflow', permission: 'claims:read' }
      },
      {
        path: 'customercommunication',
        name: 'claims-customercommunication',
        component: () => import('./views/CustomerCommunication.vue'),
        meta: { title: 'CustomerCommunication', permission: 'claims:read' }
      },
      {
        path: 'insurancecoordination',
        name: 'claims-insurancecoordination',
        component: () => import('./views/InsuranceCoordination.vue'),
        meta: { title: 'InsuranceCoordination', permission: 'claims:read' }
      },
      {
        path: 'claimanalytics',
        name: 'claims-claimanalytics',
        component: () => import('./views/ClaimAnalytics.vue'),
        meta: { title: 'ClaimAnalytics', permission: 'claims:read' }
      },
      {
        path: 'policyconfiguration',
        name: 'claims-policyconfiguration',
        component: () => import('./views/PolicyConfiguration.vue'),
        meta: { title: 'PolicyConfiguration', permission: 'claims:read' }
      },
    ]
  }
];

export default routes;
