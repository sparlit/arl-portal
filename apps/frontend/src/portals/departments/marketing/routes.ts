import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/marketing',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'marketing-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Marketing Dashboard', permission: 'marketing:read' }
      },
      {
        path: 'campaignmanager',
        name: 'marketing-campaignmanager',
        component: () => import('./views/CampaignManager.vue'),
        meta: { title: 'Campaign Manager', permission: 'marketing:read' }
      },
      {
        path: 'promocodemanager',
        name: 'marketing-promocodemanager',
        component: () => import('./views/PromoCodeManager.vue'),
        meta: { title: 'PromoCode Manager', permission: 'marketing:read' }
      },
      {
        path: 'contentcalendar',
        name: 'marketing-contentcalendar',
        component: () => import('./views/ContentCalendar.vue'),
        meta: { title: 'ContentCalendar', permission: 'marketing:read' }
      },
      {
        path: 'emailcampaignbuilder',
        name: 'marketing-emailcampaignbuilder',
        component: () => import('./views/EmailCampaignBuilder.vue'),
        meta: { title: 'EmailCampaignBuilder', permission: 'marketing:read' }
      },
      {
        path: 'smscampaignbuilder',
        name: 'marketing-smscampaignbuilder',
        component: () => import('./views/SMSCampaignBuilder.vue'),
        meta: { title: 'SMSCampaignBuilder', permission: 'marketing:read' }
      },
      {
        path: 'socialmediatracker',
        name: 'marketing-socialmediatracker',
        component: () => import('./views/SocialMediaTracker.vue'),
        meta: { title: 'SocialMediaTracker', permission: 'marketing:read' }
      },
      {
        path: 'seomanager',
        name: 'marketing-seomanager',
        component: () => import('./views/SEOManager.vue'),
        meta: { title: 'SEO Manager', permission: 'marketing:read' }
      },
      {
        path: 'referralprogrammanager',
        name: 'marketing-referralprogrammanager',
        component: () => import('./views/ReferralProgramManager.vue'),
        meta: { title: 'ReferralProgram Manager', permission: 'marketing:read' }
      },
      {
        path: 'brandassetmanager',
        name: 'marketing-brandassetmanager',
        component: () => import('./views/BrandAssetManager.vue'),
        meta: { title: 'BrandAsset Manager', permission: 'marketing:read' }
      },
    ]
  }
];

export default routes;
