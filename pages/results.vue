<template>
  <v-container>
    <SectionHeader id="leaderboard">{{ title }}</SectionHeader>

    <div class="mb-10">Initial baseline results from the MLMAC team.</div>

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
        '2022-08-12T00:00:00Z'
      ).toLocaleString()}`
    }
  }
}
</script>
