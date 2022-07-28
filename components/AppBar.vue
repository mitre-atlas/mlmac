<template>
  <v-app-bar app>
    <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">
      MLMAC
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.name"
      text
      :nuxt="'route' in link"
      :to="'route' in link ? link.route : ''"
      @click="'id' in link && $vuetify.goTo(`#${link.id}`)"
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
          route: 'submit'
        },
        {
          name: 'Results',
          route: 'results'
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
