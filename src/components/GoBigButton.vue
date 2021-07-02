<template>
  <div class="goBigButton">go Big Now</div>
</template>

<script>
export default {
  name: "goBigButton",
};
</script>

<style scoped>
.goBigButton {
  @apply text-black
  font-bold
  rounded-lg
  bg-yellow
  w-64
  p-6
  centered
  shadow-md
  text-4xl;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
