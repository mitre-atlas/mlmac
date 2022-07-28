<template>
  <v-container>
    <SectionHeader id="details">Competition Details</SectionHeader>
    <nuxt-content
      class="mx-auto prose dark:prose-invert"
      :document="details"></nuxt-content>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      details: {}
    }
  },
  async fetch() {
    this.details = await this.$content('competition-details').fetch()
  }
})
</script>
