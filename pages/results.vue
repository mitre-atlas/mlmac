<template>
  <v-container>
    <SectionHeader id="leaderboard">{{ title }}</SectionHeader>

    <LeaderboardTable></LeaderboardTable>

    <div class="text-caption">{{ lastUpdated }}</div>
  </v-container>
</template>

<script>
export default {
  name: 'ResultsPage',
  data() {
    return {
      title: 'Results',
      lastUpdated: `Last updated at ${new Date(
        '2022-08-30T15:00:00Z'
      ).toLocaleString()}`
    }
  }
}
</script>
