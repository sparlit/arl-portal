import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/loyalty',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'loyalty-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Loyalty Dashboard', permission: 'loyalty:read' }
      },
      {
        path: 'membermanagement',
        name: 'loyalty-membermanagement',
        component: () => import('./views/MemberManagement.vue'),
        meta: { title: 'MemberManagement', permission: 'loyalty:read' }
      },
      {
        path: 'pointsconfiguration',
        name: 'loyalty-pointsconfiguration',
        component: () => import('./views/PointsConfiguration.vue'),
        meta: { title: 'PointsConfiguration', permission: 'loyalty:read' }
      },
      {
        path: 'tiermanagement',
        name: 'loyalty-tiermanagement',
        component: () => import('./views/TierManagement.vue'),
        meta: { title: 'TierManagement', permission: 'loyalty:read' }
      },
      {
        path: 'rewardcatalog',
        name: 'loyalty-rewardcatalog',
        component: () => import('./views/RewardCatalog.vue'),
        meta: { title: 'RewardCatalog', permission: 'loyalty:read' }
      },
      {
        path: 'referralprogram',
        name: 'loyalty-referralprogram',
        component: () => import('./views/ReferralProgram.vue'),
        meta: { title: 'ReferralProgram', permission: 'loyalty:read' }
      },
      {
        path: 'pointsadjustment',
        name: 'loyalty-pointsadjustment',
        component: () => import('./views/PointsAdjustment.vue'),
        meta: { title: 'PointsAdjustment', permission: 'loyalty:read' }
      },
      {
        path: 'membercommunication',
        name: 'loyalty-membercommunication',
        component: () => import('./views/MemberCommunication.vue'),
        meta: { title: 'MemberCommunication', permission: 'loyalty:read' }
      },
      {
        path: 'loyaltyanalytics',
        name: 'loyalty-loyaltyanalytics',
        component: () => import('./views/LoyaltyAnalytics.vue'),
        meta: { title: 'LoyaltyAnalytics', permission: 'loyalty:read' }
      },
      {
        path: 'frauddetection',
        name: 'loyalty-frauddetection',
        component: () => import('./views/FraudDetection.vue'),
        meta: { title: 'FraudDetection', permission: 'loyalty:read' }
      },
    ]
  }
];

export default routes;
