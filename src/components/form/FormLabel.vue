<script setup lang="ts">
defineProps<{
  label: string;
  htmlFor: string;
  errorMessage: string;
}>();
</script>

<template>
  <div class="flex justify-between items-center">
    <label :for="htmlFor" class="block text-sm mb-1">{{ label }}</label>
    <p v-if="errorMessage" class="text-xs text-strawberry-red font-semibold">
      {{ errorMessage }}
    </p>
  </div>
</template>
