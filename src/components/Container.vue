<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../store';
import { PersonalInfo, SelectPlan, PickAddOns, FinishingUp } from './form';

const menuStore = useMenuStore();
const { currentMenu } = storeToRefs(menuStore);
</script>

<template>
  <div class="flex-1 flex justify-center">
    <PersonalInfo v-if="currentMenu === 1" />
    <SelectPlan v-else-if="currentMenu === 2" />
    <PickAddOns v-else-if="currentMenu === 3" />
    <FinishingUp v-else-if="currentMenu === 4" />
  </div>
</template>
