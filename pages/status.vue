<template>
  <v-container>
    <Status></Status>
  </v-container>
</template>

<script>
export default {
  name: 'StatusPage',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.$store.getters.isUserAuthenticated) {
        alert(
          'Please login to view this page. Click OK to return to the homepage.'
        )
        vm.$router.push('/')
      }
    })
  }
}
</script>
