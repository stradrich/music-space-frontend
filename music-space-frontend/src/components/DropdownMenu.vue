<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';

const isDropdownHidden = ref(true);

const toggleDropdown = () => {
  isDropdownHidden.value = !isDropdownHidden.value;
};
</script>

<template>
  <!-- Style the button with CSS -->
  <button
    id="dropdownDefaultButton"
    class="mx-5"
    @click="toggleDropdown"
    style="width: 40px; height: 40px; padding: 0; border: none; background: none; cursor: pointer;"
  >
    <!-- <img
      width="30"
      height="30"
      src="/src/assets/bars-solid.svg"
      alt="hamburger dropdown"
    /> -->
    <!-- <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/planet-on-the-dark-side.png" alt="planet-on-the-dark-side"/> -->
  </button>

  <br>
  <!-- Dropdown menu -->
  <div
    v-if="!isDropdownHidden"
    class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200 mb-5"
      aria-labelledby="dropdownDefaultButton"
    >
      <li>
          <!-- If logged in, direct to profile page. If not logged in, go to log in page + sign up. -->
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
        <RouterLink to="/profile/:id">Profile</RouterLink>
        
        </a>
      </li>
        <!-- If logged in, direct to booking page. If not logged in, go to log in page + sign up. -->
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Booking
        </a>
      </li>
        <!-- If logged in, direct to listing page. If not logged in, go to log in page + sign up. -->
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
        <RouterLink to="/publicListing">Listing</RouterLink>
        </a>
      </li>
        <!-- If not logged, disable this link with #  -->
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
         Log Out
        </a>
      </li>
      <!-- Add more list items here -->
    </ul>
  </div>
</template>
