<script setup lang="ts">
import Header from './Header.vue';
import Footer from '../Footer.vue';

const title = 'Select your plan';
const desc = 'You have the option of monthly or yearly billing.';
</script>

<template>
  <Header :title="title" :desc="desc" class="mb-10" />

  <div class="grid grid-cols-3 h-[150px] gap-4 w-full">
    <div class="plan-card"></div>
    <div class="plan-card"></div>
    <div class="plan-card"></div>
  </div>

  <Footer class="mt-20" />
</template>
