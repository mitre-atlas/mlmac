<template>
  <div>
    <div id="swagger" class="swagger"></div>
  </div>
</template>

<script>
import spec from '~/assets/mlmac-api.json'

export default {
  name: 'ApiPage',
  head() {
    return {
      script: [
        {
          src: 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css'
        }
      ]
    }
  },
  mounted() {
    window.ui = SwaggerUIBundle({
      spec,
      dom_id: '#swagger'
    })
  }
}
</script>

<style scoped>
#swagger {
  background-color: white;
}
.v-application .info {
  background-color: white;
}
</style>
