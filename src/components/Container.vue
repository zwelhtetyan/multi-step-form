<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<template>
  <div class="flex-1 flex justify-center">
    <div class="bg-yellow-500">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>
