<script setup>
import Button from '../components/Button.vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

// Create a computed property to check if the user is authenticated
const isAuthenticated = () => {
  return authStore.isAuthenticated;
};

</script>

<template>
  <div class="flex justify-center">
    <img :src="'/src/assets/IMG_1277.jpg'" alt="">
  </div>
  <div class="flex justify-center">
    <p>CUSTOMER PROFILE (Space User)</p>
  </div>
  <div class="flex justify-center">
    <span v-if="isAuthenticated" class="login">
      Welcome, 
        <RouterLink to="/profileCard">
            <p class="text-lg">{{ authStore.currentUser?.username }}</p>
        </RouterLink>
    </span>
    <span v-else>Not logged in</span>
  </div>
  <div>
    <RouterLink to="/" class="flex justify-center">You have 0 booking</RouterLink>
  </div>
  <div class="flex justify-center">
    <RouterLink to="/"><Button text="Book a space" class="mt-5 mb-5"/></RouterLink>
  </div>
</template>
