<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter, RouterLink, RouterView } from 'vue-router'
// import { useAuthStore } from './stores/auth'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const router = useRouter()
// const authStore = useAuthStore()

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
  user.isLoggedIn = !currentUser
}

onMounted(()=> {
  checkUserLoggedIn
})
</script>

<template>
   <!-- always on top -->
  <div class="h-screen bg-white"  >
    <Navbar/>
  <div>
    <!-- show homepage and changes according to activity -->
      <RouterView/>
    </div>

    <!-- always below -->
     <Footer class="mb-auto"/> 
  </div>
</template>

<style scoped>



</style> 

