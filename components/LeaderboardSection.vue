<template>
  <v-container style="height: 50vh">
    <div class="text-h2">{{ title }}</div>

    <div class="text-caption">{{ lastUpdated }}</div>

    <LeaderboardTable></LeaderboardTable>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Leaderboard',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
