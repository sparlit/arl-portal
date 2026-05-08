<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Loyalty
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
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / loyalty</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            L
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
  { name: 'loyalty-dashboard', path: '/loyalty', title: 'Dashboard' },
  { name: 'loyalty-membermanagement', path: '/loyalty/membermanagement', title: 'Member Management' },
  { name: 'loyalty-pointsconfiguration', path: '/loyalty/pointsconfiguration', title: 'Points Configuration' },
  { name: 'loyalty-tiermanagement', path: '/loyalty/tiermanagement', title: 'Tier Management' },
  { name: 'loyalty-rewardcatalog', path: '/loyalty/rewardcatalog', title: 'RewardCatalog' },
  { name: 'loyalty-referralprogram', path: '/loyalty/referralprogram', title: 'ReferralProgram' },
  { name: 'loyalty-pointsadjustment', path: '/loyalty/pointsadjustment', title: 'PointsAdjustment' },
  { name: 'loyalty-membercommunication', path: '/loyalty/membercommunication', title: 'MemberCommunication' },
  { name: 'loyalty-loyaltyanalytics', path: '/loyalty/loyaltyanalytics', title: 'LoyaltyAnalytics' },
  { name: 'loyalty-frauddetection', path: '/loyalty/frauddetection', title: 'FraudDetection' },
];
</script>
