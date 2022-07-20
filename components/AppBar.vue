<template>
  <v-app-bar app>
    <v-app-bar-title> MLMAC </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.name"
      text
      @click="$vuetify.goTo(`#${link.id}`)"
      >{{ link.name }}</v-btn
    >
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          name: 'Overview',
          id: 'overview'
        },
        {
          name: 'Rules',
          id: 'rules'
        },
        {
          name: 'Submission',
          id: 'form'
        },
        {
          name: 'Leaderboard',
          id: 'leaderboard'
        },
        {
          name: 'Organizers',
          id: 'organizers'
        }
      ]
    }
  }
})
</script>
