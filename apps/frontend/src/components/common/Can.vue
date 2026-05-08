<script setup lang="ts">
import { useAuthStore } from '@/store/auth';

const props = defineProps<{
  permission: string;
}>();

const authStore = useAuthStore();
</script>

<template>
  <slot v-if="authStore.hasPermission(props.permission)" />
  <slot v-else name="fallback" />
</template>
