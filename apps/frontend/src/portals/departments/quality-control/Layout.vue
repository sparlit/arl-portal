<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Quality Control
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
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / quality control</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            Q
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
  { name: 'quality-control-dashboard', path: '/quality-control', title: 'Dashboard' },
  { name: 'quality-control-inspectionqueue', path: '/quality-control/inspectionqueue', title: 'InspectionQueue' },
  { name: 'quality-control-inspectionchecklist', path: '/quality-control/inspectionchecklist', title: 'InspectionChecklist' },
  { name: 'quality-control-defectcatalog', path: '/quality-control/defectcatalog', title: 'DefectCatalog' },
  { name: 'quality-control-reworkmanagement', path: '/quality-control/reworkmanagement', title: 'Rework Management' },
  { name: 'quality-control-qualitystandards', path: '/quality-control/qualitystandards', title: 'QualityStandards' },
  { name: 'quality-control-customerqualitycomplaints', path: '/quality-control/customerqualitycomplaints', title: 'CustomerQualityComplaints' },
  { name: 'quality-control-qcstaffperformance', path: '/quality-control/qcstaffperformance', title: 'QCStaffPerformance' },
  { name: 'quality-control-qualityreports', path: '/quality-control/qualityreports', title: 'QualityReports' },
  { name: 'quality-control-supplierquality', path: '/quality-control/supplierquality', title: 'SupplierQuality' },
];
</script>
