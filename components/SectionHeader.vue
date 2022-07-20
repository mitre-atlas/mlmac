<template>
  <div class="text-h2 text-center d-flex align-center justify-center">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  height: 3em;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    ellipse,
    rgba(62, 9, 121, 0.25) 0%,
    rgba(66, 5, 70, 0.1) 45%,
    rgba(2, 0, 36, 0) 70%
  );
}
</style>
