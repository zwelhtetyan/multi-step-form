<script setup lang="ts">
defineProps<{
  title: string;
  price: number;
  pricingType: string;
}>();
</script>

<template>
  <div class="flex items-center justify-between mt-3">
    <p class="capitalize">{{ title }}</p>
    <p class="text-marine-blue/70 font-semibold">
      +${{ price }}/{{ pricingType === 'monthly' ? 'mo' : 'yr' }}
    </p>
  </div>
</template>
