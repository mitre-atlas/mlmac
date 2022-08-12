<template>
  <div>
    <div v-if="isApiKeyValid">
      <div class="text-h5 ma-10 text-center">
        You are now logged in with the MLMAC API.
      </div>
      <div class="text-h5 ma-10 text-center">
        Take note of your API token:
        <span class="font-weight-bold purple--text text--lighten-2">{{
          $route.query.user
        }}</span>
      </div>
      <div class="text-h5 ma-10 text-center">
        Visit the
        <a
          href="https://github.com/mitre-atlas/mlmac-starter-kit/blob/main/mlmac_starter_kit.ipynb"
          target="_blank"
          >Starter Jupyter notebook</a
        >, <nuxt-link to="/api">API docs</nuxt-link>, see your
        <nuxt-link to="/status">query stats</nuxt-link>, and questions can be
        posted to <a href="https://mitreatlas.slack.com">Slack</a>.
      </div>
    </div>
    <div v-else>
      <v-alert text prominent type="warning">
        API key
        <span class="font-weight-bold purple--text text--lighten-2">
          {{ $route.query.user }}</span
        >
        is not recognized - please reach out to MLMAC administrators on the
        <a
          class="blue--text"
          href="https://join.slack.com/t/mitreatlas/shared_invite/zt-1c84p6wkh-ghNhhnPIFML8e33LcSA18g"
          >#mlmac channel at mitreatlas.slack.com</a
        >
      </v-alert>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LoggedinPage',
  data() {
    return {
      title: 'Logged In',
      cookieName: 'mlmac-token',
      isApiKeyValid: false
    }
  },
  mounted() {
    // Check if this API key is valid
    const token = this.$route.query.user
    if (token) {
      this.$http.setToken(token, 'Bearer')
      this.$http
        .get('https://api.mlmac.io:8080/status')
        .then((resp) => {
          if (resp.status === 200) {
            // Pass
            this.isApiKeyValid = true
            this.login(token)
          }
        })
        .catch((e) => {
          // Unauthorized
        })
    }
  },
  methods: {
    login(token) {
      this.$store
        .dispatch('login', this.$route.query.user)
        .then((m) => {
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
