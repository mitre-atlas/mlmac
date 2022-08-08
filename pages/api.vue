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
  middleware: 'auth',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/swagger-ui-dist@4.13.2/swagger-ui.css'
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
  wahoo: true;
}
</style>
