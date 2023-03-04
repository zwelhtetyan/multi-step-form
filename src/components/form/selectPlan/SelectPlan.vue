<script setup lang="ts">
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import allPlans from '../../../constants/selectPlans';
import PlanCard from './PlanCard.vue';
import { usePlanStore } from '../../../store';
import { storeToRefs } from 'pinia';
import { PricingObjKey } from '../../../types';

const title = 'Select your plan';
const desc = 'You have the option of monthly or yearly billing.';

const planStore = usePlanStore();
const { pricingType, selectedPlan } = storeToRefs(planStore);
</script>

<template>
  <div class="flex-1">
    <div class="mobile-ui-card">
      <Header :title="title" :desc="desc" class="mb-5 md:mb-10" />

      <div
        class="grid xs:grid-cols-3 gap-3 xs:gap-4 w-full"
        :class="pricingType === 'monthly' ? 'xs:h-[155px]' : 'xs:h-[170px]'"
      >
        <PlanCard
          v-for="plan in allPlans"
          :title="plan.title"
          :handleSelectPlan="() => planStore.handleSelectPlan(plan.title, plan.pricing[pricingType as PricingObjKey] )"
          :selected="
            selectedPlan.title.toLowerCase() === plan.title.toLocaleLowerCase()
          "
          :pricing="plan.pricing[pricingType as PricingObjKey]"
          :logo="plan.logo"
          :planType="pricingType"
          :key="plan.title"
        />
      </div>

      <div
        class="flex items-center justify-center gap-4 mt-12 text-xs font-bold text-marine-blue"
      >
        <p :class="pricingType !== 'monthly' && 'text-cool-gray font-normal'">
          Monthly
        </p>

        <button
          @click="planStore.handleChangePlan"
          class="w-10 h-5 bg-marine-blue p-1 rounded-full flex items-center"
          :class="pricingType === 'monthly' ? 'justify-start' : 'justify-end'"
        >
          <div class="w-3 h-3 rounded-full bg-white"></div>
        </button>

        <p :class="pricingType !== 'yearly' && 'text-cool-gray font-normal'">
          Yearly
        </p>
      </div>
    </div>
  </div>

  <Footer class="mt-12 md:mt-20" />
</template>
