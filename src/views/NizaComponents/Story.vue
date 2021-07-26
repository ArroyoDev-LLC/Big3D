<template>
  <div>
    <div class="text-left">
      <text>Projects</text>
      <hr />
      <text class="text-2xl"
        >Sometimes you just need to go
        <span class="bg-gold font-black">big!</span></text
      >
      <hr />
      <text
        >Our original inspration was a personal quest to build a lifesize Tesla
        Cybertruck for all the fans who may need to wait a little longer to pull
        that beast into their garage. But in the process of building the model,
        we stumbled on an even better idea...
        <span class="font-black"
          >the ability to build ANYTHING at all kinds of scales.</span
        >
        Here are a few examples of some really fun projects built with us.
      </text>
    </div>
    <div class="flex justify-evenly">
      <div class="flex flex-col text-left">
        <text>African Elephant</text>
        <img src="https://picsum.photos/300/300" />
      </div>
      <div class="flex flex-col text-left">
        <text> RZ700 Turbo</text>
        <img src="https://picsum.photos/300/300" />
      </div>
      <div class="flex flex-col text-left">
        <text>Tesla Cybertruck</text>
        <img src="https://picsum.photos/300/300" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Story",
};
</script>

<style scoped lang="postcss"></style>