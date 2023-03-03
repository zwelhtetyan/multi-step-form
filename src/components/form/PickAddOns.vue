<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import AddOnsCard from './AddOnsCard.vue';
import AllAddOns from '../../constants/AddOns';
import { useAddOnsStore, usePlanStore } from '../../store';
import { storeToRefs } from 'pinia';

const title = 'Pick Add-ons';
const desc = 'Add-ons help enhance your gaming experience..';

const addOnsStore = useAddOnsStore();
const planStore = usePlanStore();
const { pricingType } = storeToRefs(planStore);

interface PricingObj {
  monthly: number;
  yearly: number;
}

const getPrice = (pricingType: string, pricingObj: PricingObj) => {
  return pricingType === 'monthly' ? pricingObj.monthly : pricingObj.yearly;
};
</script>

<template>
  <div>
    <Header :title="title" :desc="desc" class="mb-10" />

    <AddOnsCard
      v-for="{ title, desc, pricing } in AllAddOns"
      :key="title"
      :title="title"
      :desc="desc"
      :price="getPrice(pricingType, pricing)"
      :isSelected="() => addOnsStore.isSelected(title)"
      :selectAddOns="
        () => addOnsStore.selectAddOns(title, getPrice(pricingType, pricing))
      "
    />

    <Footer class="mt-12" />
  </div>
</template>
