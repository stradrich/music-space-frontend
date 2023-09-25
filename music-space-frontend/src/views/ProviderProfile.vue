<script setup>
import Button from '../components/Button.vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

</script>

<template>
   <div class="flex justify-center">
        <img :src="'/src/assets/IMG_1276.jpg'" alt="">
    </div>

    <div class="flex justify-center">
        <p>SPACE PROVIDER PROFILE (Space User)</p>
    </div>
    <div class="flex justify-center">
        <span v-if="authStore.currentUser">Welcome, <RouterLink to='/profileCard'>{{ authStore.currentUser.name }}</RouterLink></span>
       <span v-else>Not logged in</span>
       <!-- <span v-if="$store.auth.currentUser">Welcome, <RouterLink to='/profileCard'>{{ $store.auth.currentUser.name}}</RouterLink></span>
       <span v-else>Not logged in</span> -->
    </div>
    <div>
        <RouterLink to="/" class="flex justify-center">You have 0 listing</RouterLink>
    </div>
    <div>
        <RouterLink to="/" class="flex justify-center">You have 0 booking</RouterLink>
    </div>
    <div class="flex justify-center">
        <RouterLink to="/createListing/user/:id"><Button text="Create Listings" class="mt-5 mb-5"/></RouterLink>
    </div>
</template>



<style lang="scss" scoped>

</style>