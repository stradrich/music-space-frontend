<script setup>
import NavLinks from './NavLinks.vue';
import NavLinkLogin from './NavLinkLogin.vue';
import Button from './Button.vue';
import DropdownMenu from './DropdownMenu.vue';
import { ref, watch } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const userLoggedIn = ref(false);
const currentUser = ref({ name: '' });


const checkUserLoggedIn = async () => {
  const user = await authStore.getCurrentUser();
  userLoggedIn.value = !!user;
  if (userLoggedIn.value) {
    currentUser.value.name = user.name;
  }
};

// Watch for changes in authentication state
watch(() => authStore.currentUser, () => {
  checkUserLoggedIn();
});

// Initial check
checkUserLoggedIn();
</script>

<template>
  <nav class="bg-white">
    <div class="mx-auto p-4 text-lg">
      <div href="#" class="flex items-center">
        <button>
          <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/planet-on-the-dark-side.png" alt="planet-on-the-dark-side" />
        </button>

        <!-- <img class="ml-6" style="height: 20px; width: 20px;" src="https://liminalplay.com/wp-content/uploads/2021/11/Ma-Kanji.png" alt="間" loading="lazy"> -->
        <!-- <span class="ml-2">&#x2022</span> -->
        <RouterLink to="/" class="ml-15"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-16">Melkro's</span></RouterLink>

        <!-- Conditional rendering for navigation links -->
        <NavLinks v-if="!userLoggedIn" />

        <!-- Conditional rendering for user-specific links -->
        <template v-else>
            <NavLinkLogin :name="currentUser" :isLoggedIn="isLoggedIn" />


        </template>
      </div>
    </div>
    <div>
      <DropdownMenu />
    </div>
  </nav>
</template>
