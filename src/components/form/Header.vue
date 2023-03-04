<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
  class?: string;
}>();
</script>

<template>
  <header :class="class">
    <h1 class="font-bold text-2xl xs:text-3xl mb-1 text-marine-blue">
      {{ title }}
    </h1>
    <p class="text-cool-gray">{{ desc }}</p>
  </header>
</template>
