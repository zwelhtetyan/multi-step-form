<script setup lang="ts">
import Container from './components/Container.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <div
      class="bg-white border border-black h-[550px] w-full max-w-4xl rounded-xl p-4 flex gap-4"
    >
      <Sidebar />
      <Container
        title="Personal Info"
        desc="Please provide your name, email address and phone number."
      />
    </div>
  </div>
</template>
