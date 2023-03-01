<script setup lang="ts">
defineProps<{
  idx: number;
  name: string;
}>();
</script>

<template>
  <div class="flex items-center mb-6 cursor-pointer">
    <div
      class="w-10 h-10 flex items-center justify-center text-white border border-white rounded-full"
    >
      {{ idx }}
    </div>
    <div class="flex-1 pl-4 uppercase">
      <p class="text-pastel-blue font-thin text-sm leading-5">Step {{ idx }}</p>
      <h1 class="text-white font-bold tracking-wide">{{ name }}</h1>
    </div>
  </div>
</template>
