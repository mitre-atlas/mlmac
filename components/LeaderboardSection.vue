<template>
  <v-container>
    <SectionHeader>{{ title }}</SectionHeader>

    <LeaderboardTable></LeaderboardTable>

    <div class="text-caption">{{ lastUpdated }}</div>
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
