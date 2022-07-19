<template>
  <div>
    {{ data }}
    <RulesSection></RulesSection>
    <LeaderboardSection></LeaderboardSection>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const data = await $content('text').fetch()
    return { data }
  }
}
</script>
