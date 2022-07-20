<template>
  <v-card flat>
    <div class="d-flex flex-no-wrap">
      <div class="d-flex align-center ma-3">
        <v-avatar :color="color" class="darken-2" style="opacity: 0.6">
          <v-icon dark>{{ icon }}</v-icon>
        </v-avatar>
      </div>

      <div>
        <v-card-title v-text="title" />
        <v-card-subtitle v-text="text" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: String,
    icon: String,
    text: String,
    title: String
  }
})
</script>
