<script setup>
import Button from './Button.vue';
</script>

<template>

    <nav class="bg-white">
    <div class="mx-auto p-4 text-lg">
        <div href="#" class="flex items-center">
            <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/planet-on-the-dark-side.png" alt="planet-on-the-dark-side"/>
            <RouterLink to="/" class="mx-1"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-5 mr-16">Melkro's</span></RouterLink>
            <RouterLink to="/" class="mx-10">Company</RouterLink>
            <RouterLink to="/about" class="mx-5">About</RouterLink>
           
            <Button class="bg-black mx-2" text="Log In"/>
            <img width="20" height="20" src="/src/assets/bars-solid.svg" alt="">
            
        </div>
       
    </div>
    </nav>



</template>
    




