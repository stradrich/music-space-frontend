<script setup>
import Underconstruction from './Underconstruction.vue';
</script>

<template>
    <Navbar/>  
    <div class="flex bg-white shadow-md rounded-md space-x-2 text-xs border p-4 justify-center">
          
          <!-- If logged in, direct to listing page. If not logged in, go to log in page + sign up. -->
        <div class="mx-10">
            <img width="40" height="40" src="/src/assets/IMG_0912.JPG" alt="space"/> 
            <RouterLink to="/publicListing">Space for ART</RouterLink>
           
        </div>

         <!-- Page under construction -->
        <div>
            <img width="40" height="40" src="/src/assets/IMG_0915.JPG" alt="instruments"/> 
            <RouterLink to='/underconstruction'><span>Musical instruments 
                <br> and equipments
            </span></RouterLink>
            
        </div>
        <!-- Page under construction -->
        <div class="mx-10">
            <img width="40" height="40" src="/src/assets/icons8-music-conductor-96.png" alt="music-conductor--v2"/>
            <RouterLink to='/underconstruction'><span>Hire our ARTIST</span></RouterLink>
            
        </div>
    </div>  

    <div class="mx-auto my-5">
        <p>Out of practice room?</p>
        <p>Better acoustics?</p>
        <p>Competitive and affordable sessions?</p>
        <p>Easy search and easy booking</p>
        <p>Networking with other artist?</p>
        <p>Concert venues?</p>
        <p>Individual lesson, Masterclasses, Seminar, Exhibition?</p>
    </div>

    <div class="mb-5 hover:underline">
    <RouterLink to="/contact-form">More...</RouterLink>
    </div>



</template>