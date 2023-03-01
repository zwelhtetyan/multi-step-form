<script setup lang="ts">
import Header from './header/index.vue';
const title = 'Personal Info';
const desc = 'Please provide you name, email address and phone number';
</script>

<template>
  <div><Header :title="title" :desc="desc" /></div>
</template>
