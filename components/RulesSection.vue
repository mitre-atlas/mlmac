<template>
  <v-container style="height: 30vh">
    <SectionHeader id="rules">Rules</SectionHeader>

    <v-tabs centered :color="tabColor" @change="handleTabChange($event)">
      <v-tab v-for="rule in rules" :key="rule.name">
        {{ rule.name }} Team
      </v-tab>
      <v-tab-item v-for="rule in rules" :key="rule.name">
        <v-card color="transparent">
          <v-card-text>
            {{ rule.text }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Rules',
      tabColor: 'blue',
      rules: [
        {
          name: 'blue',
          text: "Given L number of model's past outputs and M number of model queries, The Blue team must connect the fine-tuned models to pre-trained models. E.g, An “AI bot with zero chills”: Given L number of past replies to other Twitter users and M number of live interactions with the bot. Can you guess which pre-trained language model this bot was fine-tuned from? "
        },
        {
          name: 'green',
          text: "The green team will be aligned with the Blue team to develop NN watermarks. Watermarks can be developed using inherent subnetworks of NN E.g. Using winning tickets from the Lottery Ticket Hypothesis.  Given the different levels of access to fine-tuned models and a set of watermarks from pre-trained models, Green Team would assist Blue Team in building signatures of fine-tuned models. They will maintain a labeled dataset in which different pairs of previously collected fine-tuned models have been tagged with their source; Blue Team can use that data to build techniques to predict respective pre-trained models from a fine-tuned models signature. We won't have a red team and green teams in the first iteration of the competition; we will inform the blue team what constraints were put on the hypothetical red team."
        },
        {
          name: 'red',
          text: "The red team will need to fine-tune models to reach at least a certain threshold of accuracy on the test set. The red team must be restricted in the data they can access (i.e., only the data for the fine-tuning set). Otherwise, they could randomize all the weights and call that a “fine-tuned” model (even if it has garbage performance). They won't be allowed to simply randomize the weights and then re-train with a new random seed or task. We will have computational limitations on the red team. We won't have a red team and green teams in the first iteration of the competition, we will inform the blue team what constraints were put on the hypothetical red team. Modifications that aren't fine-tuning won't be considered, for example, adding in “fake” layers that just copy the previous layer's output (such that the nonlinearities never activate)."
        }
      ]
    }
  },
  methods: {
    handleTabChange(itemIndex: number): void {
      this.tabColor = this.rules[itemIndex].name
    }
  }
})
</script>
