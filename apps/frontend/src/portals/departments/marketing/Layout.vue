<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Marketing
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
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / marketing</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            M
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
  { name: 'marketing-dashboard', path: '/marketing', title: 'Dashboard' },
  { name: 'marketing-campaignmanager', path: '/marketing/campaignmanager', title: 'Campaign Manager' },
  { name: 'marketing-promocodemanager', path: '/marketing/promocodemanager', title: 'PromoCode Manager' },
  { name: 'marketing-contentcalendar', path: '/marketing/contentcalendar', title: 'ContentCalendar' },
  { name: 'marketing-emailcampaignbuilder', path: '/marketing/emailcampaignbuilder', title: 'EmailCampaignBuilder' },
  { name: 'marketing-smscampaignbuilder', path: '/marketing/smscampaignbuilder', title: 'SMSCampaignBuilder' },
  { name: 'marketing-socialmediatracker', path: '/marketing/socialmediatracker', title: 'SocialMediaTracker' },
  { name: 'marketing-seomanager', path: '/marketing/seomanager', title: 'SEO Manager' },
  { name: 'marketing-referralprogrammanager', path: '/marketing/referralprogrammanager', title: 'ReferralProgram Manager' },
  { name: 'marketing-brandassetmanager', path: '/marketing/brandassetmanager', title: 'BrandAsset Manager' },
];
</script>
