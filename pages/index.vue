<template>
  <div>
            <v-alert
  dismissible
  prominent
  type="info"
>
Round 2 begins on November 18!  See the <a class="grey--text text--lighten-3 font-weight-bold text-decoration-underline" href="https://www.kaggle.com/competitions/ml-model-attribution-2" target="_blank">Kaggle competition</a> for more details.

</v-alert>
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
