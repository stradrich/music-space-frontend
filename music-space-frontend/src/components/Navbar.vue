<script setup>
import Button from './Button.vue';
import DropdownMenu from './DropdownMenu.vue'

</script>

<template>

    <nav class="bg-white">
    <div class="mx-auto p-4 text-lg">
        <div href="#" class="flex items-center">
            <button>
                <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/planet-on-the-dark-side.png" alt="planet-on-the-dark-side"/>
            </button>
            
            <img class="ml-6" style="height: 20px; width: 20px;" src="https://liminalplay.com/wp-content/uploads/2021/11/Ma-Kanji.png" alt="間" loading="lazy">
            <span class="ml-2">&#x2022</span>
            <RouterLink to="/" class="ml-2"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-16">Melkro's</span></RouterLink>
            <RouterLink to="/aboutCompany" class="mx-10">Company</RouterLink>
            <RouterLink to="/about" class="mx-5">About</RouterLink>
            <RouterLink to="/login"><Button class="bg-black mx-2" text="Log In"/></RouterLink>
        </div>
    </div>
    <div>
        <DropdownMenu/>
    </div>
    </nav>



</template>
    




