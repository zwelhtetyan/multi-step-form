<script setup lang="ts">
import Header from './Header.vue';
import Footer from '../Footer.vue';
const title = 'Pick Add-ons';
const desc = 'Add-ons help enhance your gaming experience..';
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" />
    <Footer class="mt-20" />
  </div>
</template>
