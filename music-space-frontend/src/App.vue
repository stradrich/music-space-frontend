<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter, RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


const router = useRouter()
// const store = useStore(); // Get the Vuex store instance
const authStore = useAuthStore()
const currentUser = ref(null)
const loadingCurrentUser = ref(true); // Add a loading state for current user
console.log("Component is loaded.");

// first page when visiting app
const goToSignUp = () => {
  router.push('/signup')
}

// Not logged in by default, need history to track
const user = reactive({
  isLoggedIn: false
})

const checkUserLoggedIn = async () => {
  const currentUser = await authStore.getCurrentUser()
  user.isLoggedIn = !!currentUser // Use !! to convert currentUser to a boolean
}

// onMounted(async () => {
//   try {
//     await authStore.checkUserLoggedIn(); // Ensure the user login status is checked first
//     currentUser.value = await authStore.getCurrentUser(); // Fetch the current user
//   } catch (error) {
//     console.error('Error fetching current user:', error);
//   }
// });

onMounted(async () => {
  console.log('DropdownMenu component is mounted.');
  try {
    await authStore.checkUserLoggedIn(); // Ensure the user login status is checked first
    currentUser.value = await authStore.getCurrentUser(); // Fetch the current user
    loadingCurrentUser.value = false; // Set loading to false when data is available
  } catch (error) {
    console.error('Error fetching current user:', error);
    loadingCurrentUser.value = false; // Set loading to false on error
  }
});


</script>

<template>
  <!-- always on top -->
  <div class="h-screen bg-white">
    <Navbar :isLoggedIn="user.isLoggedIn" />


    <div>
      <!-- show homepage and changes according to activity -->
      <RouterView />
    </div>

    <!-- always below -->
    <Footer class="mb-auto" />
  </div>
</template>

<style scoped>
</style>
