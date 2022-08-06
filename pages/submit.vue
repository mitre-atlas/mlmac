<template>
  <div>
    <SectionHeader>Submission</SectionHeader>
    <v-sheet class="mx-auto" color="transparent" flat>
      <!-- <div id="ff-compose" class="container"></div>
    <script
      async
      defer
      src="https://formfacade.com/include/112521180686265964585/form/1FAIpQLSferAdg6VAQVVeXVdSJHKT0e2Kp5VB_jDirR2hvP_m_xrkSkw/bootstrap.js?div=ff-compose"></script> -->
      <!-- <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSferAdg6VAQVVeXVdSJHKT0e2Kp5VB_jDirR2hvP_m_xrkSkw/viewform?embedded=true"
        width="100%"
        height="1759"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      > -->
      <div id="cont" v-html="html"></div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'SubmitPage',
  async asyncData({ $http }) {
    const url =
      'https://docs.google.com/forms/d/1NmHm1WWwvkTTwb5h24D2SxkEJrX35gnXwwjPp_Q5QlY/viewform'
    const html = await $http.$get(url, { mode: 'no-cors' })
    console.log(html)
    return { html }
  },

  data() {
    return {
      url: 'https://forms.gle/7BvpxPaVtK47nUVD8'
    }
  }
}
</script>

<style scoped>
iframe {
  display: unset;
}
#cont >>> .teQAzf {
  /* Width of form */
  max-width: unset;
  width: 1000px;
}
#cont >>> .lrKTG .F9yp7e .cBGGJ {
  /* Entire form, text color */
}
#cont >>> .m7w29c {
  /* Title box */
  background-color: transparent;
}
</style>
