<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import allPlans from '../../constants/selectPlans';
import PlanCard from './PlanCard.vue';
import { usePlanStore } from '../../store';
import { storeToRefs } from 'pinia';

const title = 'Select your plan';
const desc = 'You have the option of monthly or yearly billing.';

const planStore = usePlanStore();
const { pricingType } = storeToRefs(planStore);

const pricingObj = {
  monthly: '',
  yearly: '',
};

type ObjectKey = keyof typeof pricingObj;
</script>

<template>
  <Header :title="title" :desc="desc" class="mb-10" />

  <div
    class="grid grid-cols-3 gap-4 w-full"
    :class="pricingType === 'monthly' ? 'h-[155px]' : 'h-[170px]'"
  >
    <PlanCard
      v-for="plan in allPlans"
      :title="plan.title"
      :pricing="plan.pricing[pricingType as ObjectKey]"
      :logo="plan.logo"
      :planType="pricingType"
      :key="plan.title"
    />
  </div>

  <div class="flex items-center justify-center gap-2 mt-12">
    <p>Monthly</p>
    <button @click="planStore.handleChangePlan" class="bg-orange-300">
      click
    </button>
    <p>yearly</p>
  </div>

  <Footer class="mt-20" />
</template>
