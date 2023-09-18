<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
  // Your login logic here
};
</script>

<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-sheet width="400" class="mx-auto">
        <v-form @submit.prevent="login">
          <v-text-field v-model="username" label="User Name" outlined></v-text-field>
          <v-text-field v-model="password" label="Password" outlined></v-text-field>
          <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
          <v-btn type="submit" block class="mt-2 bg-black">Sign in</v-btn>
        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Don't have an account? <RouterLink to="/signup"><a>Sign Up</a></RouterLink></p>
        </div>
      </v-sheet>
    </div>
  </template>
  

  