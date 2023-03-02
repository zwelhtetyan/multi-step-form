<script setup lang="ts">
defineProps<{
  class?: string;
  first?: boolean;
  last?: boolean;
}>();
</script>

<template>
  <footer class="w-full flex justify-between items-center" :class="class">
    <button
      class="capitalize text-cool-gray hover:text-black transition-all"
      v-if="!first"
    >
      bo back
    </button>
    <button
      class="capitalize ml-auto p-2 px-4 text-white rounded-lg transition-all"
      :class="
        last
          ? 'bg-purplish-blue hover:bg-purplish-blue/80'
          : 'bg-marine-blue hover:bg-marine-blue/90'
      "
    >
      {{ last ? 'Confirm' : 'Next step' }}
    </button>
  </footer>
</template>
