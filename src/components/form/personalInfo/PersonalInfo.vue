<script setup lang="ts">
import { reactive, ref } from 'vue';
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import FormLabel from './FormLabel.vue';
import { handleValidate } from '../../../utils/handleValidate';
import { useStepOneStore } from '../../../store';
import { storeToRefs } from 'pinia';

const title = 'Personal Info';
const desc = 'Please provide you name, email address and phone number.';

const stepOneStore = useStepOneStore();
const { name, email, phoneNumber } = storeToRefs(stepOneStore);

const errorState = reactive({
  name: '',
  email: '',
  phoneNumber: '',
});
</script>

<template>
  <div class="flex-1">
    <div class="mobile-ui-card">
      <Header :title="title" :desc="desc" class="mb-5 md:mb-10" />

      <div class="mb-5">
        <FormLabel
          label="Name"
          :htmlFor="name"
          :errorMessage="errorState.name"
        />
        <input
          v-model="name"
          id="name"
          type="text"
          placeholder="e.g.Stephen King"
          class="primary-input"
          :class="errorState.name && 'border-strawberry-red'"
        />
      </div>

      <div class="mb-5">
        <FormLabel
          label="Email Address"
          htmlFor="email"
          :errorMessage="errorState.email"
        />
        <input
          v-model="email"
          id="email"
          type="text"
          placeholder="e.g.stephenking@lorem.com"
          class="primary-input"
          :class="errorState.email && 'border-strawberry-red'"
        />
      </div>

      <div class="mb-1">
        <FormLabel
          label="Phone Number"
          htmlFor="phone"
          :errorMessage="errorState.phoneNumber"
        />
        <input
          v-model="phoneNumber"
          id="phone"
          type="number"
          placeholder="e.g.+1 234 567 890"
          class="primary-input"
          :class="errorState.phoneNumber && 'border-strawberry-red'"
        />
      </div>
    </div>
  </div>

  <Footer
    class="mt-12 md:mt-14"
    :cb="() => handleValidate(name, email, phoneNumber, errorState)"
  />
</template>
