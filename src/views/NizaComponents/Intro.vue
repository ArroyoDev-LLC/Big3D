<template>
  <div class="flex flex-col sm:flex-row justify-evenly">
    <div class="intro-left-container px-4 sm:p-0">
      <text class="font-bold text-4xl text-big3dBlack"> Stop wondering. </text>

      <text class="font-bold text-4xl pb-2 text-big3dBlack"> Think big </text>

      <text>
        Time for big toys! Generate full-size 3D model any form <br />
        you wantand get constructor model of your dreams
      </text>
      <GoBigButton class="my-5 ml-10 sm:ml-0" />
    </div>

    <div>
      <img src="Frame 1.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoBigButton from "@/components/GoBigButton.vue";

export default defineComponent({
  name: "Intro",
  components: { GoBigButton },
});
</script>

<style scoped lang="postcss">
.intro-header {
  @apply font-black text-6xl text-yellow;
}
.intro-left-container {
  @apply flex flex-col text-left justify-center;
}
</style>
