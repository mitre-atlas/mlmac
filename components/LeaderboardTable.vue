<template>
  <v-data-table
    dark
    :headers="headers"
    :items="items"
    show-expand
    item-key="name"
  >
    <template #item.rank="{ item }">
      {{ item.rank }}
      <span v-if="item.rank === 1">
        <v-icon right small> mdi-crown </v-icon>
      </span>
    </template>
    <template #item.score="{ item }"> {{ item.score }}% </template>
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
          value: 'rank'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Score',
          value: 'score'
        },
        {
          text: 'Historical Accuracy',
          value: 'data-table-expand'
        }
      ]
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
        score: Math.floor(Math.random() * 100),
        rank: 0,
        sparklineValues: Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * 100)
        ),
        color: name.split(' ')[0].toLowerCase()
      }))

      // Reverse score order
      teams.sort((a, b) => b.score - a.score)

      return teams.map((t, i) => {
        t.rank = i + 1
        return t
      })
    }
  }
})
</script>
