<script setup lang="ts">
import MenuItem from './MenuItem.vue';

const menus = ['your info', 'select plan', 'add-ons', 'summary'];
</script>

<template>
  <div
    class="w-[270px] rounded-xl bg-desktop-sidebar-bg bg-no-repeat bg-cover h-full p-6 pt-10"
  >
    <MenuItem
      v-for="(menu, idx) in menus"
      :key="menu"
      :name="menu"
      :idx="idx + 1"
    />
  </div>
</template>
