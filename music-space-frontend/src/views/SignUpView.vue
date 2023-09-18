<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const major = ref('');
const role = ref('');

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
  'Space Provider',
  'Space User',
];

function isValidEmail(email) {
  // Your email validation logic here
  // You can use a regular expression or other validation methods
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const signUp = () => {
  // Implement your sign-up logic here
  // You can access form data like firstName, lastName, email, password, major, and role
  // Validate the data and perform the necessary actions
};
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="signUp">
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
        label="Signing up as?"
        required
        :rules="[v => !!v || 'Role is required']"
      ></v-select>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
