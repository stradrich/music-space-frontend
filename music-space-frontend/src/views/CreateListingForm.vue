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
     <img class="ml-7 mb-5" width="100" height="100" src="/src/assets/IMG_0912.JPG" alt="space" loading="lazy"/> 
    <div>
        CREATE LISTING PAGE (for space provider)
    </div>
        
    <v-sheet class="mt-2" width="300">
    
        
    <v-form ref="form">
        <v-text-field
        v-model="username"
        label="Space provider's name (Company):"

    ></v-text-field>

    <v-text-field
        v-model="description"
        label="Description"
    ></v-text-field>

    <!-- GOOGLE MAP API? -->
    <v-text-field
        v-model="location"
        label="Location"
    ></v-text-field>

    <v-select
        v-model="hourlyRate"
        label="Rate per hour"
    ></v-select>


    <div>
        <v-file-input
        chips
        multiple
        label="Upload listing photo"
        ></v-file-input>
        <v-file-input
        small-chips
        multiple
        label="Upload listing photo"
        ></v-file-input>
    </div>



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
            Create Listing
        </v-btn>

        <v-btn
            color="warning"
            class="mt-4"
            block
            @click="resetValidation"
        >
        Clear Form
        </v-btn>

        <v-btn
            color="error"
            class="mt-4"
            block
            @click="reset"
        >
            Cancel 
        </v-btn>
        </div>

    </v-form>

    </v-sheet>
  
</template>


