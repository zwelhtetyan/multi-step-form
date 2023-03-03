<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import AddOnsCard from './AddOnsCard.vue';
import AllAddOns from '../../constants/AddOns';
import { useAddOnsStore } from '../../store';

const title = 'Pick Add-ons';
const desc = 'Add-ons help enhance your gaming experience..';

const addOnsStore = useAddOnsStore();
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" class="mb-10" />

    <AddOnsCard
      v-for="{ title, desc, price } in AllAddOns"
      :key="title"
      :title="title"
      :desc="desc"
      :price="price"
      :isSelected="() => addOnsStore.isSelected(title)"
      :selectAddOns="() => addOnsStore.selectAddOns(title, price)"
    />

    <Footer class="mt-12" />
  </div>
</template>
