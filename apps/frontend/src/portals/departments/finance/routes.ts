import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/finance',
    component: () => import('./Layout.vue'),
    children: [
      {
        path: '',
        name: 'finance-dashboard',
        component: () => import('./views/Dashboard.vue'),
        meta: { title: 'Finance Dashboard', permission: 'finance:read' }
      },
      {
        path: 'invoicemanager',
        name: 'finance-invoicemanager',
        component: () => import('./views/InvoiceManager.vue'),
        meta: { title: 'Invoice Manager', permission: 'finance:read' }
      },
      {
        path: 'paymentreconciliation',
        name: 'finance-paymentreconciliation',
        component: () => import('./views/PaymentReconciliation.vue'),
        meta: { title: 'PaymentReconciliation', permission: 'finance:read' }
      },
      {
        path: 'corporatebilling',
        name: 'finance-corporatebilling',
        component: () => import('./views/CorporateBilling.vue'),
        meta: { title: 'CorporateBilling', permission: 'finance:read' }
      },
      {
        path: 'expensemanagement',
        name: 'finance-expensemanagement',
        component: () => import('./views/ExpenseManagement.vue'),
        meta: { title: 'ExpenseManagement', permission: 'finance:read' }
      },
      {
        path: 'payrollprocessing',
        name: 'finance-payrollprocessing',
        component: () => import('./views/PayrollProcessing.vue'),
        meta: { title: 'PayrollProcessing', permission: 'finance:read' }
      },
      {
        path: 'cashflowmanager',
        name: 'finance-cashflowmanager',
        component: () => import('./views/CashFlowManager.vue'),
        meta: { title: 'CashFlow Manager', permission: 'finance:read' }
      },
      {
        path: 'accountsreceivable',
        name: 'finance-accountsreceivable',
        component: () => import('./views/AccountsReceivable.vue'),
        meta: { title: 'AccountsReceivable', permission: 'finance:read' }
      },
      {
        path: 'accountspayable',
        name: 'finance-accountspayable',
        component: () => import('./views/AccountsPayable.vue'),
        meta: { title: 'AccountsPayable', permission: 'finance:read' }
      },
      {
        path: 'financialreports',
        name: 'finance-financialreports',
        component: () => import('./views/FinancialReports.vue'),
        meta: { title: 'FinancialReports', permission: 'finance:read' }
      },
    ]
  }
];

export default routes;
