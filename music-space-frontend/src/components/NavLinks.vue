<script setup>
import Button from './Button.vue';

console.log();
</script>

<template>
    <div>
        <RouterLink to="/aboutCompany" class="mx-10">Company</RouterLink>
        <RouterLink to="/about" class="mx-5">About</RouterLink>
    </div>
    <div>
        <RouterLink to="/login"><Button class="bg-black mx-2" text="Log In"/></RouterLink>
  </div>
  </template>
  