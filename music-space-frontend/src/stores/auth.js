import { defineStore } from 'pinia';
// JWT utils
import * as jose from 'jose';
import router from '../router/index';


// Define fetchCurrentUser function outside the store
async function fetchUserData() {
  try {
    const response = await fetch('http://localhost:8080/users/:id'); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json(); // Assuming the response is in JSON format
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => {
        return {
            currentUser: {
                id: null,
                name: '',       // Set to an empty string
                email: '',
                role: '',
                firstName: '',
                lastName: '',
                major: ''
            },
            accessToken: null,
            userLoggedIn: false,
        };
    },
    getters: {
        isAuthenticated: (state) => !!state.currentUser,
    },
    actions: {
        // CRUD
        
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
                console.log(accessToken, `by 🍍🍍🍍`);
                if (!accessToken) throw 'Access token not found';

                const decodedToken = jose.decodeJwt(accessToken);
                console.log(decodedToken, `by 🍍🍍🍍`);

                if (!decodedToken || !decodedToken.id) throw 'Invalid token or missing user ID';
                console.log(decodedToken);
                const userDetails = {
                    id: decodedToken.id,
                    email: decodedToken.email,
                    role: decodedToken.role,
                    name: decodedToken.name,          // Include name field
                    firstName: decodedToken.firstName, // Include firstName field
                    lastName: decodedToken.lastName,   // Include lastName field
                    major: decodedToken.major,
                    
                };
                console.log(userDetails);
                // this.currentUser = userDetails; // Update the currentUser state
                return userDetails;
            } catch (error) {
                console.log(error);
            }
        },

        async registerUser(username, firstName, lastName, email, password, major, role) {
            try {
              const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, firstName, lastName, email, password, major, role }),
              };
          
              // const response = await fetch('http://localhost:5174/auth/register', options);
              const response = await fetch('http://localhost:8080/auth/register', options); // Correct the URL
          
              if (response.ok) {
                // Registration was successful (status code 2xx)
                const user = await response.json(); // Define 'user' here
          
                // Update the currentUser state with user information
                this.currentUser = {
                  id: user.id,
                  name: user.username, // Assuming the server provides the username
                  email: user.email,
                  role: user.role,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  major: user.major
                };
          
                console.log('Successfully registered as a User - by 🍍🍍🍍', user);
                // Redirect to the user's profile page (you need to handle this part)
                router.push('/login');
              } else {
                // Registration failed (status code 4xx or 5xx)
                const errorData = await response.json();
                console.error('Registration error:', errorData);
              }
            } catch (error) {
              console.error(error);
            }
          },

        async logout() {
            localStorage.removeItem('access_token');
            this.currentUser = {
                id: null,
                name: '',
                email: '',
                role: '',
                firstName: '',
                lastName: '',
            };
            this.userLoggedIn = false;
            console.log('Successfully logged out - by 🍍🍍🍍');
        },
        
    },
    mounted() {
        this.$store.auth.getCurrentUser();
      },
    
});




