<template>
  <v-data-table
    dark
    :headers="headers"
    :items="items"
    show-expand
    item-key="name"
    :search="search"
  >
    <!--
    <template #top>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search by name"
        single-line
        hide-details
      ></v-text-field>
    </template>
    -->
    <template #item.rank="{ item }">
      {{ item.rank }}
      <span v-if="item.rank === 1">
        <v-icon right small> mdi-crown </v-icon>
      </span>
    </template>
    <template #item.lastSubmission="{ item }">
      {{
        item.lastSubmission.toLocaleString(undefined, {
          dateStyle: 'short',
          timeStyle: 'short'
        })
      }}
    </template>
    <template #item.score="{ item }">
      {{ item.numCorrect }} / {{ numModels }}
    </template>
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-sparkline
          auto-draw
          smooth
          :value="item.sparklineValues"
          width="500"
          :color="item.color"
        ></v-sparkline>
      </td>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      names: [
        'Purple Parrots',
        'Blue Barracudas',
        'Orange Iguanas',
        'Red Jaguars',
        'Silver Snakes',
        'Green Monkeys'
      ],
      headers: [
        {
          text: 'Rank',
          value: 'rank',
          filterable: false
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Score',
          value: 'score',
          filterable: false
        },
        {
          text: 'Queries',
          value: 'queries',
          filterable: false
        },
        {
          text: 'Last submission',
          value: 'lastSubmission',
          filterable: false
        },
        {
          text: 'Show queries',
          value: 'data-table-expand',
          filterable: false
        }
      ],
      numModels: 12,
      end: Date.now(),
      start: new Date().setDate(0),
      search: ''
    }
  },
  computed: {
    numItems(): number {
      return this.names.length
    },
    randomScores(): number[] {
      const scores = Array.from({ length: this.numItems }, () =>
        Math.floor(Math.random() * 100)
      )
      return scores.sort().reverse()
    },
    items(): Array<object> {
      const teams = this.names.map((name) => ({
        name,
        lastSubmission: new Date(
          this.start + Math.random() * (this.end - this.start)
        ),
        numCorrect: Math.floor(Math.random() * this.numModels),
        queries: Math.floor(Math.random() * 100),
        rank: 0,
        sparklineValues: Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * 100)
        ),
        color: name.split(' ')[0].toLowerCase()
      }))

      // Reverse score order
      teams.sort((a, b) => {
        // num correct, then queries, then date
        if (a.numCorrect > b.numCorrect) {
          // Higher number of correct is better
          return -1
        } else if (a.numCorrect === b.numCorrect) {
          // If the number of correct is the smae
          if (a.queries < b.queries) {
            // Lower number of queries is better
            return -1
          } else if (a.queries === b.queries) {
            // If the number of queries is the same, compare the last submission times
            // Earlier last submission time is better
            return a.lastSubmission.getTime() - b.lastSubmission.getTime()
          }
        }
        // Otherwise rank b second
        return 1
      })

      return teams.map((t, i) => {
        t.rank = i + 1
        return t
      })
    }
  }
})
</script>
