<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Claims
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
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / claims</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            C
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
  { name: 'claims-dashboard', path: '/claims', title: 'Dashboard' },
  { name: 'claims-claimmanager', path: '/claims/claimmanager', title: 'Claim Manager' },
  { name: 'claims-newclaim', path: '/claims/newclaim', title: 'NewClaim' },
  { name: 'claims-investigation', path: '/claims/investigation', title: 'Investigation' },
  { name: 'claims-compensationcalculator', path: '/claims/compensationcalculator', title: 'CompensationCalculator' },
  { name: 'claims-approvalworkflow', path: '/claims/approvalworkflow', title: 'ApprovalWorkflow' },
  { name: 'claims-customercommunication', path: '/claims/customercommunication', title: 'CustomerCommunication' },
  { name: 'claims-insurancecoordination', path: '/claims/insurancecoordination', title: 'InsuranceCoordination' },
  { name: 'claims-claimanalytics', path: '/claims/claimanalytics', title: 'ClaimAnalytics' },
  { name: 'claims-policyconfiguration', path: '/claims/policyconfiguration', title: 'Policy Configuration' },
];
</script>
