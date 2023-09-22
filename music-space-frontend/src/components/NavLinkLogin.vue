<script setup>
import { defineProps } from 'vue';

const { name, isLoggedIn, currentUser } = defineProps(['name', 'isLoggedIn', 'currentUser']);

console.log(isLoggedIn);
console.log(currentUser);
</script>







<template>
      <!-- Render other links when logged out -->
    <RouterLink to="/" class="ml-10 mr-5">My Listing</RouterLink>
    <RouterLink to="/" class="mr-5">My Booking</RouterLink>
    <span v-if="isLoggedIn">{{ currentUser.name }}</span>

  </template>
