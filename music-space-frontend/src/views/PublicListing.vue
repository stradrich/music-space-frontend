<template>
  <div class="flex justify-center">
    <!-- Your Vue.js app -->
    <div class="image-container mx-8" v-for="(image, index) in images" :key="index">
      <div>
        <h4><b>{{ image.name }}</b></h4>
        <div class="flex space-x-2">
          <p>{{ image.description }}</p>
           <p> {{ image.price }} </p>
        </div>
       
      </div>
     
      <img :src="image.src" :alt="image.alt">
      
    </div>

    
  </div>
  <div class="flex justify-center mt-5">
    <RouterLink to="/login">More... </RouterLink>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Define your image data using ref
    const images = ref([
      { src: '/src/assets/IMG_0911.jpg', alt: 'dfp', name: 'Petronas Hall', description: 'Concert Hall', price: '$$$$$' },
      { src: '/src/assets/IMG_0934.JPG', alt: 'recital hall', name: 'Orang Utan Recital Hall', description: 'Recital Hall', price: '$$$'  },
      { src: 'https://www.thomsunplay.com/static/img/studios/studio2.jpg', alt: 'recital hall',name: 'Nabalu Studio', description: 'Band Room', price: '$$' },
      // Add more images as needed
    ]);

    // You can also define other reactive data and methods here

    return {
      images,
    };
  },
};
</script>


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
