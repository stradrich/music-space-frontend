import { defineStore } from 'pinia'
// JWT utils
import * as jose from 'jose'
import router from '../router/index'

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => {
        return {
            currentUser: {
                id: null,
                email: null,
                role: null
            },
            accessToken: null // Define accessToken in the state
        }
    },
    getters: {

    },
    actions: {
        // CRUD
        async getCurrentUser() {
            try {
                const accessToken = localStorage.getItem('access_token')

                if (!accessToken) throw 'Access token not found'

                // Decode JWT token
                const decodedToken = jose.decodeToken(accessToken)

                if (!decodedToken || !decodedToken.id) throw 'Invalid token or missing user ID'

                const userDetails = {
                    id: decodedToken.id,
                    email: decodedToken.email,
                    role: decodedToken.role
                }
                return userDetails
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
          
            //   const response = await fetch('http://localhost:5174/auth/register', options);
              const response = await fetch('http://localhost:8080/auth/register', options) // Correct the URL
              // const response = await fetch('https://music-space-api-dev-e3fa5fcs7a-as.a.run.app/music-space', options),

              if (response.ok) {
                // Registration was successful (status code 2xx)
                const data = await response.json();
                console.log('Successfully registered as a User - by 🍍🍍🍍', data);
                // Redirect to the user's profile page (you need to handle this part)
                router.push('/profile/:id');
              } else {
                // Registration failed (status code 4xx or 5xx)
                const errorData = await response.json();
                console.error('Registration error:', errorData);
              }
            } catch (error) {
              console.error(error);
            }
          },
          
        async login(email, password) {
            try {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({email, password})
                }

                // const response = await fetch('http://localhost:5174/auth/login', options) // Correct the URL
                const response = await fetch('http://localhost:8080/auth/login', options) // Correct the URL
                // const response = await fetch('https://music-space-api-dev-e3fa5fcs7a-as.a.run.app/music-space', options),
                const data = await response.json()
                
                const accessToken = data.accessToken
                this.accessToken = accessToken
                console.log('Login - Access Token', accessToken);

                // Save access token to local storage
                localStorage.setItem('access_token', accessToken)
                console.log('Local storage access token', accessToken);

                // Fetch current user
                this.currentUser = await this.getCurrentUser()
                console.log('Login - Current User', this.currentUser);

                if (this.currentUser) {
                    this.userLoggedIn = true
                    return this.currentUser.id
                }
            } catch (error) {
                console.error(error)
            }
        },
        async forgotPassword(email) {
            try {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({email})
                }

                // const response = await fetch('http://localhost:5174/auth/forgot-password', options) // Correct the URL
                const response = await fetch('http://localhost:8080/auth/forgot-password', options) // Correct the URL
                // const response = await fetch('https://music-space-api-dev-e3fa5fcs7a-as.a.run.app/music-space', options),
                const data = await response.json()

                console.log(data)
                console.log('User forgot password - by 🍍🍍🍍');
            } catch (error) {
                console.error(error)
            }
        },
        async resetPassword(newPassword, resetToken) {
            try {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({newPassword, resetToken})
                }

                // const response = await fetch('http://localhost:5174/auth/reset-password', options) // Correct the URL
                const response = await fetch('http://localhost:8080/auth/reset-password', options) // Correct the URL
                // const response = await fetch('https://music-space-api-dev-e3fa5fcs7a-as.a.run.app/music-space', options),
                const data = await response.json()

                console.log(data);
                console.log('User reset password - by 🍍🍍🍍');
            } catch (error) {
                console.error(error)
            }
        },
        // get auth token to verify!
        async changePassword(currentPassword, newPassword) {
            try {
                const accessToken = this.accessToken
                const options = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        Authorization: accessToken
                    },
                    body: JSON.stringify({currentPassword, newPassword}) // Change resetToken to currentPassword
                }

                // const response = await fetch('http://localhost:5174/auth/change-password', options) // Correct the URL
                const response = await fetch('http://localhost:8080/auth/change-password', options) // Correct the URL
                // const response = await fetch('https://music-space-api-dev-e3fa5fcs7a-as.a.run.app/music-space', options),
                const data = await response.json()

                console.log(data);
                console.log('User password changed - by 🍍🍍🍍');
            } catch (error) {
                console.error(error);
            }
        },
        async logout() {
            // Delete access token from local storage
            localStorage.removeItem('access_token'); // Add a semicolon

            // Reset the currentUser state
            this.currentUser = {
                id: null,
                name: null,
                email: null,
                role: null
            }

            console.log('Successfully logged out - by 🍍🍍🍍');
        }
    }
})
