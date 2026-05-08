import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/hr',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'hr-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Hr Dashboard', permission: 'hr:read' }
      },
      {
        path: 'employeedirectory',
        name: 'hr-employeedirectory',
        component: () => import('./views/EmployeeDirectory.vue'),
        meta: { title: 'EmployeeDirectory', permission: 'hr:read' }
      },
      {
        path: 'employeeprofile',
        name: 'hr-employeeprofile',
        component: () => import('./views/EmployeeProfile.vue'),
        meta: { title: 'EmployeeProfile', permission: 'hr:read' }
      },
      {
        path: 'recruitment',
        name: 'hr-recruitment',
        component: () => import('./views/Recruitment.vue'),
        meta: { title: 'Recruitment', permission: 'hr:read' }
      },
      {
        path: 'onboardingchecklist',
        name: 'hr-onboardingchecklist',
        component: () => import('./views/OnboardingChecklist.vue'),
        meta: { title: 'OnboardingChecklist', permission: 'hr:read' }
      },
      {
        path: 'attendancemanagement',
        name: 'hr-attendancemanagement',
        component: () => import('./views/AttendanceManagement.vue'),
        meta: { title: 'AttendanceManagement', permission: 'hr:read' }
      },
      {
        path: 'leavemanagement',
        name: 'hr-leavemanagement',
        component: () => import('./views/LeaveManagement.vue'),
        meta: { title: 'LeaveManagement', permission: 'hr:read' }
      },
      {
        path: 'payrollinput',
        name: 'hr-payrollinput',
        component: () => import('./views/PayrollInput.vue'),
        meta: { title: 'PayrollInput', permission: 'hr:read' }
      },
      {
        path: 'employeegrievance',
        name: 'hr-employeegrievance',
        component: () => import('./views/EmployeeGrievance.vue'),
        meta: { title: 'EmployeeGrievance', permission: 'hr:read' }
      },
    ]
  }
];

export default routes;
