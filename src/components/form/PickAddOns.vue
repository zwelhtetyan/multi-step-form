<script setup lang="ts">
import Header from './header/index.vue';
import Footer from './footer/index.vue';
const title = 'Pick Add-ons';
const desc = 'Add-ons help enhance your gaming experience..';
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" />
    <Footer class="mt-20" />
  </div>
</template>
