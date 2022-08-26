<template>
  <v-data-table
    dark
    :headers="headers"
    :items="items"
    item-key="name"
    :search="search">
    <!-- <template #top>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search by username"
        single-line
        hide-details></v-text-field>
    </template> -->
    <template #header.total_queries="{ header }">
      {{ header.text }}
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-icon right small v-bind="attrs" v-on="on">
            mdi-information-outline
          </v-icon>
        </template>
        <span>Only includes queries made via the mlmac.io API</span>
      </v-tooltip>
    </template>
    <template #item.username="{ item }">
      <div v-if="item.username == 'MLMAC Team Baseline'">
        {{ item.username }}
      </div>
      <a v-else :href="`https://github.com/${item.username}`" target="_blank">
        {{ item.username }}
      </a>
    </template>
    <template #item.is_student="{ item }">
      <span v-if="item.is_student">
        <v-icon right small> mdi-school </v-icon>
      </span>
    </template>
    <template #item.last_submission_date="{ item }">
      <!-- {{
        item.last_submission_date.toLocaleString(undefined, {
          dateStyle: 'short',
          timeStyle: 'long'
        })
      }} -->
      {{ item.last_submission_date.toUTCString() }}
    </template>
    <template #item.total_queries="{ item }">
      {{ Number(item.total_queries).toLocaleString('en-US') }}
    </template>
    <template #item.score="{ item }">
      {{ item.num_correct }} / {{ numModels }}
    </template>
  </v-data-table>
</template>

<script>
import Vue from 'vue'
import resultsData from '../assets/results.json'

export default Vue.extend({
  data() {
    return {
      headers: [
        {
          text: 'Rank',
          value: 'rank',
          filterable: false
        },
        {
          text: 'Username',
          value: 'username'
        },
        {
          text: 'Correct model pairs',
          value: 'score',
          filterable: false
        },
        {
          text: 'Total queries',
          value: 'total_queries',
          filterable: false
        },
        {
          text: 'Last submission time',
          value: 'last_submission_date',
          filterable: false
        },
        {
          text: 'Student submission',
          value: 'is_student',
          filterable: false
        }
      ],
      numModels: 12,
      end: Date.now(),
      start: new Date().setDate(0),
      search: '',
      results: resultsData.map((r) => {
        r.last_submission_date = new Date(r.last_submission_date)
        return r
      })
    }
  },
  computed: {
    items() {
      // Reverse score order
      this.results.sort((a, b) => {
        // num correct, then queries, then date
        if (a.num_correct > b.num_correct) {
          // Higher number of correct is better
          return -1
        } else if (a.num_correct === b.num_correct) {
          // If the number of correct is the smae
          if (a.total_queries < b.total_queries) {
            // Lower number of queries is better
            return -1
          } else if (a.total_queries === b.total_queries) {
            // If the number of queries is the same, compare the last submission times
            // Earlier last submission time is better
            return (
              a.last_submission_date.getTime() -
              b.last_submission_date.getTime()
            )
          }
        }
        // Otherwise rank b second
        return 1
      })

      return this.results.map((t, i) => {
        t.rank = i + 1
        return t
      })
    }
  }
})
</script>
