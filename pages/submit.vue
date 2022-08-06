<template>
  <div>
    <SectionHeader>Submission</SectionHeader>
    <v-sheet class="mx-auto" flat>
      <iframe
        id="cont"
        src="https://docs.google.com/forms/d/e/1FAIpQLSferAdg6VAQVVeXVdSJHKT0e2Kp5VB_jDirR2hvP_m_xrkSkw/viewform?embedded=true"
        width="100%"
        height="2000"
        frameborder="0"
        marginheight="0"
        marginwidth="0">
        Loading…
      </iframe>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'SubmitPage'
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
.v-sheet {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(248, 249, 250, 1) 80%,
    rgba(248, 249, 250, 1) 100%
  );
}
</style>
