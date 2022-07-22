<template>
  <v-container>
    <SectionHeader id="form">Submission Form</SectionHeader>
    <p>
      Competition details available at
      <a href="https://mlmac.io">https://mlmac.io</a>
    </p>
    <p>This submission form closes at 11:59 ET on September 9, 2022.</p>
    <v-form ref="form" v-model="isFormValid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Participant token"
            prepend-inner-icon="mdi-key"
            hint="Your assigned participant token"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <ModelSelectionTable></ModelSelectionTable>
      </v-row>
      <v-row>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="I agree that XYZ"
          required
        ></v-checkbox>
      </v-row>
      <v-row>
        <v-btn
          :disabled="!isFormValid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Clear </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isFormValid: false,
      email: '',
      emailRules: [
        // (v) => !!v || 'E-mail is required',
        // (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      firstname: '',
      nameRules: [
        // (v) => !!v || 'Token is required',
        // (v) => v.length != 10 || 'Your token should be 10 numbers'
      ]
    }
  },
  methods: {
    validate() {
      // Disable type check
      const form: any = this.$refs.form
      form.validate()
    },
    reset() {
      // Disable type check
      const form: any = this.$refs.form
      form.reset()
    }
  }
})
</script>
