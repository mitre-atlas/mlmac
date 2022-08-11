<template>
  <v-container
    fluid
    fill-height
    class="custom-img-container"
    style="height: 100vh">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <div class="text-h1 font-weight-medium mx-10">{{ title }}</div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <CountdownTimer></CountdownTimer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      e1: 1,
      title: 'Machine Learning Model Attribution Challenge',
      subtitle: ''
    }
  },
  computed: {
    tickLabels() {
      const labels = []
      for (const [key, value] of Object.entries(this.timeline)) {
        labels.push(`${key} <br> 123`)
      }
      return labels
    },
    tickValues() {
      return Object.values(this.timeline)
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
.v-stepper {
  background: rgba(48, 48, 48, 0.9);
}
</style>
