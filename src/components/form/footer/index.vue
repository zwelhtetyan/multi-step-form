<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../../../store';

defineProps<{
  class?: string;
}>();

const menuStore = useMenuStore();
const { menus, currentMenuIdx } = storeToRefs(menuStore);
const lastItem = menus.value.length === currentMenuIdx.value;
</script>

<template>
  <footer class="w-full flex justify-between items-center" :class="class">
    <button
      class="capitalize text-cool-gray hover:text-black transition-all"
      v-if="currentMenuIdx !== 1"
    >
      bo back
    </button>
    <button
      class="capitalize ml-auto p-2 px-4 text-white rounded-lg transition-all"
      :class="
        lastItem
          ? 'bg-purplish-blue hover:bg-purplish-blue/80'
          : 'bg-marine-blue hover:bg-marine-blue/90'
      "
    >
      {{ lastItem ? 'Confirm' : 'Next step' }}
    </button>
  </footer>
</template>
