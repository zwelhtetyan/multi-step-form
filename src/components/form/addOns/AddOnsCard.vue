<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
  price: number;
  isSelected: () => boolean;
  selectAddOns: () => void;
}>();
</script>

<template>
  <div
    @click="selectAddOns"
    class="min-h-[5rem] py-2 px-4 md:px-5 flex items-center justify-between rounded-lg border hover:border-purplish-blue transition-all cursor-pointer select-none"
    :class="
      isSelected() ? 'border-purplish-blue bg-magnolia' : 'border-light-gray'
    "
  >
    <div class="flex items-center">
      <div
        class="w-[20px] h-[20px] flex items-center justify-center rounded border"
        :class="
          isSelected()
            ? 'border-purplish-blue bg-purplish-blue'
            : 'border-light-gray'
        "
      >
        <div
          class="w-[11px] h-[5.5px] mb-[2px] transition-all duration-200 border-b-2 border-l-2 border-b-white border-l-white"
          :class="isSelected() && '-rotate-45'"
        />
      </div>

      <div class="ml-4 md:ml-5 flex-1">
        <h1 class="font-bold text-marine-blue">{{ title }}</h1>
        <p class="text-sm text-cool-gray">{{ desc }}</p>
      </div>
    </div>

    <p class="text-sm text-purplish-blue font-semibold">+${{ price }}/mo</p>
  </div>
</template>
