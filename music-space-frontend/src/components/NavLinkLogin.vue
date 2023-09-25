<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

import { ref, defineProps, watch } from 'vue';

const { isLoggedIn } = defineProps(['isLoggedIn']);

// Create a ref for isLoggedIn
const isLoggedInRef = ref(isLoggedIn);

// Watch for changes in isLoggedInRef
watch(isLoggedInRef, (newValue, oldValue) => {
  console.log('isLoggedIn changed from', oldValue, 'to', newValue);
});

console.log(isLoggedIn);
console.log(currentUser);
</script>








<template>
      <!-- Render other links when logged out -->
    <RouterLink to="/" class="ml-10 mr-5">My Listing</RouterLink>
    <RouterLink to="/" class="mr-5">My Booking</RouterLink>
    <span v-if="isLoggedIn">{{authStore.currentUser }}</span>
    <span v-else>Not logged in</span>
  </template>
