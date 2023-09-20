<script>
import { ref } from 'vue';

export default {
  setup() {
    // Define your image data using ref
    const images = ref([
      { src: '/src/assets/IMG_0911.jpg', alt: 'dfp', name: 'Petronas Hall', description: 'Concert Hall', price: '$$$$$', locationLink: '', map:"/src/assets/IMG_1388.JPG" },
      { src: '/src/assets/IMG_0934.JPG', alt: 'recital hall', name: 'Orang Utan Studio', description: 'Recital Hall', price: '$$$', locationLink: '', map:"/src/assets/IMG_1389.JPG" },
      { src: 'https://www.thomsunplay.com/static/img/studios/studio2.jpg', alt: 'recital hall', name: 'Nabalu Studio', description: 'Band Room', price: '$$', locationLink: '', map:"/src/assets/IMG_1390.JPG" },
      // Add more images as needed
    ]);

    return {
      images,
    };
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="image-container mx-8" v-for="(image, index) in images" :key="index" loading="lazy">
      <div>
        <h4 class="flex items-center">
          <a :href="image.locationLink" class="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 384 512">
              <!-- Your SVG path here -->
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
          </a>
          <b>{{ image.name }}</b>
        </h4>
        <div class="flex space-x-2">
          <p>{{ image.description }}</p>
          <p>{{ image.price }}</p>
        </div>
        
      </div>
      
      <img :src="image.src" :alt="image.alt">
      <img :src="image.map">
      
    </div>
  </div>
  <div class="flex justify-center mt-5">
    <RouterLink to="/login">More... </RouterLink>
  </div>
</template>

<style scoped>
/* Style for all image containers (div) */
.image-container {
  width: 200px; /* Set your desired width */
  height: 200px; /* Set your desired height */
  overflow: hidden; /* Hide any content that overflows the container */
  margin: 10px; /* Add spacing between images if needed */
}

/* Style for images within the containers */
.image-container img {
  width: 100%; /* Ensure the image takes up the entire container */
  height: 100%; /* Ensure the image takes up the entire container */
  object-fit: cover; /* This ensures the image covers the container while maintaining aspect ratio */
}
</style>
