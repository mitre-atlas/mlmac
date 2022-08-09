<template>
  <div>
    <TitleHero></TitleHero>
    <Overview></Overview>
    <CompetitionDetails></CompetitionDetails>
    <!-- <Features></Features>
    <RulesSection></RulesSection> -->

    <Credits />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const data = await $content('text').fetch()
    return { data }
  },
  head: {
    meta: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://mlmac.io'
      }
    ]
  }
}
</script>
