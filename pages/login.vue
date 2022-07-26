<template>
    <div v-html="rawHtml"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'bare',
  props: {
    rawHtml: String
  },
  data() {
    return {
      title: 'Login',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
