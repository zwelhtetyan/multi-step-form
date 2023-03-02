<script setup lang="ts">
import Container from './components/Container.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <div
      class="bg-white border border-black h-[550px] w-full max-w-4xl rounded-xl p-3 flex gap-3"
    >
      <Sidebar />
      <Container />
    </div>
  </div>
</template>
