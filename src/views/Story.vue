<template>
  <div class="relative w-full h-full" style="height: 100vh">
    <div class="storyHeader">What is big<span>3D</span>.me?</div>
    <GoBigButton @click="$emit('scrollMeTo')" />

  </div>
</template>

<script>
import GoBigButton from "@/components/GoBigButton";

export default {
  name: "Story",
  components: {
    GoBigButton,
  },
};
</script>

<style scoped>
span {
  color: yellow;
  outline: black;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.storyHeader {
  @apply text-3xl md:text-8xl text-black font-bold;
}
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
</style>
