<template>
  <div>
    <div id="swagger" class="swagger"></div>
    <!-- <script
      src=""
      crossorigin
      defer></script> -->
  </div>
</template>

<script>
import SwaggerUIBundle from '~/static/swagger-ui-4.13.2/swagger-ui-bundle.js'
import spec from '~/assets/mlmac-api.json'

export default {
  name: 'ApiPage',
  // middleware: 'auth',
  head() {
    return {
      script: [
        {
          src: '/swagger-ui-4.13.2/swagger-ui-bundle.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/swagger-ui-4.13.2/swagger-ui.css'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.ui = SwaggerUIBundle({
        spec,
        dom_id: '#swagger'
      })
    })
  }
}
</script>

<style scoped>
#swagger {
  background-color: white;
}
#swagger >>> .info {
  background-color: unset !important;
}
</style>
