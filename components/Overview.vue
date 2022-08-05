<template>
  <v-container>
    <SectionHeader id="overview">Overview</SectionHeader>
    <nuxt-content
      class="mx-auto prose dark:prose-invert"
      :document="overview"></nuxt-content>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      overview: {}
    }
  },
  async fetch() {
    this.overview = await this.$content('overview').fetch()
  },
  mounted() {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }
})
</script>
