<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <nuxt-link to="/">MLMAC</nuxt-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.name"
        text
        nuxt
        :to="link.route"
        >{{ link.name }}</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app bottom clipped>
      <template #prepend>
        <v-list-item>
          <v-list-item-content>
            <v-btn><v-icon left> mdi-github </v-icon>Login</v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon dark> mdi-account-circle </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Username</v-list-item-title>
            <v-list-item-subtitle>Status</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense nav>
        <div v-for="link in links" :key="link.route">
          <v-list-group
            v-if="'items' in link && link.items.length > 0"
            :value="true">
            <template #activator>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </template>

            <v-list dense nav>
              <v-list-item
                v-for="(toc, i) in link.items"
                :key="i"
                nuxt
                :to="`/#${toc.id}`">
                <v-list-item-content>
                  <v-list-item-title>{{ toc.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>

          <v-list-item v-else nuxt :to="link.route">
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          name: 'Overview',
          route: '/#overview',
          items: []
        },
        {
          name: 'Competition Details',
          route: '/#details',
          items: []
        },
        // {
        //   name: 'Submission',
        //   route: '/submit',
        //   items: []
        // },
        // {
        //   name: 'Results',
        //   route: '/results',
        //   items: []
        // },
        {
          name: 'Organizers',
          route: '/#organizers',
          items: []
        }
      ],
      drawer: false,
      details: {}
    }
  },
  async fetch() {
    const { toc } = await this.$content('competition-details')
      .only('toc')
      .fetch()
    // Details
    this.links[1].items = toc
  }
})
</script>

<style scoped>
.v-application a {
  color: unset;
}
</style>
