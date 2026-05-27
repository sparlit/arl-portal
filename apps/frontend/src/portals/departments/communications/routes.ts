import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/communications',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'communications-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Communications Dashboard', permission: 'communications:read' }
      },
      {
        path: 'pressreleasemanager',
        name: 'communications-pressreleasemanager',
        component: () => import('./views/PressReleaseManager.vue'),
        meta: { title: 'PressRelease Manager', permission: 'communications:read' }
      },
      {
        path: 'mediarelations',
        name: 'communications-mediarelations',
        component: () => import('./views/MediaRelations.vue'),
        meta: { title: 'MediaRelations', permission: 'communications:read' }
      },
      {
        path: 'internalcommunications',
        name: 'communications-internalcommunications',
        component: () => import('./views/InternalCommunications.vue'),
        meta: { title: 'InternalCommunications', permission: 'communications:read' }
      },
      {
        path: 'socialmediacontent',
        name: 'communications-socialmediacontent',
        component: () => import('./views/SocialMediaContent.vue'),
        meta: { title: 'SocialMediaContent', permission: 'communications:read' }
      },
      {
        path: 'crisiscommunication',
        name: 'communications-crisiscommunication',
        component: () => import('./views/CrisisCommunication.vue'),
        meta: { title: 'CrisisCommunication', permission: 'communications:read' }
      },
      {
        path: 'brandvoiceguide',
        name: 'communications-brandvoiceguide',
        component: () => import('./views/BrandVoiceGuide.vue'),
        meta: { title: 'BrandVoiceGuide', permission: 'communications:read' }
      },
      {
        path: 'eventcommunications',
        name: 'communications-eventcommunications',
        component: () => import('./views/EventCommunications.vue'),
        meta: { title: 'EventCommunications', permission: 'communications:read' }
      },
      {
        path: 'translationmanager',
        name: 'communications-translationmanager',
        component: () => import('./views/TranslationManager.vue'),
        meta: { title: 'Translation Manager', permission: 'communications:read' }
      },
      {
        path: 'communicationsanalytics',
        name: 'communications-communicationsanalytics',
        component: () => import('./views/CommunicationsAnalytics.vue'),
        meta: { title: 'CommunicationsAnalytics', permission: 'communications:read' }
      },
    ]
  }
];

export default routes;
