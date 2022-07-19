<template>
  <div>
    {{ data }}
    <Leaderboard></Leaderboard>
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
