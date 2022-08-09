<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  }
}
</script>

<style>
body {
  background-color: #121212;
}
</style>
