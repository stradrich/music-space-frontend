<script setup>
// import { ref, reactive } from vue;
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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

