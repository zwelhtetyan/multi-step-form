<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
  class?: string;
}>();
</script>

<template>
  <header :class="class">
    <h1 class="font-bold text-3xl mb-1">{{ title }}</h1>
    <p class="text-cool-gray">{{ desc }}</p>
  </header>
</template>
