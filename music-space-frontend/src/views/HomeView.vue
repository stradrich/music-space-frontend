<script setup>
import Button from '../components/Button.vue';

</script>

<template>
    <div class="flex mb-5">
        <div class="bg-white shadow-md rounded-md border p-4 mt-16 mb-15">
                <h1 class="text-lg font-semibold">Get a space and craft your voice</h1>
                <p class="text-gray-600">
                    A platform for musician and artist alike, 
                    <br> and be inspired by our art spaces
                </p>
                <!-- Go to sign up page-->
                <RouterLink to="/signup"><Button text="Sign up" class="mt-5 mb-5"/></RouterLink>
                
                <div>
                    <RouterLink to="/learnmore">Learn more about hosting your space</RouterLink>
                    <!-- <a href="#" class="hover:underline"></a> -->
                </div>
                
        </div>

        
            
        
        <div class="p-4 mt-16 mb-15">
        <img src="/src/assets/ikigai-girl-at-home-playing-a-stringed-musical-instrument-1.png" alt="">
    </div>
    </div>
    
</template>