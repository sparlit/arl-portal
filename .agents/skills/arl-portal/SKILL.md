```markdown
# arl-portal Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches you how to contribute to the `arl-portal` repository, a TypeScript/Next.js monorepo for modular portal and dashboard development. You'll learn the project's coding conventions, how to add new API endpoints, pages, and components, expand the database schema, reorganize modules, and maintain documentation, RBAC, and i18n support. The guide includes step-by-step workflows, code examples, and command suggestions for efficient collaboration.

## Coding Conventions

- **File Naming:**  
  Use PascalCase for component and page files.  
  _Example:_  
  ```
  src/components/modules/Inventory/InventoryWidget.tsx
  src/app/dashboard/Analytics/Page.tsx
  ```

- **Import Style:**  
  Use relative imports for local files.  
  _Example:_  
  ```typescript
  import InventoryWidget from './InventoryWidget';
  import { getUser } from '../../lib/user';
  ```

- **Export Style:**  
  Both default and named exports are used.  
  _Example:_  
  ```typescript
  // Default export
  export default function Dashboard() { ... }
  
  // Named export
  export function getUserRole() { ... }
  ```

- **Commit Messages:**  
  Use prefixes: `feat`, `fix`, `refactor`, `docs`.  
  _Example:_  
  ```
  feat: add approval endpoint for leave requests
  fix: correct date formatting in payroll module
  ```

## Workflows

### Add New API Endpoint
**Trigger:** When adding a new backend API endpoint for a resource or workflow  
**Command:** `/new-api-endpoint`

1. Create or update a file in `src/app/api/[module]/[resource]/route.ts`.
2. If needed, add sub-resource routes (e.g., `[id]/route.ts`, `[id]/approve/route.ts`).
3. Optionally update related modules or components to consume the new endpoint.

_Example:_
```typescript
// src/app/api/inventory/items/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Fetch items logic
  return NextResponse.json({ items: [] });
}
```

---

### Add New Dashboard or Portal Page
**Trigger:** When adding a new UI page for a dashboard, portal, or department  
**Command:** `/new-portal-page`

1. Create a new page file in `src/app/dashboard/[feature]/page.tsx` or `src/app/portal/[department]/page.tsx`.
2. Optionally, create a login page at `src/app/portal/[department]/login/page.tsx`.
3. Update navigation or routing if necessary.

_Example:_
```typescript
// src/app/portal/hr/page.tsx
export default function HRPortal() {
  return <div>Welcome to HR Portal</div>;
}
```

---

### Add New Module Component
**Trigger:** When adding a new UI component for a module or feature  
**Command:** `/new-module-component`

1. Create a new file in `src/components/modules/[module]/[ComponentName].tsx`.
2. Optionally update parent pages to use the new component.

_Example:_
```typescript
// src/components/modules/Payroll/PayrollSummary.tsx
export default function PayrollSummary() {
  return <section>Payroll Summary</section>;
}
```

---

### Expand Prisma Schema and Project Memory
**Trigger:** When adding models/tables or fields to the database and documenting system state  
**Command:** `/expand-schema`

1. Edit `prisma/schema.prisma` or `database/schema.postgresql.prisma` to add/modify models.
2. Update `project_memory.json` to reflect schema changes.
3. Optionally update or generate seed scripts.

_Example:_
```prisma
// prisma/schema.prisma
model Department {
  id   Int    @id @default(autoincrement())
  name String
}
```

---

### Modular Reorganization or Expansion
**Trigger:** When reorganizing code into new modules or adding department/portal structures  
**Command:** `/reorganize-modules`

1. Create new directories (e.g., `/core`, `/portal-it`, `/frontend/landing`).
2. Move or create README and config files in new module directories.
3. Update `project_memory.json` and documentation to reflect the new structure.

---

### RBAC or i18n Expansion
**Trigger:** When enforcing or expanding RBAC or i18n coverage  
**Command:** `/expand-rbac-i18n`

1. Edit or add `src/lib/rbac.ts`, `src/middleware.ts`, and/or `src/lib/i18n/*`.
2. Update API routes and components to use RBAC/i18n utilities.
3. Remove hardcoded strings or permissions, replacing with dynamic logic.

_Example:_
```typescript
// src/lib/rbac.ts
export function hasRole(user, role) {
  return user.roles.includes(role);
}
```

---

### Add or Update Documentation
**Trigger:** When documenting new features, architecture, or content strategy  
**Command:** `/update-docs`

1. Create or update files in `docs/` (e.g., `ARCHITECTURE.md`, `DEPLOYMENT.md`).
2. Optionally update `project_memory.json` to reflect documentation changes.

---

## Testing Patterns

- **Test Files:**  
  Test files follow the pattern `*.test.*` (e.g., `UserManager.test.tsx`).
- **Framework:**  
  The testing framework is not specified; check existing test files for conventions.
- **Placement:**  
  Tests are typically placed alongside the modules/components they test.

_Example:_
```typescript
// src/components/modules/Payroll/PayrollSummary.test.tsx
import { render } from '@testing-library/react';
import PayrollSummary from './PayrollSummary';

test('renders payroll summary', () => {
  render(<PayrollSummary />);
  // assertions here
});
```

## Commands

| Command               | Purpose                                                         |
|-----------------------|-----------------------------------------------------------------|
| /new-api-endpoint     | Scaffold a new backend API endpoint for a module or resource    |
| /new-portal-page      | Add a new dashboard or portal page                              |
| /new-module-component | Create a new UI component for a module or feature               |
| /expand-schema        | Expand the database schema and update project memory            |
| /reorganize-modules   | Restructure repository modules or add new department/portal     |
| /expand-rbac-i18n     | Add or refine RBAC or i18n support across modules              |
| /update-docs          | Add or update documentation files                               |
```
