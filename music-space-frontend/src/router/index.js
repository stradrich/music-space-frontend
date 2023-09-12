import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // SECTION 1 (main content):
    // Both the "Home" and "About" pages are integral parts of the main content area where the core information and messaging of the website are presented to visitors. They are accessed through navigation links in the header or navbar of the website.
    {
      //  The "Home" page includes introductory content, featured content, and highlights of what the website offers.
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      // The "About" contains information about the website's mission, history, team, or any other relevant details that help users understand the purpose and background of the website or organization.
     
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    // SECTION 2 (registration):
    {
      path: '/signup',
      name: 'Sign Up',
      component: () => import('../views/SignUpView.vue')
    }
  ]
})


export default router
