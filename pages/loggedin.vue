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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Logged In',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
