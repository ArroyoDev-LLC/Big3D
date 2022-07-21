<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent } from 'vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
export default defineComponent({
  name: 'Pyramid',
  setup() {
    return {
      sm
    }
  }
})
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-center sm:justify-between w-full"
  >
    <div class="text-left sm:text-right sm:mr-8 sm:order-2 sm:w-1/2">
      <p class="text-xl pb-3">TRY</p>

      <div class="font-bold text-5xl text-big3dBlack pb-7">
        Wanna <span class="bg-yellow">practice first?</span>
      </div>

      <p class="text-lg">
        Want to try to print a sample first? Try
        <a
          href="https://app.zenhub.com/files/333636351/a756bcf2-d187-4a82-b62d-a760eab590d4/download"
          class="text-blue-600 underline"
        >
          this model
        </a>
        on your <br />
        own first then come back and upload your big idea.
      </p>
    </div>
    <div class="sm:order-1 sm:w-1/2 flex justify-center ml-8">
      <img src="pyramid.png" class="max-w-sm sm:max-w-2xl" />
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
