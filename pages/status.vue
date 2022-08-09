<template>
  <v-container>
    <Status></Status>
  </v-container>
</template>

<script>
export default {
  name: 'StatusPage',
  middleware: 'auth',
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
