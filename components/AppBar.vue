<template>
  <div>
    <!-- App bar -->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <nuxt-link to="/">MLMAC</nuxt-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <div v-show="$vuetify.breakpoint.mdAndUp">
        <!-- Default buttons -->
        <v-btn
          v-for="link in importantBarLinks"
          :key="link.name"
          text
          :nuxt="'route' in link"
          :to="'route' in link ? link.route : false"
          :href="'href' in link ? link.href : false"
          :target="'href' in link ? '_blank' : false">
          <v-icon v-if="'icon' in link" left>
            {{ link.icon }}
          </v-icon>
          {{ link.name }}
        </v-btn>
      </div>

      <!-- Buttons once logged in -->
      <div v-show="isUserAuthenticated">

        <!-- <v-btn
          v-for="link in authLinks"
          :key="link.name"
          :nuxt="'route' in link"
          :to="'route' in link ? link.route : false"
          :href="'href' in link ? link.href : false"
          :target="'href' in link ? '_blank' : false">
          <v-icon v-if="'icon' in link" left>
            {{ link.icon }}
          </v-icon>
          {{ link.name }}
        </v-btn> -->

        <!-- Help dialog -->
        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn icon dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-help-circle-outline </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5"> Questions? </v-card-title>

            <v-card-text>
              Join the
              <a
                class="blue--text"
                href="https://join.slack.com/t/mitreatlas/shared_invite/zt-1c84p6wkh-ghNhhnPIFML8e33LcSA18g"
                >#mlmac channel at mitreatlas.slack.com</a
              >
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

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
            <v-list-item nuxt to="/status">
              <v-list-item-icon>
                <v-icon>mdi-chart-box-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ githubInfo.username }}'s stats
              </v-list-item-title>
            </v-list-item>
            <!-- <v-list-item nuxt to="/submit">
              <v-list-item-title> Submit answers </v-list-item-title>
            </v-list-item> -->
            <v-divider></v-divider>
            <v-list-item nuxt to="/" @click="$store.dispatch('logout')">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn v-show="!isUserAuthenticated" color="primary" @click="login">
        <v-icon left> mdi-github </v-icon>
        Register / Login
      </v-btn>
    </v-app-bar>

    <!-- Side navigation drawer -->
    <v-navigation-drawer v-model="drawer" app bottom clipped>
      <!-- User details -->
      <!-- <template #prepend>
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
            <v-img dark :src="githubInfo.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> {{ githubInfo.username }}</v-list-item-title>

            <span>
              <span class="text-body-1">API Key:</span>
              <code>{{ apiKey }}</code>
            </span>
            <v-icon right @click="copyText"> mdi-content-copy </v-icon>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider> -->

      <v-list nav>
        <v-subheader> Challenge Info </v-subheader>
        <!-- Default links, including details headers -->
        <div v-for="link in links" :key="link.route">
          <v-list-group
            v-if="'items' in link && link.items.length > 0"
            :value="!$vuetify.breakpoint.mobile">
            <template #activator>
              <!-- <v-list-item> -->
              <v-list-item-icon v-if="'icon' in link">
                <v-icon>
                  {{ link.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
              <!-- </v-list-item> -->
            </template>

            <v-list nav dense>
              <v-list-item
                v-for="(toc, i) in link.items"
                :key="i"
                nuxt
                :to="`/#${toc.id}`">
                <v-list-item-content>
                  <v-list-item-subtitle class="ml-10">{{
                    toc.text
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>

          <v-list-item v-else nuxt :to="link.route">
            <v-list-item-icon v-if="'icon' in link">
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- Links that are also in the bar -->
        <div>
          <v-divider></v-divider>

          <v-subheader> Resources </v-subheader>

          <v-list-item
            v-for="link in barLinks"
            :key="link.icon"
            :nuxt="'route' in link"
            :to="'route' in link ? link.route : false"
            :href="'href' in link ? link.href : false"
            :target="'href' in link ? '_blank' : false">
            <v-list-item-icon v-if="'icon' in link">
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            href="https://join.slack.com/t/mitreatlas/shared_invite/zt-1c84p6wkh-ghNhhnPIFML8e33LcSA18g">
            <v-list-item-icon>
              <v-icon>mdi-slack</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>#mlmac on Slack</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- Links after login, also in bar menu -->
        <div v-show="isUserAuthenticated">
          <v-divider></v-divider>

          <v-subheader> Actions </v-subheader>

          <v-list-item
            v-for="link in authLinks"
            :key="link.route"
            :nuxt="'route' in link"
            :to="'route' in link ? link.route : undefined"
            :href="'href' in link ? link.href : undefined"
            :target="'href' in link ? '_blank' : undefined">
            <v-list-item-icon v-if="'icon' in link">
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>

      <!-- Footer of nav -->
      <!-- <template #append>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item nuxt to="/#organizers">
            <v-list-item-icon>
              <v-icon> mdi-account-multiple-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Organizers</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/terms">
            <v-list-item-icon>
              <v-icon> mdi-file-document-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Terms of Service</v-list-item-title>
          </v-list-item>
        </v-list>
      </template> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          name: 'Overview',
          route: '/#overview',
          icon: 'mdi-earth',
          items: []
        },
        {
          name: 'Details',
          route: '/#details',
          icon: 'mdi-format-list-bulleted',
          items: []
        },

        {
          name: 'Organizers',
          route: '/#organizers',
          icon: 'mdi-account-multiple-outline',
          items: []
        },
        {
          name: 'Terms of Service',
          route: '/terms',
          icon: 'mdi-file-document-outline',
          items: []
        }
      ],
      barLinks: [
        {
          name: 'MLMAC on Kaggle',
          href: 'https://www.kaggle.com/competitions/ml-model-attribution-2',
          icon: 'mdi-open-in-new'
        },
        {
          name: 'Starter Kit',
          href: 'https://github.com/mitre-atlas/mlmac-starter-kit/blob/main/mlmac_starter_kit.ipynb',
          icon: 'mdi-language-python',

          items: []
        },
        {
          name: 'API Docs',
          route: '/api',
          icon: 'mdi-api',
          items: []
        },

        {
          name: 'Results',
          route: '/results',
          icon: 'mdi-checkbox-marked-outline',
          items: []
        }
      ],
      authLinks: [
        {
          name: 'View Query Stats',
          route: '/status',
          icon: 'mdi-chart-box-outline',
          items: []
        },
        {
          name: 'Submit Answers',
          route: '/submit',
          icon: 'mdi-send',
          items: []
        }
      ],
      drawer: false,
      details: {},
      dialog: false
    }
  },
  async fetch() {
    const { toc } = await this.$content('competition-details')
      .only('toc')
      .fetch()
    // Details
    this.links[1].items = toc
  },
  computed: {
    ...mapGetters([
      'apiKey',
      'isUserAuthenticated',
      'githubInfo',
      'totalQueries'
    ]),
    importantBarLinks () {
      // Just the first, Kaggle
      return [this.barLinks[0]]
    }
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
