<template>
  <v-container>
    <SectionHeader>{{ title }}</SectionHeader>
    <v-row class="d-flex align-center">
      <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
        <feature-card v-bind="feature" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Features',
      start: new Date('2022-08-12T00:00:00Z'),
      end: new Date('2022-09-16T00:00:00Z'),
      options: Intl.DateTimeFormat(undefined, {
        dateStyle: 'long',
        timeStyle: 'long'
      })
    }
  },
  computed: {
    startLocaleString(): string {
      return this.dateToLocaleString(this.start)
    },
    endLocaleString(): string {
      return this.dateToLocaleString(this.end)
    },
    features(): object[] {
      return [
        {
          title: 'Task',
          text: 'Identify the underlying base model of a set of fine-tuned generative models',
          color: 'red',
          icon: 'mdi-flag-checkered'
        },
        {
          title: 'Black-box access',
          text: 'Make API calls to various models',
          color: 'purple',
          icon: 'mdi-api'
        },
        {
          title: 'Criteria',
          text: 'Limit the number of API calls',
          color: 'orange',
          icon: 'mdi-clipboard-check'
        },
        {
          title: 'Prizes',
          text: 'Prizes will be awarded to the top finishers.',
          color: 'green',
          icon: 'mdi-currency-usd'
        },
        {
          title: 'Timeline',
          text: `Competition starts on ${this.startLocaleString} and ends on ${this.endLocaleString}`,
          color: 'blue',
          icon: 'mdi-calendar'
        }
      ]
    }
  },
  methods: {
    dateToLocaleString(d: Date): string {
      return this.options.format(d)
    }
  }
})
</script>
