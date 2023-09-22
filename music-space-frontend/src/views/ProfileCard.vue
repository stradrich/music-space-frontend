  <script>
  import Button from '../components/Button.vue';
    export default {
      data: () => ({
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
      }),
  
      methods: {
        async validate () {
          const { valid } = await this.$refs.form.validate()
  
          if (valid) alert('Form is valid')
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
    }
  </script>


<template>
    <div class="flex">
    <svg class="mt-2 mr-5" style="height: 5rem; width: 5rem;" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
    </svg>

    <v-sheet class="mt-2 ml-16" width="300">
  
      
      <v-form ref="form">
        <v-text-field
        v-model="username"
        label="username"
        :rules="usernameRules"
      ></v-text-field>


      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <v-select
        v-model="major"
        :items="majorOptions"
        label="What is your major?"
        required
        :rules="[v => !!v || 'Major is required']"
      ></v-select>

      <v-select
        v-model="role"
        :items="roleOptions"
        label="Signing up as space provider or space user?"
        required
        :rules="[v => !!v || 'Role is required']"
      ></v-select>
  
        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox> -->
  
        <div class="d-flex flex-column">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="validate"
          >
            Validate Profile
          </v-btn>
  
          <v-btn
            color="warning"
            class="mt-4"
            block
            @click="resetValidation"
          >
            Edit Profile
          </v-btn>

          <v-btn
            color="error"
            class="mt-4"
            block
            @click="reset"
          >
            Delete Account
          </v-btn>
        </div>
    
      </v-form>
    
    </v-sheet>
</div>
  </template>



<!--  
<template>
        <div class="bg-white shadow-md rounded-md border p-4 mb-15">
        
       
        
        <div class="mx-aut">
            <div class="flex"><p>User Name:</p><input type="text"></div>
            <div class="flex"><p>Email:</p><input type="text"></div>
            <div class="flex"><p>First Name:</p><input type="text"></div>
            <div class="flex"><p>Last Name:</p><input type="text"></div>
            <div class="flex"><p>Password:</p><input type="text"></div>
            <div class="flex"><p>Major:</p><input type="text"></div>
            
        </div>
        <div class="flex justify-center">
            <RouterLink to="/"><Button text="Update Profile" class="mt-5 mb-2"/></RouterLink>
           
        </div>
        <div class="flex justify-center">
            <RouterLink to="/"><Button text="Delete Profile" class="mt-2 mb-2"/></RouterLink>
        
        </div>
            
    </div> 
</template>
-->


