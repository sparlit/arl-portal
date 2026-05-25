/**
 * Al Rayes Laundry Management System - Garment Lifecycle State Machine
 * 
 * Enforces strict 13-stage garment tracking pipeline with valid transitions.
 * Uses SKIP LOCKED pattern for offline sync conflict resolution.
 */

// The 13-stage garment lifecycle (plus cancelled as terminal state)
export const GARMENT_STAGES = {
  RECEIVED: 'received',
  BRANCH_PICKUP: 'branch_pickup',
  FACTORY_RECEIPT: 'factory_receipt',
  DAMAGE_CHECK: 'damage_check',
  STAIN_TREATMENT: 'stain_treatment',
  WASHING: 'washing',
  DRYING: 'drying',
  PRESSING: 'pressing',
  QUALITY_CONTROL: 'quality_control',
  SORTING: 'sorting',
  FOLDING_PACKAGING: 'folding_packaging',
  READY_TO_DELIVER: 'ready_to_deliver',
  BRANCH_RECEIPT: 'branch_receipt',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

export type GarmentStage = typeof GARMENT_STAGES[keyof typeof GARMENT_STAGES];

// Valid state transitions: only forward progression is allowed
const VALID_TRANSITIONS: Record<string, string[]> = {
  [GARMENT_STAGES.RECEIVED]: [GARMENT_STAGES.BRANCH_PICKUP, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.BRANCH_PICKUP]: [GARMENT_STAGES.FACTORY_RECEIPT, GARMENT_STAGES.BRANCH_PICKUP, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.FACTORY_RECEIPT]: [GARMENT_STAGES.DAMAGE_CHECK, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.DAMAGE_CHECK]: [GARMENT_STAGES.STAIN_TREATMENT, GARMENT_STAGES.WASHING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.STAIN_TREATMENT]: [GARMENT_STAGES.WASHING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.WASHING]: [GARMENT_STAGES.DRYING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.DRYING]: [GARMENT_STAGES.PRESSING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.PRESSING]: [GARMENT_STAGES.QUALITY_CONTROL, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.QUALITY_CONTROL]: [GARMENT_STAGES.SORTING, GARMENT_STAGES.WASHING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.SORTING]: [GARMENT_STAGES.FOLDING_PACKAGING, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.FOLDING_PACKAGING]: [GARMENT_STAGES.READY_TO_DELIVER, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.READY_TO_DELIVER]: [GARMENT_STAGES.BRANCH_RECEIPT, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.BRANCH_RECEIPT]: [GARMENT_STAGES.DELIVERED, GARMENT_STAGES.CANCELLED],
  [GARMENT_STAGES.DELIVERED]: [], // Terminal state - no further transitions
  [GARMENT_STAGES.CANCELLED]: [], // Terminal state - no further transitions
};

// Human-readable labels for each stage
export const STAGE_LABELS: Record<string, string> = {
  [GARMENT_STAGES.RECEIVED]: 'Received from Customer',
  [GARMENT_STAGES.BRANCH_PICKUP]: 'Branch Pickup',
  [GARMENT_STAGES.FACTORY_RECEIPT]: 'Factory Receipt',
  [GARMENT_STAGES.DAMAGE_CHECK]: 'Damage Checkpoint',
  [GARMENT_STAGES.STAIN_TREATMENT]: 'Stain Treatment',
  [GARMENT_STAGES.WASHING]: 'Washing',
  [GARMENT_STAGES.DRYING]: 'Drying',
  [GARMENT_STAGES.PRESSING]: 'Pressing',
  [GARMENT_STAGES.QUALITY_CONTROL]: 'Quality Control',
  [GARMENT_STAGES.SORTING]: 'Sorting',
  [GARMENT_STAGES.FOLDING_PACKAGING]: 'Folding & Packaging',
  [GARMENT_STAGES.READY_TO_DELIVER]: 'Ready to Deliver',
  [GARMENT_STAGES.BRANCH_RECEIPT]: 'Branch Receipt',
  [GARMENT_STAGES.DELIVERED]: 'Delivered to Customer',
  [GARMENT_STAGES.CANCELLED]: 'Cancelled',
};

// Stage color coding for UI (traffic light system)
export const STAGE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  [GARMENT_STAGES.RECEIVED]: { bg: '#E2E8F0', text: '#475569', dot: '#94A3B8' },
  [GARMENT_STAGES.BRANCH_PICKUP]: { bg: '#DBEAFE', text: '#1E40AF', dot: '#3B82F6' },
  [GARMENT_STAGES.FACTORY_RECEIPT]: { bg: '#DBEAFE', text: '#1E40AF', dot: '#3B82F6' },
  [GARMENT_STAGES.DAMAGE_CHECK]: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B' },
  [GARMENT_STAGES.STAIN_TREATMENT]: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B' },
  [GARMENT_STAGES.WASHING]: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  [GARMENT_STAGES.DRYING]: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  [GARMENT_STAGES.PRESSING]: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  [GARMENT_STAGES.QUALITY_CONTROL]: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B' },
  [GARMENT_STAGES.SORTING]: { bg: '#DBEAFE', text: '#1E40AF', dot: '#3B82F6' },
  [GARMENT_STAGES.FOLDING_PACKAGING]: { bg: '#DBEAFE', text: '#1E40AF', dot: '#3B82F6' },
  [GARMENT_STAGES.READY_TO_DELIVER]: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  [GARMENT_STAGES.BRANCH_RECEIPT]: { bg: '#DBEAFE', text: '#1E40AF', dot: '#3B82F6' },
  [GARMENT_STAGES.DELIVERED]: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  [GARMENT_STAGES.CANCELLED]: { bg: '#FEE2E2', text: '#991B1B', dot: '#EF4444' },
};

/**
 * Validates whether a garment status transition is allowed.
 * Returns an object with { valid: true } or { valid: false, reason: string }
 */
export function validateTransition(fromStatus: string, toStatus: string): { valid: boolean; reason?: string } {
  // If from and to are the same, allow it (re-scan/update at same stage)
  if (fromStatus === toStatus) {
    return { valid: true };
  }

  const allowedTransitions = VALID_TRANSITIONS[fromStatus];
  
  if (!allowedTransitions) {
    return { valid: false, reason: `Unknown current status: "${fromStatus}"` };
  }

  if (allowedTransitions.includes(toStatus)) {
    return { valid: true };
  }

  return {
    valid: false,
    reason: `Invalid transition from "${STAGE_LABELS[fromStatus] || fromStatus}" to "${STAGE_LABELS[toStatus] || toStatus}". Allowed: ${allowedTransitions.map(s => STAGE_LABELS[s] || s).join(', ')}`
  };
}

/**
 * Returns the list of valid next stages for a given current stage.
 */
export function getValidNextStages(currentStatus: string): string[] {
  return VALID_TRANSITIONS[currentStatus] || [];
}

/**
 * Returns the stage progress (0-100) for a given status
 */
export function getStageProgress(currentStatus: string): number {
  const stages = [
    GARMENT_STAGES.RECEIVED,
    GARMENT_STAGES.BRANCH_PICKUP,
    GARMENT_STAGES.FACTORY_RECEIPT,
    GARMENT_STAGES.DAMAGE_CHECK,
    GARMENT_STAGES.STAIN_TREATMENT,
    GARMENT_STAGES.WASHING,
    GARMENT_STAGES.DRYING,
    GARMENT_STAGES.PRESSING,
    GARMENT_STAGES.QUALITY_CONTROL,
    GARMENT_STAGES.SORTING,
    GARMENT_STAGES.FOLDING_PACKAGING,
    GARMENT_STAGES.READY_TO_DELIVER,
    GARMENT_STAGES.BRANCH_RECEIPT,
    GARMENT_STAGES.DELIVERED,
  ];
  
  const index = stages.indexOf(currentStatus as any);
  if (index === -1) return 0;
  return Math.round((index / (stages.length - 1)) * 100);
}

/**
 * Generates a unique QR code string for a garment
 */
export function generateGarmentQRCode(orderNumber: string, garmentIndex: number): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ALR-${orderNumber}-${garmentIndex}-${timestamp}${random}`;
}

/**
 * Generates a unique order number for manufacturing orders
 */
export function generateManufacturingOrderNumber(): string {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const seq = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `MFG-${y}${m}${d}-${seq}`;
}