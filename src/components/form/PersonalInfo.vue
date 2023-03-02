<script setup lang="ts">
import Header from './header/index.vue';
import Footer from './footer/index.vue';
const title = 'Personal Info';
const desc = 'Please provide you name, email address and phone number.';
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" class="mb-10" />

    <div class="mb-5">
      <label for="name" class="block mb-1">Name</label>
      <input
        type="text"
        placeholder="e.g.Stephen King"
        class="rounded-md h-10 w-full px-4 transition-all border border-light-gray outline-none focus-visible:border-purplish-blue"
      />
    </div>

    <div class="mb-5">
      <label for="name" class="block mb-1">Email Address</label>
      <input
        type="text"
        placeholder="e.g.stephenking@lorem.com"
        class="rounded-md h-10 w-full px-4 transition-all border border-light-gray outline-none focus-visible:border-purplish-blue"
      />
    </div>

    <div class="mb-5">
      <label for="name" class="block mb-1">Phone Number</label>
      <input
        type="number"
        placeholder="e.g.+1 234 567 890"
        class="rounded-md h-10 w-full px-4 transition-all border border-light-gray outline-none focus-visible:border-purplish-blue"
      />
    </div>

    <Footer class="mt-20" first />
  </div>
</template>
