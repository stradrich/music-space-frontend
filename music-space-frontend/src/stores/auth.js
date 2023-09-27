import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as jose from 'jose';
import axios from 'axios';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    currentUser: ref(null),
    accessToken: ref(null),
    userLoggedIn: ref(false),
    currentRoute: '/',
  }),

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },

  actions: {
    setCurrentRoute(route) {
      this.currentRoute = route;
    },

    async login(formData) {
      try {
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
        console.log('Before login');

        const response = await axios.post('http://localhost:8080/auth/login', {
          email: formData.email,
          password: formData.password,
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          major: formData.major,
        });

        const accessToken = response.data.accessToken;
        console.log(accessToken, 'by Vue');

        localStorage.setItem('access_token', accessToken);

        const currentUser = await this.getCurrentUser();
        console.log(`Login - Current User, ${currentUser?.id}`);
        console.log(`Current User's email:, ${currentUser?.email}`);
        console.log(`Current User's password:, ${currentUser?.password}`);
        console.log(`Current User's role:, ${currentUser?.role}`);
        console.log(`Current User's username:, ${currentUser?.username}`);
        console.log(`Current User's firstName:, ${currentUser?.firstName}`);
        console.log(`Current User's lastName:, ${currentUser?.lastName}`);
        console.log(`Current User's major:, ${currentUser?.major}`);

        const isSuccess = currentUser.role !== null;
        console.log(isSuccess);
        console.log(currentUser.role);
        console.log(currentUser.username);
        console.log(currentUser.firstName);
        console.log(currentUser.lastName);
        console.log(currentUser.major);

        this.currentUser = currentUser;

        if (isSuccess) {
          console.log(currentUser.role);
          this.navigateToProfile(currentUser)
          this.userLoggedIn = true;
          alert('Logged in successfully!');
        } else {
          alert('Invalid username or password.');
        }
      } catch (error) {
        alert('Invalid username or password.');
        console.error('Login error:', error);
      }
    },


    async navigateToProfile() {
      const currentUser = this.currentUser; // Access currentUser from the store
    
      if (currentUser) {
        const link = currentUser.role;
        console.log('Profile Link:', link);
        console.log('Profile Link for Provider:', link);
        console.log('Profile Link for Customer:', link);
        if (currentUser.role === 'provider') {
          router.push(`/profile/spaceProvider/${currentUser.id}`);
        } else if (currentUser.role === 'customer') {
          router.push(`/profile/spaceUser/${currentUser.id}`);
        } else {
          // Handle other cases if needed, or provide a default route
          router.push('/');
        }
      } else {
        // Handle the case where currentUser is null
        // You can redirect the user to a login page or handle it as needed
        console.error('CurrentUser is null');
      }
    },
    
    

    async checkUserLoggedIn() {
      try {
        const currentUser = await this.getCurrentUser();
        this.userLoggedIn = !currentUser;
      } catch (error) {
        console.error('Error checking user login status:', error);
        throw error;
      }
    },

      // DATA FROM SERVER

      // This function is responsible for fetching the user data from an API using the access token stored in local storage.
      // It includes making an API request, handling the response, and updating the store's state with the user data.
      // It is designed to retrieve user data from a server.
      async fetchCurrentUser() {
        try {
          const accessToken = localStorage.getItem('access_token');
          console.log('Access Token:', accessToken);
      
          if (!accessToken) throw new Error('Access token not found');
      
          const response = await axios.get('http://localhost:8080/auth/current-user', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
      
          if (response.ok) {
            const userDetails = response.data; // Adjust this based on your API response structure
      
            // Check if 'role' is present in userDetails
            if (userDetails && userDetails.role) {
              // Update the store's currentUser state
              this.currentUser = userDetails;
      
              console.log(currentUser);
              console.log('User Data:', userDetails);
              return userDetails;
            } else {
              const errorData = await response.json();
              console.error('API Error:', errorData);
              console.error('User role is missing or null in API response.');
              throw 'Error fetching user data';
            }
          }
        } catch (error) {
          console.error('Error fetching current user:', error);
          throw error;
        }
      },
      
      
    

    // DATA FROM LOCAL STORAGE

    // This function decodes the access token stored in local storage and extracts user details from it.
    // It does not make an API request and is primarily used for extracting user information locally from the access token.
    // It is typically used for quick access to user details without the need for an API call.
    async getCurrentUser() {
      try {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken, 'by 🍍🍍🍍');
        
        if (!accessToken) throw 'Access token not found';
    
        const decodedToken = jose.decodeJwt(accessToken);
        console.log(decodedToken, 'by 🍍🍍🍍');
    
        if (!decodedToken || !decodedToken.id) throw 'Invalid token or missing user ID';
    
        const userDetails = {
          id: decodedToken.id,
          email: decodedToken.email,
          role: decodedToken.role,
          username: decodedToken.username,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          major: decodedToken.major,
        };
    
        return userDetails; // Return user details without navigation
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async registerUser(username, firstName, lastName, email, password, major, role) {
      try {
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, firstName, lastName, email, password, major, role }),
        };

        const response = await fetch('http://localhost:8080/auth/register', options);

        if (response.ok) {
          const user = await response.json();

          this.currentUser = {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            major: user.major,
          };

          console.log('Successfully registered as a User - by 🍍🍍🍍', user);
          router.push('/login');
        } else {
          const errorData = await response.json();
          console.error('Registration error:', errorData);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async logout() {
      localStorage.removeItem('access_token');
      this.currentUser = null;
      this.userLoggedIn = false;
      console.log('Successfully logged out - by 🍍🍍🍍');
    },
  },

  mounted() {
    this.getCurrentUser();
  },
});
