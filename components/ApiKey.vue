<template>
  <span>
    <span class="text-body-1">API Key:</span>
    <code>{{ apiKey }}</code>
    <v-icon right @click="copyText"> mdi-content-copy </v-icon>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ApiKey',
  computed: {
    ...mapGetters(['apiKey'])
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.apiKey)
    }
  }
}
</script>
