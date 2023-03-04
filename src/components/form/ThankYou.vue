<script setup lang="ts">
import thankYou from '../../assets/images/icon-thank-you.svg';
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center">
    <img :src="thankYou" alt="check" class="w-16 h-16 mb-6" />
    <h1 class="text-marine-blue font-bold text-3xl mb-2">Thank you!</h1>
    <p class="text-cool-gray text-sm">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
</template>
