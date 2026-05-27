<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main class="flex-1 overflow-y-auto p-8 bg-slate-50">
        <router-view />
      </main>
    </div>
  </div>
</template>
