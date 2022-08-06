<template>
  <v-container style="height: 50vh">
    <SectionHeader id="organizers">{{ title }}</SectionHeader>

    <v-row>
      <v-col
        v-for="item in items"
        :key="item.name"
        cols="4"
        class="d-flex child-flex">
        <a :href="item.url">
          <v-img
            :src="item.logo"
            :alt="`${item.name} logo`"
            aspect-ratio="1"
            max-height="75"
            contain></v-img>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  MITRE_LOGO,
  MICROSOFT_LOGO,
  HUGGINGFACE_LOGO,
  ROBUSTINTELLIGENCE_LOGO,
  LINCOLNNETWORK_LOGO
} from '~/assets/imgs/logos'

export default Vue.extend({
  data() {
    return {
      title: 'Organizers',
      items: [
        {
          name: 'MITRE',
          url: 'https://www.mitre.org/',
          logo: MITRE_LOGO
        },
        {
          name: 'Microsoft',
          url: 'https://www.microsoft.com',
          logo: MICROSOFT_LOGO
        },
        {
          name: 'HuggingFace',
          url: 'https://huggingface.co/',
          logo: HUGGINGFACE_LOGO
        },
        /*
        {
          name: 'Schmidt Futures',
          url: 'https://www.schmidtfutures.com/',
          logo: SCHMIDTFUTURES_LOGO
        },
        */
        {
          name: 'Robust Intelligence',
          url: 'https://www.robustintelligence.com/',
          logo: ROBUSTINTELLIGENCE_LOGO
        },
        {
          name: 'Lincoln Network',
          url: 'https://joinlincoln.org/',
          logo: LINCOLNNETWORK_LOGO
        }
      ]
    }
  }
})
</script>
