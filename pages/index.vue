<template>
  <div>
    <TitleHero></TitleHero>
    <Overview></Overview>
    <Features></Features>

    <RulesSection></RulesSection>
    <SubmissionForm></SubmissionForm>
    <LeaderboardSection></LeaderboardSection>
    <Credits />
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
