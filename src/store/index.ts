import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const currentMenu = ref(1);

  const setMenu = (menuIdx: number) => {
    currentMenu.value = menuIdx;
  };

  return { currentMenu, setMenu };
});
