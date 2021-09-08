<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 px-20">
    <div class="left-container ml-3 sm:ml-8 col-span-1">
      <text class="text-base pb-3">PROJECTS</text>

      <text class="text-3xl font-bold pb-4 text-big3dBlack">
        Sometimes you just <br />
        need to
        <span
          class="bg-yellow font-bold cursor-pointer px-1"
          @click="goToWizard"
          >go big</span
        >
      </text>

      <text class="text-sm pb-3">
        Our original inspration was a personal quest to build a lifesize <br />
        Tesla Cybertruck for all the fans who may need to wait a little <br />
        longer to pull that beast into their garage.
      </text>

      <text class="pb-3 text-sm">
        But in the process of building the model, we stumbled <br />
        on an even better idea the ability to build ANYTHING at all kinds of
        <br />
        scales.
      </text>

      <text class="font-black text-big3dBlack"
        >Here are a few examples of some really fun <br />
        projects built with us:</text
      >
    </div>
    <div class="flex col-span-1">
      <div class="flex flex-evenly pt-20 flex-col">
        <img src="Group 51.png" />
        <img src="Group 1607.png" />
      </div>

      <div class="flex flex-evenly pt-20 flex-col">
        <img src="Group 15.png" />
        <img src="Group 52.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Story",
  setup() {
    const goToWizard = () => {
      const wizardElement = document.getElementById("generator-wizard");
      if (wizardElement) {
        wizardElement.scrollIntoView();
      }
    };
    return {
      goToWizard,
    };
  },
});
</script>

<style scoped lang="postcss">
.left-container {
  @apply flex flex-col text-left justify-center;
}
</style>
