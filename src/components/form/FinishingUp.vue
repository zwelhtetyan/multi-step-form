<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import AddOnsItem from './AddOnsItem.vue';
import { useAddOnsStore, usePlanStore } from '../../store';
import { storeToRefs } from 'pinia';
import { computed, watchEffect } from 'vue';
import allAddOns from '../../constants/AddOns';
import { PricingObjKey } from '../../types';

const title = 'Finishing up';
const desc = 'Double-check everything looks OK before confirming.';

const planStore = usePlanStore();
const addOnsStore = useAddOnsStore();

const { pricingType, selectedPlan } = storeToRefs(planStore);
const { allSelectedAddOns } = storeToRefs(addOnsStore);

const getCurrentPrice = (title: string) => {
  return allAddOns.find((item) => item.title.toLowerCase() === title)!.pricing[
    pricingType.value as PricingObjKey
  ];
};

watchEffect(() => {
  allSelectedAddOns.value = allSelectedAddOns.value.map((item) => ({
    ...item,
    price: getCurrentPrice(item.title),
  }));
});

const TOTAL = computed(() => {
  const totalItemPrice = allSelectedAddOns.value.reduce(
    (a, b) => a + b.price,
    0
  );

  return selectedPlan.value.price + totalItemPrice;
});
</script>

<template>
  <Header :title="title" :desc="desc" class="mb-10" />

  <div class="bg-magnolia rounded-lg p-5">
    <div
      class="flex items-center justify-between font-semibold text-lg text-marine-blue"
    >
      <div>
        <h1 class="capitalize">{{ selectedPlan.title }} ({{ pricingType }})</h1>
        <p
          @click="planStore.handleChangePlan"
          class="text-sm text-cool-gray underline cursor-pointer hover:text-purplish-blue transition-all select-none"
        >
          Change
        </p>
      </div>
      <h1>
        ${{ selectedPlan.price }}/{{ pricingType === 'monthly' ? 'mo' : 'yr' }}
      </h1>
    </div>

    <div
      v-if="allSelectedAddOns.length > 0"
      class="mt-6 pt-2 text-cool-gray text-sm border-t border-t-light-gray"
    >
      <AddOnsItem
        v-for="{ title, price } in allSelectedAddOns"
        :title="title"
        :price="price"
        :pricingType="pricingType"
      />
    </div>
  </div>

  <div class="flex items-center justify-between px-5 pt-4 font-bold">
    <p class="text-cool-gray text-sm">
      Total ({{ pricingType === 'monthly' ? 'per month' : 'per year' }})
    </p>
    <h1 class="text-lg text-purplish-blue">
      +${{ TOTAL }}/{{ pricingType === 'monthly' ? 'mo' : 'yr' }}
    </h1>
  </div>

  <Footer class="mt-14" />
</template>
