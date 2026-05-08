import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/sales',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'sales-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Sales Dashboard', permission: 'sales:read' }
      },
      {
        path: 'leadmanagement',
        name: 'sales-leadmanagement',
        component: () => import('./views/LeadManagement.vue'),
        meta: { title: 'LeadManagement', permission: 'sales:read' }
      },
      {
        path: 'leadcaptureform',
        name: 'sales-leadcaptureform',
        component: () => import('./views/LeadCaptureForm.vue'),
        meta: { title: 'LeadCaptureForm', permission: 'sales:read' }
      },
      {
        path: 'salespipeline',
        name: 'sales-salespipeline',
        component: () => import('./views/SalesPipeline.vue'),
        meta: { title: 'SalesPipeline', permission: 'sales:read' }
      },
      {
        path: 'corporatedeals',
        name: 'sales-corporatedeals',
        component: () => import('./views/CorporateDeals.vue'),
        meta: { title: 'CorporateDeals', permission: 'sales:read' }
      },
      {
        path: 'quotationgenerator',
        name: 'sales-quotationgenerator',
        component: () => import('./views/QuotationGenerator.vue'),
        meta: { title: 'QuotationGenerator', permission: 'sales:read' }
      },
      {
        path: 'customeracquisitiontracker',
        name: 'sales-customeracquisitiontracker',
        component: () => import('./views/CustomerAcquisitionTracker.vue'),
        meta: { title: 'CustomerAcquisitionTracker', permission: 'sales:read' }
      },
      {
        path: 'salesteamperformance',
        name: 'sales-salesteamperformance',
        component: () => import('./views/SalesTeamPerformance.vue'),
        meta: { title: 'SalesTeamPerformance', permission: 'sales:read' }
      },
      {
        path: 'pricingrequests',
        name: 'sales-pricingrequests',
        component: () => import('./views/PricingRequests.vue'),
        meta: { title: 'PricingRequests', permission: 'sales:read' }
      },
      {
        path: 'lostdealanalysis',
        name: 'sales-lostdealanalysis',
        component: () => import('./views/LostDealAnalysis.vue'),
        meta: { title: 'LostDealAnalysis', permission: 'sales:read' }
      },
    ]
  }
];

export default routes;
