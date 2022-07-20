<template>
  <v-container>
    <SectionHeader id="overview">Overview</SectionHeader>
    <!-- <p>
      ML Model (Neural Network) attribution identifies which pre-trained model
      was used to construct a subsequent model, e.g., via fine-tuning. This
      could allow intellectual property theft or malicious AI code to be traced
      back to its origin pre-trained model (e.g., identifying which base model a
      disinformation bot was derived from).
    </p>
    <p>
      Developing AI Forensics capabilities and establishing the hardness of
      attribution is important for AI security. This challenge could contribute
      to the maturation of AI Forensics as a subfield of AI security. If Blue
      Teams cannot win for multiple rounds, that establishes that the
      attribution problem is hard much more effectively than directly trying to
      convince someone.
    </p> -->
    <nuxt-content :document="doc"></nuxt-content>
  </v-container>
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
      doc: {}
    }
  },
  async fetch() {
    this.doc = await this.$content('text').fetch()
  }
})
</script>
