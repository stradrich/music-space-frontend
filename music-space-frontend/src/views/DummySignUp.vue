<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()


const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const major = ref('');
const role = ref('');
const errors = ref([]);

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

 // Check if there are any validation errors
if (errors.value.length === 0) {
  try {
    // Perform the sign-up logic if all fields are valid
    const userData = await store.registerUser(firstName.value, lastName.value, email.value, password.value, major.value, role.value);
    console.log(`User ${userData.id} Registered`);
    // Redirect to the profile page

    // NEED TO STORE SIGN UP USERS IN DATABASE BEFORE GOING TO LOGIN PAGE. LOGIN PAGE WILL VALIDATE IF USER EXIST IN DATABASE AND REDIRECT TO PROFILE PAGE.
    router.push('/login');
  } catch (error) {
    // Handle registration errors (e.g., display an error message)
    console.error('Registration error:', error);
  }
  } else {
  // Handle validation errors (e.g., display error messages)
  // console.log('Validation errors:', errors.value);
  }
</script>

 <template>
    <div class="flex justify-center mb-0">
      <img width="400" height="400" src="/src/assets/IMG_0918.JPG" alt=""/>
     </div>


  
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






