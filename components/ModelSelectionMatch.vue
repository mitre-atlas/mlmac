<template>
  <v-container>
    <v-row>
      <v-col v-for="num in modelNumberChoices" :key="num" cols="4">
        <v-autocomplete
          v-model="choices[num - 1]"
          clearable
          filled
          rounded
          solo
          :items="items"
          :prefix="`Model ${num} is`"
          placeholder="________"
        ></v-autocomplete>
        <!--
           :prepend-icon="`${num}`"
           :label="`Model ${num}`"
        -->
      </v-col>
    </v-row>
  </v-container>
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
        'GPT-2 XL'
      ].sort(),
      numChoices: 12,
      choices: Array(12)
    }
  },
  computed: {
    modelNumberChoices(): number[] {
      return Array.from(Array(this.numChoices)).map((e, i) => i + 1)
    },
    items(): object[] {
      const modelItems = this.modelNames.map((m: string) => {
        const item: any = {
          text: m,
          value: m.toLowerCase()
        }
        return item
      })

      // Add divider
      modelItems.push({ divider: true })

      // Add None option
      modelItems.push({
        text: 'Not listed',
        value: 'none'
      })

      return modelItems
    }
  }
})
</script>
