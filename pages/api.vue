<template>
  <div>
    <div id="swagger" class="swagger"></div>
    <script
      src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js"
      crossorigin></script>
  </div>
</template>

<script>
import spec from '~/assets/mlmac-api.json'

export default {
  name: 'ApiPage',
  head() {
    return {
      // script: [
      //   {
      //     src: 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js'
      //   }
      // ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('load', this.swaggerInit)
  },
  beforeDestroy() {
    window.removeEventListener('load', swaggerInit)
  },
  methods: {
    swaggerInit() {
      window.ui = SwaggerUIBundle({
        spec,
        dom_id: '#swagger'
      })
    }
  }
}
</script>

<style scoped>
#swagger {
  background-color: white;
}
#swagger >>> .info {
  background-color: unset !important;
  wahoo: true;
}
</style>
