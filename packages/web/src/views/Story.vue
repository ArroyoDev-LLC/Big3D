<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Story',
  setup() {
    const goToWizard = () => {
      const wizardElement = document.getElementById('generator-wizard')
      if (wizardElement) {
        wizardElement.scrollIntoView()
      }
    }
    return {
      goToWizard
    }
  }
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 ml-3 sm:ml-8">
    <div class="left-container col-span-1">
      <text class="dark:text-white text-lg pb-3">PROJECTS</text>

      <text class="text-5xl font-bold text-big3dBlack dark:text-white z-0">
        Sometimes you just <br />
        need to
      </text>
      <span
        class="mb-4 text-5xl font-bold w-36 bg-yellow font-bold cursor-pointer px-1 hover:scale-125 transform transition duration-450 ease-in-out z-10"
        @click="goToWizard"
        >Go Big</span
      >

      <text class="text-lg pb-3 dark:text-white">
        Our original inspiration was a personal quest to build a lifesize <br />
        Tesla Cybertruck for all the fans who may need to wait a little <br />
        longer to pull that beast into their garage.
      </text>

      <text class="pb-3 text-lg dark:text-white">
        But in the process of building the model, we stumbled <br />
        on an even better idea the ability to build ANYTHING at all kinds of
        <br />
        scales.
      </text>

      <text class="font-black text-big3dBlack text-lg dark:text-white"
        >Here are a few examples of some really fun <br />
        projects built with us:
      </text>
    </div>
    <div class="flex col-span-1 w-full justify-center">
      <div class="flex flex-evenly pt-20 flex-col">
        <img src="/group-51.png" />
        <img src="/group-1607.png" />
      </div>

      <div class="flex flex-evenly pt-20 flex-col">
        <img src="/group-15.png" />
        <img src="/group-52.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.left-container {
  @apply flex flex-col text-left justify-center w-full;
}
img {
  @apply hover:scale-105 transform transition duration-500 ease-in-out;
}
</style>
