<script setup lang="ts">
import { TrendingUp, Clock, AlertTriangle, CheckCircle2 } from 'lucide-vue-next'

const stats = [
  { label: 'Orders this Month', value: '1,284', icon: TrendingUp, color: 'text-primary' },
  { label: 'SLA Compliance', value: '99.2%', icon: CheckCircle2, color: 'text-green-500' },
  { label: 'Pending Pickups', value: '12', icon: Clock, color: 'text-secondary' },
  { label: 'Open Disputes', value: '2', icon: AlertTriangle, color: 'text-red-500' },
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-luxury mb-8">Corporate Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div v-for="stat in stats" :key="stat.label" class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm font-medium text-slate-400 mb-1">{{ stat.label }}</p>
            <p class="text-2xl font-bold text-slate-900">{{ stat.value }}</p>
          </div>
          <div :class="stat.color">
            <component :is="stat.icon" :size="24" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-bold text-luxury">Recent Bulk Orders</h3>
          <button class="text-sm text-primary font-medium hover:underline">View All</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4">Order ID</th>
                <th class="px-6 py-4">Items</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4">Est. Delivery</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr v-for="i in 5" :key="i" class="border-b border-slate-50 hover:bg-slate-50/50">
                <td class="px-6 py-4 font-medium text-slate-900">ORD-2024-{{ 8432 + i }}</td>
                <td class="px-6 py-4 text-slate-600">450 Uniforms</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-600 uppercase">Processing</span>
                </td>
                <td class="px-6 py-4 text-slate-500 italic">Tomorrow, 10:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <h3 class="font-bold text-luxury mb-6">Contract Status</h3>
        <div class="space-y-6">
          <div>
            <div class="flex justify-between text-sm mb-2">
              <span class="text-slate-500">Service Credits Used</span>
              <span class="font-bold">75%</span>
            </div>
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div class="w-[75%] h-full bg-primary"></div>
            </div>
          </div>
          <div class="p-4 bg-blue-50 rounded-md border border-blue-100">
            <p class="text-xs text-blue-800 leading-relaxed font-medium">
              Your "Gold Tier" contract is active until Dec 2024. Next review scheduled for Oct 15th.
            </p>
          </div>
          <button class="w-full py-3 bg-secondary text-luxury font-bold rounded shadow-sm hover:opacity-90 transition-opacity uppercase text-xs tracking-widest">
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
