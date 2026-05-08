import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/business-development',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'business-development-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Business Development Dashboard', permission: 'business-development:read' }
      },
      {
        path: 'opportunitymanager',
        name: 'business-development-opportunitymanager',
        component: () => import('./views/OpportunityManager.vue'),
        meta: { title: 'Opportunity Manager', permission: 'business-development:read' }
      },
      {
        path: 'marketanalysis',
        name: 'business-development-marketanalysis',
        component: () => import('./views/MarketAnalysis.vue'),
        meta: { title: 'MarketAnalysis', permission: 'business-development:read' }
      },
      {
        path: 'partnershipmanager',
        name: 'business-development-partnershipmanager',
        component: () => import('./views/PartnershipManager.vue'),
        meta: { title: 'Partnership Manager', permission: 'business-development:read' }
      },
      {
        path: 'newservicedevelopment',
        name: 'business-development-newservicedevelopment',
        component: () => import('./views/NewServiceDevelopment.vue'),
        meta: { title: 'NewServiceDevelopment', permission: 'business-development:read' }
      },
      {
        path: 'branchexpansion',
        name: 'business-development-branchexpansion',
        component: () => import('./views/BranchExpansion.vue'),
        meta: { title: 'BranchExpansion', permission: 'business-development:read' }
      },
      {
        path: 'franchisedevelopment',
        name: 'business-development-franchisedevelopment',
        component: () => import('./views/FranchiseDevelopment.vue'),
        meta: { title: 'FranchiseDevelopment', permission: 'business-development:read' }
      },
      {
        path: 'competitiveintelligence',
        name: 'business-development-competitiveintelligence',
        component: () => import('./views/CompetitiveIntelligence.vue'),
        meta: { title: 'CompetitiveIntelligence', permission: 'business-development:read' }
      },
      {
        path: 'contractrenewaltracker',
        name: 'business-development-contractrenewaltracker',
        component: () => import('./views/ContractRenewalTracker.vue'),
        meta: { title: 'ContractRenewalTracker', permission: 'business-development:read' }
      },
      {
        path: 'bdactivitylog',
        name: 'business-development-bdactivitylog',
        component: () => import('./views/BDActivityLog.vue'),
        meta: { title: 'BDActivityLog', permission: 'business-development:read' }
      },
    ]
  }
];

export default routes;
