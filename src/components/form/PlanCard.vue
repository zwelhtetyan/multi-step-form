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
    class="plan-card p-4 flex flex-col justify-center items-start select-none"
    :class="selected && 'border-purplish-blue'"
  >
    <img :src="logo" alt="logo" />
    <div class="mt-auto">
      <h1 class="font-bold">{{ title }}</h1>
      <p class="text-sm text-cool-gray">
        ${{ pricing }}/{{ planType === 'monthly' ? 'mo' : 'yr' }}
      </p>
      <p v-if="planType === 'yearly'" class="text-sm mt-1 font-thin">
        2 months free
      </p>
    </div>
  </div>
</template>
