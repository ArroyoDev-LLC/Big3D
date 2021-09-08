<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 text-left mx-10 mb-5">
    <div class="flex flex-col justify-center col-span-1 pl-24 ">
      <text class="pb-2">OUR COLLABORATORS</text>
      <text class="text-3xl font-black text-black pb-3">Big printing <span class="bg-yellow">partners</span></text>

      <div>
        <text>
          During your build process you have the option to choose form a <br> list
          of top rated 3D printing services to turn your idea into a life <br> size
          3D puzzle! They will custom print your joint filesand ship <br> them to
          your door.
          <br>
          In addition, our cut shop can read the cut sheet for all the sticks <br>
          you will need foryour puzzle and pre-cut, label and ship them to <br> you
          as well.
        </text>
      </div>
    </div>

    <div class="flex flex-col justify-evenly mt-4 mb-4 col-span-1">
      <div class="flex">
        <div class="flex flex-col">
          <img class="m-3" src="Frame 14.png"/>
          <img class="m-3" src="Frame 15.png"/>
        </div>

        <div class="flex flex-col">
          <img class="m-3" src="Frame 16.png"/>
          <img class="m-3" src="Frame 17.png"/>
        </div>
      </div>

      <div>
        <img class="m-3 w-2/3 pr-3 h-32" src="Frame 18.png"/>
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
