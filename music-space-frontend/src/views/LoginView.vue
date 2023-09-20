<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import Vue Router
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const email = ref('');
const password = ref('');
const errors = ref({});
const showPassword = ref(false);
const router = useRouter(); // Create a router instance

// THIS ONE CAN BE REPLACED BY PINIA 🍍🍍🍍
// const login = () => {
//   // Reset errors
//   errors.value = {};

//   // Validate username
//   if (!email.value) {
//     errors.value.email = 'Email is required.';
//   }

//   // Validate password
//   if (!password.value) {
//     errors.value.password = 'Password is required.';
//   } else if (password.value.length < 8) {
//     errors.value.password = 'Password must be at least 8 characters long.';
//   }

//   // If no errors, submit form
//   if (Object.keys(errors.value).length === 0) {
    
//     // Send login request to server with username and password
//     // If successful, redirect to home page using Vue Router
//     // BEFORE LOGIN, profile-booking-logout ALL DEAD LINK, listing only public listing.
//     // LOGIN PAGE WILL VALIDATE IF USER EXIST IN DATABASE
//     // IF LOGIN successful, REDIRECT TO PROFILE PAGE and allow profile-booking-listing-logout
  
//     // If unsuccessful, display error message
//     if (email.value === 'xyz@gmail.com' && password.value === 'mypassword') {
//       // Replace with your own logic to handle successful login
//       alert('Logged in successfully!');
//       router.push('/profile'); // Redirect to the profile page
//     } else {
//       alert('Invalid username or password.');
//     }
//   }
// };

const login = async () => {
  console.log('Before login');
  const isSuccess = await authStore.login({ email: email.value, password: password.value });
  console.log('After login', isSuccess);
  
  if (isSuccess) {
    alert('Logged in successfully!');
    router.push('/profile'); // Redirect to the profile page
  } else {
    alert('Invalid username or password.');
  }
};
</script>

<template>
  <div class="flex justify-center mb-0">
    <img width="400" height="400" src="/src/assets/IMG_0917.PNG" alt="" loading="lazy"/>

  </div>
   
  <div class="d-flex align-center justify-center" style="height: 60vh">
    <v-sheet width="400" class="p-2">
      
      <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email" outlined></v-text-field>
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          outlined
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
        <v-btn type="submit" block class="mt-2 bg-black">Sign in</v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </v-sheet>
   
  </div>
</template>
