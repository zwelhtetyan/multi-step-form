import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const menus = ref(['your info', 'select plan', 'add-ons', 'summary']);
  const currentMenuIdx = ref(1);

  const setMenu = (menuIdx: number) => {
    currentMenuIdx.value = menuIdx;
  };

  return { menus, currentMenuIdx, setMenu };
});

export const useStepOneStore = defineStore('step-1', () => {
  const name = ref('');
  const email = ref('');
  const phoneNumber = ref('');

  return { name, email, phoneNumber };
});

export const usePlanStore = defineStore('step-2', () => {
  const pricingType = ref('monthly');

  const handleChangePlan = () => {
    pricingType.value = pricingType.value === 'monthly' ? 'yearly' : 'monthly';
  };

  return { pricingType, handleChangePlan };
});
