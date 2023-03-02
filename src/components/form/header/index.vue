<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<template>
  <h1 class="font-bold text-3xl mb-1">{{ title }}</h1>
  <p class="text-cool-gray">{{ desc }}</p>
</template>
