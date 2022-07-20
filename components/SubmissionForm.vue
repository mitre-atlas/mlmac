<template>
  <v-container>
    <SectionHeader>Submission Form</SectionHeader>
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
        <v-data-table
          :headers="headers"
          :items="items"
          hide-default-footer
          caption="What is the correct model pairing?"
        >
          <template v-for="i in modelNumberChoices" #[`item.${i}`]="{ item }">
            <v-simple-checkbox v-model="item[i]"></v-simple-checkbox>
          </template>
        </v-data-table>
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
      ],
      modelNames: [
        'GPT-2',
        'DistilGPT-2',
        'MiniLM',
        'XLNet',
        'GPT-J',
        'GPT Neo',
        'Bloom 350m',
        'Bloom 2b5',
        'GPT-2 XL',
        'None'
      ],
      numChoices: 12
    }
  },
  computed: {
    modelNumberChoices() {
      return Array.from(Array(this.numChoices)).map((e, i) => i + 1)
    },
    headers() {
      const headerItems = [
        {
          text: 'Model Name',
          value: 'name'
        }
      ]
      for (let i = 1; i <= this.numChoices; i++) {
        const headerItem = {
          text: i,
          value: i
        }
        headerItems.push(headerItem)
      }
      return headerItems
    },
    items() {
      return this.modelNames.map((m) => {
        const item = {
          name: m
        }

        for (let i = 1; i <= this.numChoices; i++) {
          item[`${i}`] = false
        }
        return item
      })
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
})
</script>
