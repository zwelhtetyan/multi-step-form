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
  const selectedPlan = ref({
    title: 'arcade',
    price: 9,
  });

  const handleChangePlan = () => {
    pricingType.value = pricingType.value === 'monthly' ? 'yearly' : 'monthly';
  };

  const handleSelectPlan = (title: string, price: number) => {
    selectedPlan.value = { title, price };
  };

  return { pricingType, selectedPlan, handleChangePlan, handleSelectPlan };
});

export const useAddOnsStore = defineStore('step-3', () => {
  const allSelectedAddOns = ref<string[]>([]);

  const selectAddOns = (newTitle: string) => {
    const title = newTitle.toLowerCase();
    const alreadySelectedIdx = allSelectedAddOns.value.indexOf(title);

    if (alreadySelectedIdx < 0) {
      allSelectedAddOns.value.push(title);
    } else {
      allSelectedAddOns.value.splice(alreadySelectedIdx, 1);
    }
  };

  const isSelected = (title: string) => {
    return allSelectedAddOns.value.some(
      (t) => t.toLowerCase() === title.toLowerCase()
    );
  };

  return { isSelected, selectAddOns };
});
