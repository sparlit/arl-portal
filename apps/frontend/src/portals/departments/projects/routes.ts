import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/projects',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'projects-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Projects Dashboard', permission: 'projects:read' }
      },
      {
        path: 'ganttchart',
        name: 'projects-ganttchart',
        component: () => import('./views/GanttChart.vue'),
        meta: { title: 'GanttChart', permission: 'projects:read' }
      },
      {
        path: 'budgettracking',
        name: 'projects-budgettracking',
        component: () => import('./views/BudgetTracking.vue'),
        meta: { title: 'BudgetTracking', permission: 'projects:read' }
      },
      {
        path: 'milestones',
        name: 'projects-milestones',
        component: () => import('./views/Milestones.vue'),
        meta: { title: 'Milestones', permission: 'projects:read' }
      },
      {
        path: 'machineryinstallation',
        name: 'projects-machineryinstallation',
        component: () => import('./views/MachineryInstallation.vue'),
        meta: { title: 'MachineryInstallation', permission: 'projects:read' }
      },
    ]
  }
];

export default routes;
