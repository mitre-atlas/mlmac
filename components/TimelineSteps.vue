<template>
  <v-timeline align-top>
    <v-timeline-item icon="mdi-play" small right fill-dot>
      <template #opposite> Challenge start </template>
      <span class="text-caption">{{
        new Date('2022-08-12T00:00:00Z').toUTCString().substring(0, 17)
      }}</span>
    </v-timeline-item>

    <v-timeline-item icon="mdi-checkbox-marked-outline" small right fill-dot>
      <template #opposite> Initial results </template>

      <span class="text-caption">{{
        new Date('2022-08-26T00:00:00Z').toUTCString().substring(0, 17)
      }}</span>
    </v-timeline-item>

    <v-timeline-item icon="mdi-flag-checkered" small right fill-dot>
      <template #opposite> Challenge finish </template>
      <span class="text-caption">{{
        new Date('2022-09-16T00:00:00Z').toUTCString().substring(0, 17)
      }}</span>
    </v-timeline-item>

    <v-timeline-item icon="mdi-medal-outline" small right fill-dot>
      <template #opposite> Final results </template>
      <span class="text-caption">{{
        new Date('2022-10-14T00:00:00Z').toUTCString().substring(0, 17)
      }}</span>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
.v-timeline {
  background: rgba(48, 48, 48, 0.5);
}
</style>
