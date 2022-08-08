<template></template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isUserAuthenticated', 'githubInfo', 'totalQueries'])
  }
})
</script>
