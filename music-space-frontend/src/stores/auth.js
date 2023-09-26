import { defineStore } from 'pinia';
import * as jose from 'jose';
import axios from 'axios';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    currentUser: null,
    accessToken: null,
    userLoggedIn: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },

  actions: {
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
          if (currentUser.role === 'provider') {
            router.push(`/profile/spaceProvider/${currentUser.id}`);
          } else if (currentUser.role === 'customer') {
            router.push(`/profile/spaceUser/${currentUser.id}`);
          }

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

    async checkUserLoggedIn() {
      try {
        const currentUser = await this.getCurrentUser();
        this.userLoggedIn = !currentUser;
      } catch (error) {
        console.error('Error checking user login status:', error);
        throw error;
      }
    },

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
    
        // Perform the role-based redirection here
        if (userDetails.role === 'provider') {
          router.push(`/profile/spaceProvider/${userDetails.id}`);
        } else if (userDetails.role === 'customer') {
          router.push(`/profile/spaceUser/${userDetails.id}`);
        }
    
        return userDetails;
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
