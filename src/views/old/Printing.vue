<script lang="ts">
export default {
  name: 'Printing',
  data() {
    return {
      imgArray: [1, 1, 1, 1, 1]
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 text-left mx-8 mb-5">
    <div
      class="flex flex-col lg:justify-center col-span-1 sm:order-2 text-right"
    >
      <text class="text-base">OUR COLLABORATORS</text>
      <br />
      <text class="text-5xl font-black text-black">Big printing </text>
      <Span class="bg-yellow text-5xl font-black w-56 mt-2 ml-auto"
        >partners</Span
      >

      <div class="p-2 text-lg">
        <text
          >During your build process you have the option to choose form a list
          of top rated 3D printing services to turn your idea into a life size
          3D puzzle! They will custom print your joint files and ship them to
          your door.
          <br />
          In addition, our cut shop can read the cut sheet for all the sticks
          you will need for your puzzle and pre-cut, label and ship them to you
          as well.
        </text>
      </div>
    </div>

    <div class="flex flex-col justify-evenly mt-4 mb-4 col-span-1">
      <div class="flex">
        <div class="flex flex-col p-4">
          <img class="m-1 p-1" src="Frame 14.png" width="600" height="100" />
          <img class="m-1 p-1" src="Frame 15.png" width="600" height="100" />
        </div>

        <div class="flex flex-col p-4">
          <img class="m-1 p-1" src="Frame 16.png" width="600" height="100" />
          <img class="m-1 p-1" src="Frame 17.png" width="600" height="100" />
        </div>
      </div>
      <img class="m-1 w-full h-1/3 p-5" src="Frame 18.png" />
      <!-- <img :key="idx + item" v-for=" idx, item in imgArray" src='https://picsum.photos/200/165' /> -->
    </div>
  </div>
</template>

<style scoped lang="postcss">
img {
  @apply hover:scale-105 transform transition duration-500 ease-in-out;
}
</style>
