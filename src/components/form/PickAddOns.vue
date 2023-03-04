<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import AddOnsCard from './AddOnsCard.vue';
import AllAddOns from '../../constants/AddOns';
import { useAddOnsStore, usePlanStore } from '../../store';
import { storeToRefs } from 'pinia';
import { PricingObj } from '../../types';

const title = 'Pick Add-ons';
const desc = 'Add-ons help enhance your gaming experience..';

const addOnsStore = useAddOnsStore();
const planStore = usePlanStore();
const { pricingType } = storeToRefs(planStore);

const getPrice = (pricingType: string, pricingObj: PricingObj) => {
  return pricingType === 'monthly' ? pricingObj.monthly : pricingObj.yearly;
};
</script>

<template>
  <div class="flex-1">
    <div class="mobile-ui-card">
      <Header :title="title" :desc="desc" class="mb-5 md:mb-10" />

      <div class="flex flex-col gap-3 xs:gap-4">
        <AddOnsCard
          v-for="{ title, desc, pricing } in AllAddOns"
          :key="title"
          :title="title"
          :desc="desc"
          :price="getPrice(pricingType, pricing)"
          :isSelected="() => addOnsStore.isSelected(title)"
          :selectAddOns="
            () =>
              addOnsStore.selectAddOns(title, getPrice(pricingType, pricing))
          "
        />
      </div>
    </div>
  </div>

  <Footer class="mt-4 md:mt-12" />
</template>
