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
      <CountdownTimer></CountdownTimer>
    </v-row>
    <v-row v-if="!isUserAuthenticated" align="center" justify="center">
      <v-btn rounded x-large color="primary" @click="login">Login</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      title: 'Machine Learning Model Attribution Challenge',
      subtitle: ''
    }
  },
  computed: {
    ...mapGetters(['isUserAuthenticated'])
  },
  methods: {
    login() {
      this.$store
        .dispatch('login')
        .then(() => {
          this.$store.dispatch('getGitHubInfo')
        })
        .catch(() => {
          window.location.href = 'https://api.mlmac.io:8080/github/auth'
        })
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
