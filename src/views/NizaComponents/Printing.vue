<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 text-left mx-10 mb-5">
    <div class="flex flex-col lg:justify-center col-span-1">
      <text class="text-base">OUR COLLABORATORS</text>
      <br />
      <text class="text-2xl font-black text-black">Big printing partners</text>

      <div class="p-2">
        <text
          >During your build process you have the option to choose form a list
          of top rated 3D printing services to turn your idea into a life size
          3D puzzle! They will custom print your joint filesand ship them to
          your door.
          <br />
          In addition, our cut shop can read the cut sheet for all the sticks
          you will need foryour puzzle and pre-cut, label and ship them to you
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

      <div>
        <img class="m-1 w-full h-1/2 p-5" src="Frame 18.png" />
      </div>
      <!--<img :key="idx + item" v-for=" idx, item in imgArray" src='https://picsum.photos/200/165' />-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Printing",
  data() {
    return {
      imgArray: [1, 1, 1, 1, 1],
    };
  },
};
</script>

<style scoped lang="postcss"></style>
