<script setup lang="ts">
import Header from './header/index.vue';
import Footer from './footer/index.vue';
const title = 'Select your plan';
const desc = 'You have the option of monthly or yearly billing.';
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" />
    <Footer class="mt-20" />
  </div>
</template>
