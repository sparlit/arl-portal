import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/feedback',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'feedback-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Feedback Dashboard', permission: 'feedback:read' }
      },
      {
        path: 'feedbackinbox',
        name: 'feedback-feedbackinbox',
        component: () => import('./views/FeedbackInbox.vue'),
        meta: { title: 'FeedbackInbox', permission: 'feedback:read' }
      },
      {
        path: 'complaintmanager',
        name: 'feedback-complaintmanager',
        component: () => import('./views/ComplaintManager.vue'),
        meta: { title: 'Complaint Manager', permission: 'feedback:read' }
      },
      {
        path: 'satisfactionsurveys',
        name: 'feedback-satisfactionsurveys',
        component: () => import('./views/SatisfactionSurveys.vue'),
        meta: { title: 'SatisfactionSurveys', permission: 'feedback:read' }
      },
      {
        path: 'responsetemplates',
        name: 'feedback-responsetemplates',
        component: () => import('./views/ResponseTemplates.vue'),
        meta: { title: 'ResponseTemplates', permission: 'feedback:read' }
      },
      {
        path: 'escalationmatrix',
        name: 'feedback-escalationmatrix',
        component: () => import('./views/EscalationMatrix.vue'),
        meta: { title: 'EscalationMatrix', permission: 'feedback:read' }
      },
      {
        path: 'feedbackanalytics',
        name: 'feedback-feedbackanalytics',
        component: () => import('./views/FeedbackAnalytics.vue'),
        meta: { title: 'FeedbackAnalytics', permission: 'feedback:read' }
      },
      {
        path: 'actionitems',
        name: 'feedback-actionitems',
        component: () => import('./views/ActionItems.vue'),
        meta: { title: 'ActionItems', permission: 'feedback:read' }
      },
      {
        path: 'monthlyfeedbackreport',
        name: 'feedback-monthlyfeedbackreport',
        component: () => import('./views/MonthlyFeedbackReport.vue'),
        meta: { title: 'MonthlyFeedbackReport', permission: 'feedback:read' }
      },
      {
        path: 'feedbackintegration',
        name: 'feedback-feedbackintegration',
        component: () => import('./views/FeedbackIntegration.vue'),
        meta: { title: 'FeedbackIntegration', permission: 'feedback:read' }
      },
    ]
  }
];

export default routes;
