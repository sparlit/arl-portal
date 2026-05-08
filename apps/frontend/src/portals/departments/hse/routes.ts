import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/hse',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'hse-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Hse Dashboard', permission: 'hse:read' }
      },
      {
        path: 'incidentreporting',
        name: 'hse-incidentreporting',
        component: () => import('./views/IncidentReporting.vue'),
        meta: { title: 'IncidentReporting', permission: 'hse:read' }
      },
      {
        path: 'incidentinvestigation',
        name: 'hse-incidentinvestigation',
        component: () => import('./views/IncidentInvestigation.vue'),
        meta: { title: 'IncidentInvestigation', permission: 'hse:read' }
      },
      {
        path: 'ppeinventory',
        name: 'hse-ppeinventory',
        component: () => import('./views/PPEInventory.vue'),
        meta: { title: 'PPEInventory', permission: 'hse:read' }
      },
      {
        path: 'safetyinspections',
        name: 'hse-safetyinspections',
        component: () => import('./views/SafetyInspections.vue'),
        meta: { title: 'SafetyInspections', permission: 'hse:read' }
      },
      {
        path: 'chemicalsafety',
        name: 'hse-chemicalsafety',
        component: () => import('./views/ChemicalSafety.vue'),
        meta: { title: 'ChemicalSafety', permission: 'hse:read' }
      },
      {
        path: 'boilersafety',
        name: 'hse-boilersafety',
        component: () => import('./views/BoilerSafety.vue'),
        meta: { title: 'BoilerSafety', permission: 'hse:read' }
      },
      {
        path: 'firesafety',
        name: 'hse-firesafety',
        component: () => import('./views/FireSafety.vue'),
        meta: { title: 'FireSafety', permission: 'hse:read' }
      },
      {
        path: 'wastewatermonitoring',
        name: 'hse-wastewatermonitoring',
        component: () => import('./views/WastewaterMonitoring.vue'),
        meta: { title: 'WastewaterMonitoring', permission: 'hse:read' }
      },
    ]
  }
];

export default routes;
