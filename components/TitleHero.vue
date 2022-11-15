<template>
  <v-container
    fluid
    fill-height
    class="custom-img-container"
    style="height: 100vh">

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <div :class="titleStyle">{{ title }}</div>
      </v-col>
    </v-row>
    <!-- <v-row align="center" justify="center">
      <v-col>
        <v-btn
          href="https://github.com/mitre-atlas/mlmac-starter-kit/blob/main/mlmac_starter_kit.ipynb"
          target="_blank">
          <v-icon left> mdi-language-python </v-icon>
          Getting Started .ipynb</v-btn
        >
      </v-col>
    </v-row> -->
    <v-row align="center" justify="center">
      <v-col>
        <CountdownTimer></CountdownTimer>
        <!-- <div class="text-center text-h5">
        Round 2 coming soon!
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Machine Learning Model Attribution Challenge',
      subtitle: ''
    }
  },
  computed: {
    titleStyle() {
      const cls = 'font-weight-medium mx-10'
      if (this.$vuetify.breakpoint.mobile) {
        return `text-h2 ${cls}`
      }
      return `text-h1 ${cls}`
    }
  }
})
</script>

<style scoped>
.full-height {
  height: 100%;
}
.custom-img-container {
  background: linear-gradient(
      0deg,
      rgba(53, 53, 53, 0.25) 0%,
      rgba(17, 4, 4, 0.5) 50%,
      rgba(61, 61, 61, 0.25) 100%
    ),
    url('~/assets/imgs/billy-huynh-W8KTS-mhFUE-unsplash.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
