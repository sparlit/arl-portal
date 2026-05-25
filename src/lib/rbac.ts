export type Role = 'SUPERADMIN' | 'ADMIN' | 'MANAGER' | 'OPERATOR' | 'CUSTOMER';

export type PortalType = 'it' | 'laundry' | 'crm' | 'maintenance' | 'stores' | 'transport' | 'production' | 'admin' | 'legal' | 'i18n' | 'accessibility' | 'partners' | 'ai' | 'calendar';

export interface Permission {
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  subject:
    | 'User'
    | 'Tenant'
    | 'Asset'
    | 'ITTicket'
    | 'LaundryOrder'
    | 'LaundryCustomer'
    | 'LaundryTicket'
    | 'Report'
    | 'Setting'
    | 'StoreItem'
    | 'PurchaseRequisition'
    | 'PurchaseOrder'
    | 'MaintenanceTask'
    | 'Vehicle'
    | 'Trip'
    | 'Lead'
    | 'ProductionBatch'
    | 'LegalMatter'
    | 'Translation'
    | 'AccessibilityAudit'
    | 'Partner'
    | 'BotConfig'
    | 'Event';
}

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  SUPERADMIN: [
    { action: 'manage', subject: 'Tenant' },
    { action: 'manage', subject: 'User' },
    { action: 'manage', subject: 'Asset' },
    { action: 'manage', subject: 'ITTicket' },
    { action: 'manage', subject: 'LaundryOrder' },
    { action: 'manage', subject: 'LaundryCustomer' },
    { action: 'manage', subject: 'LaundryTicket' },
    { action: 'manage', subject: 'Report' },
    { action: 'manage', subject: 'Setting' },
    { action: 'manage', subject: 'StoreItem' },
    { action: 'manage', subject: 'PurchaseRequisition' },
    { action: 'manage', subject: 'PurchaseOrder' },
    { action: 'manage', subject: 'MaintenanceTask' },
    { action: 'manage', subject: 'Vehicle' },
    { action: 'manage', subject: 'Trip' },
    { action: 'manage', subject: 'Lead' },
    { action: 'manage', subject: 'ProductionBatch' },
    { action: 'manage', subject: 'LegalMatter' },
    { action: 'manage', subject: 'Translation' },
    { action: 'manage', subject: 'AccessibilityAudit' },
    { action: 'manage', subject: 'Partner' },
    { action: 'manage', subject: 'BotConfig' },
    { action: 'manage', subject: 'Event' },
  ],
  ADMIN: [
    { action: 'manage', subject: 'User' },
    { action: 'manage', subject: 'Asset' },
    { action: 'manage', subject: 'ITTicket' },
    { action: 'manage', subject: 'LaundryOrder' },
    { action: 'manage', subject: 'LaundryCustomer' },
    { action: 'manage', subject: 'LaundryTicket' },
    { action: 'manage', subject: 'Report' },
    { action: 'manage', subject: 'Setting' },
    { action: 'manage', subject: 'StoreItem' },
    { action: 'manage', subject: 'PurchaseRequisition' },
    { action: 'manage', subject: 'PurchaseOrder' },
    { action: 'manage', subject: 'MaintenanceTask' },
    { action: 'manage', subject: 'Vehicle' },
    { action: 'manage', subject: 'Trip' },
    { action: 'manage', subject: 'Lead' },
    { action: 'manage', subject: 'ProductionBatch' },
    { action: 'manage', subject: 'LegalMatter' },
    { action: 'manage', subject: 'Translation' },
    { action: 'manage', subject: 'AccessibilityAudit' },
    { action: 'manage', subject: 'Partner' },
    { action: 'manage', subject: 'BotConfig' },
    { action: 'manage', subject: 'Event' },
  ],
  MANAGER: [
    { action: 'read', subject: 'User' },
    { action: 'manage', subject: 'Asset' },
    { action: 'manage', subject: 'ITTicket' },
    { action: 'manage', subject: 'LaundryOrder' },
    { action: 'manage', subject: 'LaundryCustomer' },
    { action: 'manage', subject: 'LaundryTicket' },
    { action: 'manage', subject: 'StoreItem' },
    { action: 'manage', subject: 'PurchaseRequisition' },
    { action: 'manage', subject: 'MaintenanceTask' },
    { action: 'manage', subject: 'Vehicle' },
    { action: 'manage', subject: 'Trip' },
    { action: 'manage', subject: 'Lead' },
    { action: 'manage', subject: 'ProductionBatch' },
    { action: 'read', subject: 'Report' },
  ],
  OPERATOR: [
    { action: 'read', subject: 'Asset' },
    { action: 'manage', subject: 'ITTicket' },
    { action: 'manage', subject: 'LaundryOrder' },
    { action: 'read', subject: 'LaundryCustomer' },
    { action: 'create', subject: 'LaundryTicket' },
    { action: 'read', subject: 'StoreItem' },
    { action: 'create', subject: 'PurchaseRequisition' },
    { action: 'read', subject: 'Vehicle' },
    { action: 'create', subject: 'Trip' },
  ],
  CUSTOMER: [
    { action: 'read', subject: 'LaundryOrder' },
    { action: 'manage', subject: 'LaundryTicket' },
  ],
};

export function hasPermission(role: Role, action: Permission['action'], subject: Permission['subject']): boolean {
  const permissions = ROLE_PERMISSIONS[role];
  if (!permissions) return false;

  return permissions.some(p =>
    (p.action === 'manage' || p.action === action) && p.subject === subject
  );
}

export function hasPortalAccess(user: any, portal: PortalType): boolean {
  if (user.role === 'SUPERADMIN') return true;

  const portalPermissions = user.portalPermissions || {};
  return !!portalPermissions[portal] && portalPermissions[portal].length > 0;
}
