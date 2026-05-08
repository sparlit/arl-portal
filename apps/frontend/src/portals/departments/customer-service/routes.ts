import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/customer-service',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'customer-service-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Customer Service Dashboard', permission: 'customer-service:read' }
      },
      {
        path: 'ticketmanager',
        name: 'customer-service-ticketmanager',
        component: () => import('./views/TicketManager.vue'),
        meta: { title: 'Ticket Manager', permission: 'customer-service:read' }
      },
      {
        path: 'ticketview',
        name: 'customer-service-ticketview',
        component: () => import('./views/TicketView.vue'),
        meta: { title: 'TicketView', permission: 'customer-service:read' }
      },
      {
        path: 'newticket',
        name: 'customer-service-newticket',
        component: () => import('./views/NewTicket.vue'),
        meta: { title: 'NewTicket', permission: 'customer-service:read' }
      },
      {
        path: 'livechatmonitor',
        name: 'customer-service-livechatmonitor',
        component: () => import('./views/LiveChatMonitor.vue'),
        meta: { title: 'LiveChatMonitor', permission: 'customer-service:read' }
      },
      {
        path: 'complaintmanager',
        name: 'customer-service-complaintmanager',
        component: () => import('./views/ComplaintManager.vue'),
        meta: { title: 'Complaint Manager', permission: 'customer-service:read' }
      },
      {
        path: 'feedbackreview',
        name: 'customer-service-feedbackreview',
        component: () => import('./views/FeedbackReview.vue'),
        meta: { title: 'FeedbackReview', permission: 'customer-service:read' }
      },
      {
        path: 'knowledgebasemanager',
        name: 'customer-service-knowledgebasemanager',
        component: () => import('./views/KnowledgeBaseManager.vue'),
        meta: { title: 'KnowledgeBase Manager', permission: 'customer-service:read' }
      },
      {
        path: 'callbackrequestmanager',
        name: 'customer-service-callbackrequestmanager',
        component: () => import('./views/CallbackRequestManager.vue'),
        meta: { title: 'CallbackRequest Manager', permission: 'customer-service:read' }
      },
      {
        path: 'csatanalytics',
        name: 'customer-service-csatanalytics',
        component: () => import('./views/CSATAnalytics.vue'),
        meta: { title: 'CSATAnalytics', permission: 'customer-service:read' }
      },
    ]
  }
];

export default routes;
