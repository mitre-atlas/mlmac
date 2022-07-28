<template>
  <div>Login</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Login',
      lastUpdated: `Last updated at ${new Date().toLocaleString()}`
    }
  }
})
</script>
