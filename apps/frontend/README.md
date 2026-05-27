# Al Rayes Internal Operations Hub - Frontend

This is the Vue 3 + TypeScript frontend for the Al Rayes Digital Ecosystem.

## Features
- **Multi-Portal Architecture**: Supports 23+ distinct department portals.
- **Dynamic Theming**: Each department has its own visual identity (colors, fonts) managed via Pinia.
- **RBAC Integration**: Role-Based Access Control using the `<Can>` component and `auth` store.
- **Modular Routing**: Routes are auto-discovered from department sub-folders.
- **RTL Support**: Full support for Arabic content with an RTL toggle.
- **PWA Ready**: Offline-first capability using `vite-plugin-pwa`.

## Tech Stack
- Vue 3 (Composition API)
- TypeScript
- Vite
- Tailwind CSS
- Pinia (State Management)
- Vue Router

## Directory Structure
- `src/portals/departments/`: Contains all department portals.
  - `[department]/Layout.vue`: The sidebar and header for the department.
  - `[department]/routes.ts`: Route definitions for the department.
  - `[department]/views/`: Page components.
- `src/store/`: Pinia stores for `auth` and `theme`.
- `src/components/common/`: Shared components like `Can.vue`.

## Getting Started
```bash
npm install
npm run dev
```

## Building for Production
```bash
npm run build
```
