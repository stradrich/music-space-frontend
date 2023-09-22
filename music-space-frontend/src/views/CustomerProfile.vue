<script setup>
import Button from '../components/Button.vue';

</script>

<template>
      
    <div class="flex justify-center">
        <img :src="'/src/assets/IMG_1277.jpg'" alt="">
    </div>
    <div class="flex justify-center">
        <p>CUSTOMER PROFILE (Space User)</p>
    </div>
    <div class="flex justify-center">
       <p>Welcome,  <RouterLink to="/profileCard">Name</RouterLink></p>
    </div>
    <div>
        <RouterLink to="/" class="flex justify-center">You have 0 booking</RouterLink>
    </div>
    <div class="flex justify-center">
        <RouterLink to="/"><Button text="Book a space" class="mt-5 mb-5"/></RouterLink>
    </div>
</template>



<style lang="scss" scoped>

</style>