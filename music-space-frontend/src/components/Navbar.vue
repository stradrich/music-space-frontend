<script setup>
import NavLinks from './NavLinks.vue';
import NavLinkLogin from './NavLinkLogin.vue';
import Button from './Button.vue';
import DropdownMenu from './DropdownMenu.vue';

import { computed, ref, watch, onMounted } from 'vue';
// import { useAuthStore, fetchCurrentUser } from '../stores/auth';
import { useAuthStore } from '../stores/auth';
import { defineProps } from 'vue';

const { isLoggedIn } = defineProps(['isLoggedIn']);

const authStore = useAuthStore();
const currentUser = ref(null);
const user = ref({
  isLoggedIn: false
});

const checkUserLoggedIn = async () => {
  const currentUser = await authStore.getCurrentUser();
  user.isLoggedIn = !!currentUser; // Use !! to convert currentUser to a boolean
  
}

// Watch for changes in authentication state
watch(() => authStore.currentUser, () => {
  checkUserLoggedIn();
});

// Initial check
checkUserLoggedIn();

onMounted(async () => {
  try {
    currentUser.value = await authStore.getCurrentUser(); // Fetch the current user
  } catch (error) {
    console.error('Error fetching current user:', error);
  }
});
</script>


<template>
  <nav class="bg-white">
    <div class="mx-auto p-4 text-lg">
      <div href="#" class="flex items-center">
        <button>
          <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/planet-on-the-dark-side.png" alt="planet-on-the-dark-side" />
        </button>
        <RouterLink to="/" class="ml-15"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-16">Melkro's</span></RouterLink>
        <NavLinks v-if="!isLoggedIn" />
        <template v-else>
          <NavLinkLogin :currentUser="currentUser" :isLoggedIn="isLoggedIn" /> <!-- Pass isLoggedIn as a prop -->
        </template>
      </div>
    </div>
    <div>
      <DropdownMenu />
    </div>
  </nav>
</template>
