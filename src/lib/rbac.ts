export type Role = 'SUPERADMIN' | 'ADMIN' | 'MANAGER' | 'OPERATOR' | 'CUSTOMER';

export type PortalType = 'it' | 'laundry' | 'crm' | 'maintenance' | 'stores' | 'transport' | 'production' | 'admin' | 'lms';

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
    // LMS Subjects
    | 'Garment'
    | 'GarmentLifecycleEvent'
    | 'Outlet'
    | 'ProductionStation'
    | 'ProductionSchedule'
    | 'ManufacturingOrder'
    | 'Route'
    | 'RouteStop'
    | 'DriverDispatch'
    | 'InventoryTransaction';
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
    // LMS
    { action: 'manage', subject: 'Garment' },
    { action: 'manage', subject: 'GarmentLifecycleEvent' },
    { action: 'manage', subject: 'Outlet' },
    { action: 'manage', subject: 'ProductionStation' },
    { action: 'manage', subject: 'ProductionSchedule' },
    { action: 'manage', subject: 'ManufacturingOrder' },
    { action: 'manage', subject: 'Route' },
    { action: 'manage', subject: 'RouteStop' },
    { action: 'manage', subject: 'DriverDispatch' },
    { action: 'manage', subject: 'InventoryTransaction' },
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
    // LMS
    { action: 'manage', subject: 'Garment' },
    { action: 'manage', subject: 'GarmentLifecycleEvent' },
    { action: 'manage', subject: 'Outlet' },
    { action: 'manage', subject: 'ProductionStation' },
    { action: 'manage', subject: 'ProductionSchedule' },
    { action: 'manage', subject: 'ManufacturingOrder' },
    { action: 'manage', subject: 'Route' },
    { action: 'manage', subject: 'RouteStop' },
    { action: 'manage', subject: 'DriverDispatch' },
    { action: 'manage', subject: 'InventoryTransaction' },
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
    // LMS
    { action: 'manage', subject: 'Garment' },
    { action: 'manage', subject: 'GarmentLifecycleEvent' },
    { action: 'manage', subject: 'Outlet' },
    { action: 'manage', subject: 'ProductionStation' },
    { action: 'manage', subject: 'ProductionSchedule' },
    { action: 'manage', subject: 'ManufacturingOrder' },
    { action: 'manage', subject: 'Route' },
    { action: 'manage', subject: 'RouteStop' },
    { action: 'manage', subject: 'DriverDispatch' },
    { action: 'manage', subject: 'InventoryTransaction' },
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
    // LMS
    { action: 'manage', subject: 'Garment' },
    { action: 'create', subject: 'GarmentLifecycleEvent' },
    { action: 'read', subject: 'Outlet' },
    { action: 'read', subject: 'ProductionStation' },
    { action: 'read', subject: 'ProductionSchedule' },
    { action: 'read', subject: 'ManufacturingOrder' },
    { action: 'read', subject: 'Route' },
    { action: 'read', subject: 'RouteStop' },
    { action: 'read', subject: 'DriverDispatch' },
    { action: 'create', subject: 'InventoryTransaction' },
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
