import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/AccountSettings.vue')
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('../views/ContractManager.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/UsageAnalytics.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/InvoiceCenter.vue')
    },
    {
      path: '/sla',
      name: 'sla',
      component: () => import('../views/SLAMonitor.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactManagement.vue')
    }
  ]
})

export default router
