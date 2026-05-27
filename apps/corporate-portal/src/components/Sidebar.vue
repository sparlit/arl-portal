<script setup lang="ts">
import { LayoutDashboard, Settings, FileText, BarChart3, Receipt, ShieldCheck, Users } from 'lucide-vue-next'

const menuItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Contracts', path: '/contracts', icon: FileText },
  { name: 'Usage Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Invoice Center', path: '/invoices', icon: Receipt },
  { name: 'SLA Monitor', path: '/sla', icon: ShieldCheck },
  { name: 'Contact Management', path: '/contacts', icon: Users },
  { name: 'Account Settings', path: '/settings', icon: Settings },
]
</script>

<template>
  <aside class="w-64 bg-luxury text-white flex flex-col">
    <div class="p-6 border-b border-slate-800">
      <h1 class="text-xl font-bold flex items-center gap-2">
        <span class="text-secondary italic">Al Rayes</span>
        <span>Corporate</span>
      </h1>
    </div>
    <nav class="flex-1 py-6">
      <ul>
        <li v-for="item in menuItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="flex items-center gap-3 px-6 py-3 hover:bg-primary transition-colors transition-opacity group"
            active-class="bg-primary text-secondary"
          >
            <component :is="item.icon" :size="20" class="group-hover:scale-110 transition-transform" />
            <span class="text-sm font-medium">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="p-6 border-t border-slate-800 text-xs text-slate-400">
      &copy; 2024 Al Rayes Laundry
    </div>
  </aside>
</template>
