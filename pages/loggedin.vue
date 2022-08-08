<template>
  <div>
    <div class="text-h5 ma-10 text-center">
      You are now registered with the MLMAC API.
    </div>
    <div class="text-h5 ma-10 text-center">
      Take note of your API token:
      <span class="font-weight-bold purple--text text--lighten-2">{{
        $route.query.user
      }}</span>
    </div>
    <div class="text-h5 ma-10 text-center">
      Visit the <nuxt-link to="/api">API docs</nuxt-link> and questions can be
      posted to <a href="https://mitreatlas.slack.com">Slack</a>.
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Logged In',
      cookieName: 'mlmac-token'
    }
  },
  mounted() {
    this.$store
      .dispatch('login', this.$route.query.user)
      .then(() => {
        this.$store.dispatch('getGitHubInfo')
        this.$store.dispatch('updateStatus')
      })
      .catch(() => {
        window.location.href = 'https://api.mlmac.io:8080/github/auth'
      })
  }
})
</script>
