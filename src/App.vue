<script setup lang="ts">
import Container from './components/Container.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="min-h-screen md:flex justify-center items-center">
    <div
      class="flex flex-col md:flex-row md:p-3 md:gap-3 bg-white min-h-screen md:min-h-0 md:h-[550px] w-full max-w-4xl md:rounded-xl"
    >
      <Sidebar />
      <Container />
    </div>
  </div>
</template>
