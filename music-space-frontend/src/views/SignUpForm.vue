<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth'
import axios from 'axios';

const store = useAuthStore();

const username = ref('');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const major = ref('');
const role = ref('');
const errors = ref([]);

const usernameRules = ref([
  (value) => {
    if (value.length >= 3) return true;
    return 'Username must be at least 3 characters.';
  },
]);

const firstNameRules = ref([
  (value) => {
    if (value.length >= 3) return true;
    return 'First name must be at least 3 characters.';
  },
]);

const lastNameRules = ref([
  (value) => {
    if (!/\d/.test(value)) return true;
    return 'Last name cannot contain digits.';
  },
]);

const emailRules = ref([
  (value) => {
    if (!value) return 'Email is required';
    if (!isValidEmail(value)) return 'Invalid email format';
    return true;
  },
]);

const passwordRules = ref([
  (value) => {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters';
    return true;
  },
]);

const majorOptions = [
  'Piano',
  'Violin',
  'Cello',
  'Guitar',
  'Others',
];

const roleOptions = [
  'provider',
  'customer',
];

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const router = useRouter();

const signUp = async () => {
  // Reset validation errors
  errors.value = [];

 // Validate first name
  firstNameRules.value.forEach((rule) => {
    const result = rule(firstName.value);
    if (result !== true) {
      errors.value.push(result);
    }
  });

   // Validate last name
  lastNameRules.value.forEach((rule) => {
    const result = rule(lastName.value);
    if (result !== true) {
      errors.value.push(result);
    }
  });

    // Validate email
  emailRules.value.forEach((rule) => {
    const result = rule(email.value);
    if (result !== true) {
      errors.value.push(result);
    }
  });

    // Validate password
  passwordRules.value.forEach((rule) => {
    const result = rule(password.value);
    if (result !== true) {
      errors.value.push(result);
    }
  });



// Function to check if a username exists
async function checkUsernameExists(username, accessToken) {
  try {
    const options = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };
    const response = await axios.get(`http://localhost:8080/users/users/`, options);

    return response.data.exists; // Assuming your server returns an object with an 'exists' property
  } catch (error) {
    console.error('Error checking username:', error);
    return false; // Assume username doesn't exist on error
  }
}

// Function to check if an email exists
async function checkEmailExists(email, accessToken) {
  try {
    const options = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };
    const response = await axios.get(`http://localhost:8080/users/users/`, options);
    return response.data.exists; // Assuming your server returns an object with an 'exists' property
  } catch (error) {
    console.error('Error checking email:', error);
    return false; // Assume email doesn't exist on error
  }
}

// ...

if (errors.value.length !== 0) {
  // Handle validation errors
  console.log('Validation errors:', errors.value);
  return;
}

try {
  // Check if the username or email is already in use
  const isUsernameTaken = await checkUsernameExists(username.value, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NTE1MDUyM30.dqxJ9huli7IZknssVLJGQxgMR7P2pj-TpUYZ3OTnGbo");
  const isEmailTaken = await checkEmailExists(email.value, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NTE1MDUyM30.dqxJ9huli7IZknssVLJGQxgMR7P2pj-TpUYZ3OTnGbo");

  if (isUsernameTaken || isEmailTaken) {
    console.log('User with the same username or email already exists.');
    return; // Don't proceed with registration
  }

  // Perform the sign-up logic if all fields are valid
  const userData = await store.registerUser(username.value, firstName.value, lastName.value, email.value, password.value, major.value, role.value);

  if (userData) {
    console.log('Registration successful - by Vue');
    // Redirect to the profile page
    // router.push('/login');
  } 
} catch (error) {
  // Handle registration errors (e.g., display an error message)
  console.log('Please try again');
  console.error('Registration error:', error); // Log the actual error
}



}

</script>

<template>
    <div class="flex justify-center mb-0">
      <img width="400" height="400" src="/src/assets/IMG_0918.JPG" alt=""/>
    </div>

  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
     <v-text-field
        v-model="username"
        label="username"
        :rules="usernameRules"
      ></v-text-field>


      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <v-select
        v-model="major"
        :items="majorOptions"
        label="What is your major?"
        required
        :rules="[v => !!v || 'Major is required']"
      ></v-select>

      <v-select
        v-model="role"
        :items="roleOptions"
        label="Signing up as space provider or space user?"
        required
        :rules="[v => !!v || 'Role is required']"
      ></v-select>

      <v-btn @click="signUp" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>