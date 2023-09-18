<script setup>
// import { ref, reactive } from vue;
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <Navbar/>
    
    <div>
      <RouterView/>
    </div>
    <Footer/> 
  </div>
</template>

<style scoped>



</style> 

