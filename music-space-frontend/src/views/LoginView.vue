<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const currentUser = ref(null)

const email = ref('');
const password = ref('');
const name = ref('')
const firstName = ref('')
const lastName =ref('')
const major = ref('')
const errors = ref({});


const formData = {
  email: '',
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  major: '',
};


const showPassword = ref(false);
const authStore = useAuthStore();

const login = async () => {
  try {
    await authStore.login(formData);
  } catch (error) {
    console.error('Login error:', error);
    // Optionally, you can display an error message to the user
  }
};
</script>

<template>
  <div class="flex justify-center mb-0">
    <img width="400" height="400" src="/src/assets/IMG_0917.PNG" alt="" loading="lazy" />
  </div>

  <div class="d-flex align-center justify-center" style="height: 60vh">
    <v-sheet width="400" class="p-2">
      
      <v-form @submit.prevent="login">
        <v-text-field v-model="formData.email" label="Email" outlined></v-text-field>
        <v-text-field
          v-model="formData.password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          outlined
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          autocomplete="off"
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


