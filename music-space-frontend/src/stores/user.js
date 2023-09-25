// import { defineStore } from "pinia";
// import * as jose from 'jose'
// import { useAuthStores } from "./auth";

// export const useUserStores = defineStore({
//     id: 'users',

//     state: () => {
//         return {
//             user: {
//                 id: null,
//                 name: null,
//                 email: null,
//                 password: null,
//                 isVerified: null,
//                 role: null
//             }
//         }
//     },

//     getters: {
//         getUser: (state) => state.user,
//     },

//     actions: {

//         async getAllUsers() {
//             try {
//                 const options = {
//                     method: 'GET'
//                 }

//                 // const response = await fetch(`http://localhost:8080/users`, options)
//                 const response = await fetch(`https://pet-grooming-appt-system-api-dev-4-tkytgwdwfa-as.a.run.app/users`, options)
//                 const data = await response.json()

//                 console.log(data)
//                 return data
//             } catch (error) {
//                 console.error(error)
//             }
//         },

//         async getUserByID(userID) {
//             console.log('USER ID (From Get User By Id)', userID)
            
//             if(userID) {
//                 try {
//                     const options = {
//                         method: 'GET'
//                     }
//                     // const response = await fetch(`http://localhost:8080/users/${userID}`, options)
//                     const response = await fetch(`https://pet-grooming-appt-system-api-dev-4-tkytgwdwfa-as.a.run.app/users/${userID}`, options)
//                     const data = await response.json()
                    
//                     this.user = data // Set the user information in the state
                    
//                     console.log('Get User By ID - User ID:' , userID)
//                     console.log('Get User By ID - User Data', data)
//                     console.log('Get user id - thrown from pinia')
                    
//                     return data
//                 } catch (error) {
//                     console.error(error)
//                 }
//             }
//         },

//         async createUser() {
//             try {
//                 const accessToken = localStorage.getItem('access_token')
                
//                 const options = {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: accessToken
//                     },
//                     body: JSON.stringify({email, password, role, isVerified})
//                 }

//                 // const response = await fetch('http://localhost:8080/users', options)
//                 const response = await fetch('https://pet-grooming-appt-system-api-dev-4-tkytgwdwfa-as.a.run.app/users', options)
//                 const data = await response.json()

//                 console.log('User Data', data)
//                 console.log('User created - thrown from pinia')
//             } catch (error) {
//                 console.error(error)
//             }
//         },

//         // async updateUser(name, email) {
//         //     try {

//         //         const authStore = useAuthStores()
//         //         const user = await authStore.getCurrentUser()
//         //         const userID = user.id
                
//         //         console.log('User - Update User', user)
//         //         console.log('★ Update User', user.id)

//         //         const accessToken = localStorage.getItem('access_token')
                
//         //         if(!accessToken) throw 'Access token not found'

//         //         // Decode JWT token
//         //         const decodedToken = jose.decodeJwt(accessToken)

//         //         if(!decodedToken || !decodedToken.id) throw 'Invalid token or missing user ID'

//         //         const options = {
//         //             method: 'PUT',
//         //             headers: {
//         //                 'Content-Type': 'application/json',
//         //                 Authorization: accessToken
//         //             },
//         //             body: JSON.stringify({name, email})
//         //         }

//         //         // const response = await fetch(`http://localhost:8080/users/${userID}`, options)
//         //         const response = await fetch(`https://pet-grooming-appt-system-api-dev-4-tkytgwdwfa-as.a.run.app/users/${userID}`, options)
//         //         const data = response.json()

//         //         console.log(data)
//         //         console.log('Successfully update user - thrown from pinia')
//         //     } catch (error) {
//         //         console.error(error)
//         //     }
//         // },

//         async deleteUser(userID) {
//             try {
//                 const accessToken = localStorage.getItem('access_token')

//                 const options = {
//                     method: 'DELETE',
//                     headers: {
//                         Authorization: accessToken
//                     }
//                 }

//                 // const response = await fetch(`http://localhost:8080/users/${userID}`, options)
//                 const response = await fetch(`https://pet-grooming-appt-system-api-dev-4-tkytgwdwfa-as.a.run.app/users/${userID}`, options)
//                 const data = response.json()

//                 console.log(data)
//                 console.log("Successfully delete user - thrown from pinia")

//                 localStorage.removeItem('access_token')
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//     }
// })