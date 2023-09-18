<script setup>

</script>

<template>
    <Navbar/>  
    <div class="flex bg-white shadow-md rounded-md space-x-2 text-xs border p-4 justify-center">
          
        <div class="mx-10">
            <img width="40" height="40" src="/src/assets/IMG_0912.JPG" alt="space"/> 
            <span>Space for ART</span>
        </div>
        <div>
            <img width="40" height="40" src="/src/assets/IMG_0915.JPG" alt="instruments"/> 
            <span>Musical instruments 
                <br> and equipments
            </span>
        </div>
        <div class="mx-10">
            <img width="40" height="40" src="/src/assets/icons8-music-conductor-96.png" alt="music-conductor--v2"/>
            <span>Hire our ARTIST</span>
        </div>
    </div>  

    <div class="mx-auto my-5">
        <p>Out of practice room?</p>
        <p>Better acoustics?</p>
        <p>Competitive and affordable sessions?</p>
        <p>Easy search and easy booking</p>
        <p>Networking with other artist?</p>
        <p>Concert venues?</p>
        <p>Masterclasses, Seminar, Exhibition?</p>
    </div>

    <div class="mb-5">
        <RouterLink to="/contact-form">More...</RouterLink>
    </div>


</template>