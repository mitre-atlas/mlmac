<template>
  <v-container>
    <SectionHeader>{{ title }}</SectionHeader>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Evaluation',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
