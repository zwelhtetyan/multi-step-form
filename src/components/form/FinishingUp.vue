<script setup lang="ts">
import Header from './header/index.vue';
import Footer from './footer/index.vue';
const title = 'Finishing up';
const desc = 'Double-check everything looks OK before confirming.';
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" />
    <Footer class="mt-20" />
  </div>
</template>
