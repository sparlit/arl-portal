<template>
  <div class="p-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-primary font-heading">PayrollInput</h1>
        <p class="text-text-main/70 mt-2">Manage hr payrollinput and operations.</p>
      </div>
      <div class="flex space-x-3">
        <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Export</button>
        <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">Refresh</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="i in 3" :key="i" class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div class="text-sm font-medium text-text-main/50 mb-1">Metric Sample {{ i }}]</div>
        <div class="text-2xl font-bold text-primary">0.00</div>
        <div class="text-xs text-success mt-1">↑ 0% from last month</div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 class="font-bold text-lg text-primary">Recent Activity</h2>
        <div class="text-sm text-accent cursor-pointer hover:underline">View All</div>
      </div>
      <div class="p-12 text-center text-text-main/40 italic">
        No data available for PayrollInput yet.
      </div>
    </div>
  </div>
</template>
