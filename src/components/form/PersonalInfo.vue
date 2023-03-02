<script setup lang="ts">
import Header from './Header.vue';
import Footer from '../Footer.vue';
import { reactive, ref } from 'vue';
import FormLabel from './FormLabel.vue';
import { handleValidate } from '../../utils/handleValidate';

const title = 'Personal Info';
const desc = 'Please provide you name, email address and phone number.';

const name = ref('');
const email = ref('');
const phoneNumber = ref('');

const errorState = reactive({
  name: '',
  email: '',
  phoneNumber: '',
});
</script>

<template>
  <Header :title="title" :desc="desc" class="mb-10" />

  <div class="mb-5">
    <FormLabel label="Name" :htmlFor="name" :errorMessage="errorState.name" />
    <input
      v-model="name"
      id="name"
      type="text"
      placeholder="e.g.Stephen King"
      class="primary-input"
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
    />
  </div>

  <div class="mb-5">
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
    />
  </div>

  <Footer
    class="mt-20"
    :cb="() => handleValidate(name, email, phoneNumber, errorState)"
  />
</template>
