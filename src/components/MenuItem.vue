<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMenuStore } from '../store';

defineProps<{
  idx: number;
  name: string;
}>();

const menuStore = useMenuStore();
const currentMenuIdx = ref(menuStore.currentMenuIdx);

watch(
  () => menuStore.currentMenuIdx,
  (menu) => (currentMenuIdx.value = menu)
);
</script>

<template>
  <div
    @click="() => menuStore.setMenu(idx)"
    class="flex items-center mb-6 cursor-pointer"
  >
    <div
      class="w-10 h-10 flex items-center justify-center transition-all border border-white rounded-full"
      :class="
        currentMenuIdx === idx ? 'bg-light-blue text-black' : 'text-white'
      "
    >
      {{ idx }}
    </div>
    <div class="flex-1 pl-4 uppercase">
      <p class="text-pastel-blue font-thin text-sm leading-5">Step {{ idx }}</p>
      <h1 class="text-white font-bold tracking-wide hover:text-light-gray">
        {{ name }}
      </h1>
    </div>
  </div>
</template>
