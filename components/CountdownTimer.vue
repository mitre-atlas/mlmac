<template>
  <div class="text-center" align="center" justify="center">
    <v-stepper v-show="$vuetify.breakpoint.mdAndUp" alt-labels flat>
      <v-stepper-header>
        <v-stepper-step step="1" complete-icon="mdi-play" complete>
          Challenge start
          <small class="text-caption">{{
            new Date('2022-08-12T00:00:00Z').toUTCString().substring(0, 17)
          }}</small>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          step="2"
          complete-icon="mdi-checkbox-marked-outline"
          complete>
          Initial results
          <small class="text-caption">{{
            new Date('2022-08-26T00:00:00Z').toUTCString().substring(0, 17)
          }}</small>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="3" complete-icon="mdi-flag-checkered" complete>
          Challenge finish
          <small class="text-caption">{{
            new Date('2022-09-16T00:00:00Z').toUTCString().substring(0, 17)
          }}</small>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="4" complete-icon="mdi-medal-outline" complete>
          Final results
          <small class="text-caption">{{
            new Date('2022-10-14T00:00:00Z').toUTCString().substring(0, 17)
          }}</small>
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <TimelineSteps v-show="$vuetify.breakpoint.smAndDown"></TimelineSteps>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  }
})
</script>

<style scoped>
.v-stepper {
  background: rgba(48, 48, 48, 0.9);
}
</style>
