<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../../store';
import { toRefs } from 'vue';

const props = defineProps<{
  class?: string;
  cb?: () => boolean;
}>();

const menuStore = useMenuStore();
const { menus, currentMenuIdx } = storeToRefs(menuStore);
const { cb } = toRefs(props);

const lastItem = menus.value.length === currentMenuIdx.value;

const handleNextStep = () => {
  if (cb?.value) {
    const isValidForm = cb.value();
    isValidForm && menuStore.setMenu(currentMenuIdx.value + 1);
  } else {
    menuStore.setMenu(currentMenuIdx.value + 1);
  }
};

const handlePrevious = () => menuStore.setMenu(currentMenuIdx.value - 1);

const handleConfirm = () => console.log('thank you!');
</script>

<template>
  <footer
    class="w-full flex justify-between items-center text-sm"
    :class="class"
  >
    <button
      @click="handlePrevious"
      class="capitalize text-cool-gray hover:text-black transition-all select-none"
      v-if="currentMenuIdx !== 1"
    >
      bo back
    </button>
    <button
      @click="() => (lastItem ? handleConfirm() : handleNextStep())"
      class="capitalize ml-auto h-10 p-2 px-4 text-white rounded-lg transition-all select-none"
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
