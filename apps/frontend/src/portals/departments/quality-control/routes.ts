import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/quality-control',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'quality-control-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Quality Control Dashboard', permission: 'quality-control:read' }
      },
      {
        path: 'inspectionqueue',
        name: 'quality-control-inspectionqueue',
        component: () => import('./views/InspectionQueue.vue'),
        meta: { title: 'InspectionQueue', permission: 'quality-control:read' }
      },
      {
        path: 'inspectionchecklist',
        name: 'quality-control-inspectionchecklist',
        component: () => import('./views/InspectionChecklist.vue'),
        meta: { title: 'InspectionChecklist', permission: 'quality-control:read' }
      },
      {
        path: 'defectcatalog',
        name: 'quality-control-defectcatalog',
        component: () => import('./views/DefectCatalog.vue'),
        meta: { title: 'DefectCatalog', permission: 'quality-control:read' }
      },
      {
        path: 'reworkmanagement',
        name: 'quality-control-reworkmanagement',
        component: () => import('./views/ReworkManagement.vue'),
        meta: { title: 'ReworkManagement', permission: 'quality-control:read' }
      },
      {
        path: 'qualitystandards',
        name: 'quality-control-qualitystandards',
        component: () => import('./views/QualityStandards.vue'),
        meta: { title: 'QualityStandards', permission: 'quality-control:read' }
      },
      {
        path: 'customerqualitycomplaints',
        name: 'quality-control-customerqualitycomplaints',
        component: () => import('./views/CustomerQualityComplaints.vue'),
        meta: { title: 'CustomerQualityComplaints', permission: 'quality-control:read' }
      },
      {
        path: 'qcstaffperformance',
        name: 'quality-control-qcstaffperformance',
        component: () => import('./views/QCStaffPerformance.vue'),
        meta: { title: 'QCStaffPerformance', permission: 'quality-control:read' }
      },
      {
        path: 'qualityreports',
        name: 'quality-control-qualityreports',
        component: () => import('./views/QualityReports.vue'),
        meta: { title: 'QualityReports', permission: 'quality-control:read' }
      },
      {
        path: 'supplierquality',
        name: 'quality-control-supplierquality',
        component: () => import('./views/SupplierQuality.vue'),
        meta: { title: 'SupplierQuality', permission: 'quality-control:read' }
      },
    ]
  }
];

export default routes;
