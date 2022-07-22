<template>
  <v-container>
    <SectionHeader id="overview">Overview</SectionHeader>
    <nuxt-content :document="doc"></nuxt-content>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      options: {
        dateStyle: 'long',
        timeStyle: 'long'
      },
      start: new Date('2022-08-12T00:00:00Z'),
      end: new Date('2022-09-16T00:00:00Z'),
      doc: {}
    }
  },
  async fetch() {
    this.doc = await this.$content('text').fetch()
  }
})
</script>
