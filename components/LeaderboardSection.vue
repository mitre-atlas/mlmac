<template>
  <v-container>
    <SectionHeader id="leaderboard">{{ title }}</SectionHeader>

    <LeaderboardTable></LeaderboardTable>

    <div class="text-caption">{{ lastUpdated }}</div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Results',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
