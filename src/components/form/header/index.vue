<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ desc }}</p>
</template>
