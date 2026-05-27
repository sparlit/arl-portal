<script setup lang="ts">
import { Bell, User } from 'lucide-vue-next'
</script>

<template>
  <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
    <div class="flex items-center gap-4">
      <h2 class="text-slate-500 font-medium italic">B2B Enterprise Portal</h2>
    </div>
    <div class="flex items-center gap-6">
      <button class="relative p-2 text-slate-400 hover:text-primary">
        <Bell :size="20" />
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <div class="flex items-center gap-3 pl-6 border-l border-slate-200">
        <div class="text-right">
          <p class="text-sm font-bold text-slate-900 leading-tight">Qatar Airways</p>
          <p class="text-xs text-slate-400 leading-tight">Account Admin</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <User :size="20" />
        </div>
      </div>
    </div>
  </header>
</template>
