<script setup lang="ts">
defineProps<{
  title: string;
  pricing: number;
  planType: string;
  logo: string;
  selected: boolean;
  handleSelectPlan: () => void;
}>();
</script>

<template>
  <div
    @click="handleSelectPlan"
    class="plan-card p-4 flex flex-row xs:flex-col xs:justify-center items-start select-none"
    :class="selected && 'border-purplish-blue bg-magnolia'"
  >
    <img :src="logo" alt="logo" />

    <div class="mt-auto flex-1 xs:flex-[unset] ml-4 xs:ml-0">
      <h1 class="font-bold text-marine-blue">{{ title }}</h1>
      <p class="text-sm text-cool-gray">
        ${{ pricing }}/{{ planType === 'monthly' ? 'mo' : 'yr' }}
      </p>
      <p
        v-if="planType === 'yearly'"
        class="text-sm xs:mt-1 font-thin text-marine-blue"
      >
        2 months free
      </p>
    </div>
  </div>
</template>
