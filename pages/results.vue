<template>
  <v-container>
    <SectionHeader id="leaderboard">{{ title }}</SectionHeader>

    <!-- <LeaderboardTable></LeaderboardTable> -->
    <!-- <div class="text-caption">{{ lastUpdated }}</div> -->

        <div class="text-center">
      Competition is ongoing - see the
      <a
        href="https://www.kaggle.com/competitions/ml-model-attribution-2/leaderboard"
        target="_blank"
        >
        current Kaggle Leaderboard
      </a>
    </div>

  </v-container>
</template>

<script>
export default {
  name: 'ResultsPage',
  data() {
    return {
      title: 'Results',
      lastUpdated: `Last updated at ${new Date(
        '2022-09-17T16:00:00Z'
      ).toLocaleString()}`
    }
  }
}
</script>
