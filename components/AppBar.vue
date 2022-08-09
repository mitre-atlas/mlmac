<template>
  <div>
    <!-- App bar -->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <nuxt-link to="/">MLMAC</nuxt-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Default buttons -->
      <v-btn v-for="link in links" :key="link.name" text nuxt :to="link.route">
        {{ link.name }}
      </v-btn>

      <!-- Buttons once logged in -->
      <div v-show="isUserAuthenticated">
        <v-btn
          v-for="link in authLinks"
          :key="link.name"
          text
          nuxt
          :to="link.route">
          {{ link.name }}
        </v-btn>

        <v-menu bottom offset-y>
          <template #activator="{ on, attrs }">
            <v-btn dark text large v-bind="attrs" v-on="on">
              <v-avatar size="36">
                <v-img dark :src="githubInfo.avatarUrl"></v-img>
              </v-avatar>
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title
                >Logged in as {{ githubInfo.username }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <span>
                  <span class="text-body-1">API Key:</span>
                  <code>{{ apiKey }}</code>
                </span>
                <v-icon right @click="copyText"> mdi-content-copy </v-icon>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-btn block @click="$store.dispatch('logout')"> Logout </v-btn>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <!-- Side navigation drawer -->
    <v-navigation-drawer v-model="drawer" app bottom clipped>
      <!-- User details -->
      <template #prepend>
        <v-list-item v-if="!isUserAuthenticated">
          <v-list-item-content>
            <v-btn @click="login">
              <v-icon left> mdi-github </v-icon>
              Login
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else two-line>
          <v-list-item-avatar>
            <!-- <v-icon dark> mdi-account-circle </v-icon> -->
            <v-img dark :src="githubInfo.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> {{ githubInfo.username }}</v-list-item-title>
            <!-- <v-list-item-subtitle
              >{{ totalQueries }} total queries</v-list-item-subtitle
            > -->
            <span>
              <span class="text-body-1">API Key:</span>
              <code>{{ apiKey }}</code>
            </span>
            <v-icon right @click="copyText"> mdi-content-copy </v-icon>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list nav>
        <!-- Default links, including details headers -->
        <div v-for="link in links" :key="link.route">
          <v-list-group
            v-if="'items' in link && link.items.length > 0"
            :value="true">
            <template #activator>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </template>

            <v-list nav>
              <v-list-item
                v-for="(toc, i) in link.items"
                :key="i"
                nuxt
                :to="`/#${toc.id}`">
                <v-list-item-content>
                  <v-list-item-title class="ml-5">{{
                    toc.text
                  }}</v-list-item-title>
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

        <!-- Links after login -->
        <div v-show="isUserAuthenticated">
          <v-list-item
            v-for="link in authLinks"
            :key="link.route"
            nuxt
            :to="link.route">
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>

      <!-- Footer of nav -->
      <template #append>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item nuxt to="/#organizers">
            <v-list-item-title>Organizers</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/terms">
            <v-list-item-title>Terms of Service</v-list-item-title>
          </v-list-item>
          <v-btn
            v-show="isUserAuthenticated"
            block
            @click="$store.dispatch('logout')">
            Logout
          </v-btn>
        </v-list>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

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
        {
          name: 'API Docs',
          route: '/api',
          items: []
        },
        {
          name: 'Results',
          route: '/results',
          items: []
        }
        // {
        //   name: 'Organizers',
        //   route: '/#organizers',
        //   items: []
        // }
      ],
      authLinks: [
        {
          name: 'Submit Answers',
          route: '/submit',
          items: []
        },
        {
          name: 'View Query Stats',
          route: '/status',
          items: []
        }
      ],
      drawer: false,
      details: {}
    }
  },
  async fetch(): Promise<any> {
    const { toc } = await this.$content('competition-details')
      .only('toc')
      .fetch()
    // Details
    this.links[1].items = toc
  },
  computed: {
    ...mapGetters(['isUserAuthenticated', 'githubInfo', 'totalQueries'])
  },
  methods: {
    login() {
      this.$store
        .dispatch('login')
        .then(() => {
          this.$store.dispatch('getGitHubInfo')
          this.$store.dispatch('updateStatus')
        })
        .catch(() => {
          window.location.href = 'https://api.mlmac.io:8080/github/auth'
        })
    }
  }
})
</script>

<style scoped>
.v-application a {
  color: unset;
}
</style>
