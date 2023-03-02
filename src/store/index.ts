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
