<script setup lang="ts">
defineProps<{
  title: string;
  pricing: string;
  planType: string;
  logo: string;
}>();
</script>

<template>
  <div class="plan-card p-4 flex flex-col justify-center items-start">
    <img :src="logo" alt="logo" />
    <div class="mt-auto">
      <h1 class="font-bold">{{ title }}</h1>
      <p class="text-sm text-cool-gray">{{ pricing }}</p>
      <p v-if="planType === 'yearly'" class="text-sm mt-1">2 months free</p>
    </div>
  </div>
</template>
