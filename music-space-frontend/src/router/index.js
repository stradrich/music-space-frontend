import { createRouter, createWebHistory } from 'vue-router'

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
    {
      path: '/aboutCompany',
      name: 'About Company',
      component: () => import('../views/AboutCompany.vue')

    },
    { // Contact form
      path: '/contact-form',
      name: 'Contact Form',
      component: () => import('../views/ContactForm.vue')
    },
    { // Learn more
      path: '/learnmore',
      name: 'Learn More',
      component: () => import ('../views/LearnMore.vue')
    },
    { // Under Construction
      path: '/underconstruction',
      name: 'Under Construction',
      component: () => import ('../views/Underconstruction.vue')
    },
    // SECTION 2 (registration & authentication):
    // Create account/profile
    {
      path: '/signup',
      name: 'Sign Up',
      component: () => import('../views/SignUpForm.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('../views/LoginView.vue')
    },
    {
      path: '/forgotPassword',
      name: 'Forgot Password',
      component: () => import ('../views/ForgotPassword.vue')
    },
    {
      path: '/resetPassword',
      name: 'Reset Password',
      component: () => import ('../views/ResetPassword.vue')
    },
    {
      path: '/changePassword',
      name: 'Change Password',
      component: () => import ('../views/ChangePassword.vue')
    },
    // SECTION 3 (Users)

    /// SECTION 3a (Users: Provider - profile, listing and booking)
    /// PROFILE
    /// See own profile (Empty by default)
    /// Create profile 
    {
      path: '/profile/spaceProvider/:id',
      name: 'Provider Profile',
      component: () => import ('../views/ProviderProfile.vue')
    },
    /// Update and Delete OWN profile 
    {
      path: '/UpdateDeleteProfile/:id',
      name: 'Update and Delete Provider Profile',
      component: () => import ('../views/UpdateDeleteProfile.vue')
    },
    /// LISTING
    /// See PUBLIC listings
    {
      path: '/publicListing',
      name: 'Public Listing',
      component: () => import ('../views/PublicListing.vue')
    },
    /// See own listings (ALL - Empty by default)
    {
      path: '/listing/user/:id',
      name: 'Provider Listing',
      component: () => import ('../views/Listing.vue')
    },
    /// Create listing 
    {
      path: '/createListing/user/:id',
      name: 'Create Listing',
      component: () => import ('../views/CreateListing.vue')
    },
    /// Update and Delete listings by ID
    {
      path: '/updateDeleteListing/user/:id',
      name: 'Update or Delete Listing',
      component: () => import ('../views/UpdateDeleteListing.vue')
    },
    /// BOOKING (subdivided into timeslots)
    /// See ALL bookings (if any - Empty by default, need booking data from Customer)
    {
      path: '/booking/user/:id',
      name: 'Booking',
      component: () => import ('../views/Booking.vue')
    },
    /// Update and Delete bookings (if any)
    {
      path: '/UpdateDeleteBooking/booking/:id',
      name: 'Update or Delete Booking',
      component: () => import ('../views/UpdateDeleteBooking.vue')
    },

    /// SECTION 3b (Users: Customer - profile, listing and booking)
    /// PROFILE 
    /// See own profile (Empty by default)
    {
      path: '/profile/spaceUser/:id',
      name: 'Customer Profile',
      component: () => import ('../views/CustomerProfile.vue')
    },
    /// Create profile (Already done in registration and authentication)
    /// Update and Delete OWN profile 
    {
      path: '/UpdateDeleteProfile/:id',
      name: 'Update and Delete Customer Profile',
      component: () => import ('../views/UpdateDeleteProfile.vue')
    },
    /// LISTING
    /// See ALL listings (if any- Empty by default, need data from Provider)
    {
      path: '/allListing',
      name: 'All Listing',
      component: () => import ('../views/Listing.vue')
    },
    /// See specific listing by ID
    {
      path: '/listing/:id',
      name: 'Listing',
      component: () => import ('../views/Listing.vue')
    },
    /// BOOKING (subdivided into timeslots)
    /// See bookings (if any - Empty by default, need booking data from Customer)
    {
      path: '/booking/user/:id',
      name: 'Customer Booking',
      component: () => import ('../views/CustomerBooking.vue')
    },
    /// Create booking, Update and Delete booking (need Provider's approval, do not allow duplicated timeslot)
    {
      path: '/booking/user/:id',
      name: 'Booking',
      component: () => import ('../views/Booking.vue')
    },
  

  

  ]
})


export default router;  
