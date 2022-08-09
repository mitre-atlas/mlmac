<template>
  <v-card>
    <!-- <v-card-title>
      <v-avatar size="36">
        <v-img dark :src="githubInfo.avatarUrl"></v-img>
      </v-avatar>
      <span class="text-h6">{{ githubInfo.username }}</span>

      <v-spacer></v-spacer>
    </v-card-title> -->

    <v-card-text class="text-center">
      <div class="text-h4 font-weight-thin">
        {{ totalQueries }} total queries
      </div>
    </v-card-text>

    <v-card-text>
      <!-- <div class="text-body-1">Total queries: {{ totalQueries }}</div> -->

      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline type="bar" :value="value" :labels="labels" label-size="5">
        </v-sparkline>
      </v-sheet>
      <span class="text-caption grey--text font-weight-light">{{
        `Last updated at ${lastUpdatedDate}`
      }}</span>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="refresh">
        <v-icon left> mdi-refresh </v-icon>
        Refresh stats
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text @click="show = !show">
        <span>Show query data</span>
        <v-icon right>{{
          show ? 'mdi-chevron-up' : 'mdi-chevron-down'
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <pre>{{ queries }}</pre>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Status',
  data() {
    return {
      numModels: 12,
      show: false,
      lastUpdatedDate: new Date().toLocaleString()
    }
  },
  mounted() {
    this.$store.dispatch('updateStatus')
  },
  computed: {
    ...mapGetters(['apiKey', 'githubInfo', 'queries', 'totalQueries']),
    value() {
      const arr = Array(this.numModels).fill(0)
      for (const [key, value] of Object.entries(this.queries)) {
        // Model index
        const i = parseInt(key)
        // Set to the int value
        arr[i] = value
      }
      return arr
    },
    labels() {
      return [...Array(this.numModels).keys()].map((k) => k.toString())
    }
  },
  methods: {
    refresh() {
      this.$store.dispatch('updateStatus')
      this.lastUpdatedDate = new Date().toLocaleString()
    },
    copyText() {
      navigator.clipboard.writeText(this.apiKey)
    }
  }
}
</script>
