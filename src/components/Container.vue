<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../store';
import { PersonalInfo, SelectPlan, PickAddOns, FinishingUp } from './form';

const menuStore = useMenuStore();
const { currentMenuIdx } = storeToRefs(menuStore);
</script>

<template>
  <div class="flex-1 flex justify-center items-center max-w-[420px] mx-auto">
    <div class="w-full">
      <PersonalInfo v-if="currentMenuIdx === 1" />
      <SelectPlan v-else-if="currentMenuIdx === 2" />
      <PickAddOns v-else-if="currentMenuIdx === 3" />
      <FinishingUp v-else-if="currentMenuIdx === 4" />
    </div>
  </div>
</template>
