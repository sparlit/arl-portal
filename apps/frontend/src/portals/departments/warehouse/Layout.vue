<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Warehouse
      </div>
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <router-link 
          v-for="page in navPages" 
          :key="page.name"
          :to="page.path" 
          class="block p-2 rounded hover:bg-white/10 transition-colors text-sm"
          active-class="bg-white/20 border-l-4 border-accent pl-1"
        >
          {{ page.title }}
        </router-link>
      </nav>
      <div class="p-4 border-t border-white/10 text-xs opacity-50">
        AL RAYES DIGITAL v0.1.0
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto flex flex-col">
      <header class="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
        <div class="flex items-center space-x-4">
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / warehouse</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            W
          </div>
        </div>
      </header>
      
      <div class="flex-1">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const navPages = [
  { name: 'warehouse-dashboard', path: '/warehouse', title: 'Dashboard' },
  { name: 'warehouse-stockoverview', path: '/warehouse/stockoverview', title: 'StockOverview' },
  { name: 'warehouse-inboundmanagement', path: '/warehouse/inboundmanagement', title: 'Inbound Management' },
  { name: 'warehouse-outboundmanagement', path: '/warehouse/outboundmanagement', title: 'Outbound Management' },
  { name: 'warehouse-stockadjustment', path: '/warehouse/stockadjustment', title: 'StockAdjustment' },
  { name: 'warehouse-reordermanagement', path: '/warehouse/reordermanagement', title: 'Reorder Management' },
  { name: 'warehouse-binlocationmanagement', path: '/warehouse/binlocationmanagement', title: 'BinLocation Management' },
  { name: 'warehouse-cyclecount', path: '/warehouse/cyclecount', title: 'CycleCount' },
  { name: 'warehouse-suppliermanagement', path: '/warehouse/suppliermanagement', title: 'Supplier Management' },
  { name: 'warehouse-inventoryreports', path: '/warehouse/inventoryreports', title: 'InventoryReports' },
];
</script>
