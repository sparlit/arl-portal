<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        Customer Service
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
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / customer service</span>
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
  { name: 'customer-service-dashboard', path: '/customer-service', title: 'Dashboard' },
  { name: 'customer-service-ticketmanager', path: '/customer-service/ticketmanager', title: 'Ticket Manager' },
  { name: 'customer-service-ticketview', path: '/customer-service/ticketview', title: 'TicketView' },
  { name: 'customer-service-newticket', path: '/customer-service/newticket', title: 'NewTicket' },
  { name: 'customer-service-livechatmonitor', path: '/customer-service/livechatmonitor', title: 'LiveChatMonitor' },
  { name: 'customer-service-complaintmanager', path: '/customer-service/complaintmanager', title: 'Complaint Manager' },
  { name: 'customer-service-feedbackreview', path: '/customer-service/feedbackreview', title: 'FeedbackReview' },
  { name: 'customer-service-knowledgebasemanager', path: '/customer-service/knowledgebasemanager', title: 'KnowledgeBase Manager' },
  { name: 'customer-service-callbackrequestmanager', path: '/customer-service/callbackrequestmanager', title: 'CallbackRequest Manager' },
  { name: 'customer-service-csatanalytics', path: '/customer-service/csatanalytics', title: 'CSATAnalytics' },
];
</script>
