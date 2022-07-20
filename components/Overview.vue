<template></template>

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
      end: new Date('2022-09-16T00:00:00Z')
    }
  }
})
</script>
