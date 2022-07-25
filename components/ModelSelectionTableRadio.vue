<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
    caption="What is the correct model pairing?"
  >
    <template v-for="i in modelNumberChoices" #[`item.${i}`]="{ item }">
      <v-radio value="i"></v-radio>
    </template>
    <!-- <template #item="{ item }">
      <v-radio-group row>
        <v-radio v-for="i in modelNumberChoices" :key="i"></v-radio>
      </v-radio-group>
    </template> -->
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      modelNames: [
        'GPT-2',
        'DistilGPT-2',
        'MiniLM',
        'XLNet',
        'GPT-J',
        'GPT Neo',
        'Bloom 350m',
        'Bloom 2b5',
        'GPT-2 XL',
        'None'
      ],
      numChoices: 12
    }
  },
  computed: {
    modelNumberChoices(): number[] {
      return Array.from(Array(this.numChoices)).map((e, i) => i + 1)
    },
    headers(): object[] {
      const headerItems = [
        {
          text: 'Model Name',
          value: 'name'
        }
      ]
      for (let i = 1; i <= this.numChoices; i++) {
        const headerItem = {
          text: `${i}`,
          value: `${i}`
        }
        headerItems.push(headerItem)
      }
      return headerItems
    },
    items(): object[] {
      return this.modelNames.map((m: string) => {
        const item: any = {
          name: m
        }

        for (let i = 1; i <= this.numChoices; i++) {
          item[`${i}`] = false
        }
        return item
      })
    }
  }
})
</script>
