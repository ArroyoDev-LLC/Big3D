<template>
  <div class="flex flex-col sm:flex-row justify-center w-full">
    <div class="text-left sm:text-right">
      <p class="text-xl pb-3">TRY</p>

      <div class="font-bold text-5xl text-big3dBlack pb-7">
        wanna <span class="bg-yellow">practice first?</span>
      </div>

      <p>
        Want to try to print a sample first? Try
        <a href="https://app.zenhub.com/files/333636351/a756bcf2-d187-4a82-b62d-a760eab590d4/download" class="text-blue-600">
            this model
        </a> 
        on your <br /> own first then come back and upload your big idea.
      </p>
    </div>
    <div>
      <img src="pyramid.png" class="max-w-sm sm:max-w-2xl" />
    </div>
  </div>
</template>

<script lang="ts">
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { defineComponent } from "vue";
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smaller("sm");
export default defineComponent({
  name: "Pyramid",
  setup() {
    return {
      sm,
    };
  },
});
</script>

<style scoped lang="postcss"></style>
