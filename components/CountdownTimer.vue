<template>
  <div class="text-center" align="center" justify="center">
    <!-- <v-row>
     Starts at {{ startLocaleString }} and ends on
      {{ endLocaleString }}
    </v-row> -->
    <v-row>
      <div v-for="c in countdown" :key="c.name" class="text-center">
        <v-sheet color="rgba(0,0,0,0)" class="mx-5">
          <div class="text-h4">{{ c.value }}</div>
          <div class="text-overline">{{ c.name }}</div>
        </v-sheet>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      options: {
        dateStyle: 'long',
        timeStyle: 'long'
      },
      start: new Date('2022-08-12T00:00:00Z'),
      end: new Date('2022-09-16T00:00:00Z'),
      diff: new Date(),
      interval: -1
    }
  },
  computed: {
    countdown(): object[] {
      return [
        {
          name: 'days',
          value: this.diff.getUTCDate()
        },
        {
          name: 'hours',
          value: this.diff.getUTCHours()
        },
        {
          name: 'minutes',
          value: this.diff.getUTCMinutes()
        },
        {
          name: 'seconds',
          value: this.diff.getUTCSeconds()
        }
      ]
    }
  },
  mounted() {
    this.setTimerInterval()
  },
  beforeDestroy() {
    clearInterval(Number(this.interval))
  },
  methods: {
    setTimerInterval() {
      this.interval = window.setInterval(() => {
        this.diff = new Date(this.start.getTime() - Date.now())
      }, 1000)
    }
  }
})
</script>
