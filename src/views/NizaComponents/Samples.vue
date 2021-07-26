<template>
  <div name="parent container">
    <div name="text-container-top">
      <text>PRICING</text>
      <hr />
      <text class="text-2xl text-left">What does it <span>cost?</span></text>
    </div>
    <!--    route container start-->
    <div name="routes-container " class="flex justify-evenly p-2 m-4">
      <!--      diy container start-->
      <div name="DIY" class="bg-big3dBlack p-4 text-left mr-4">
        <div name="top">
          <div class="flex justify-between">
            <text class="font-black text-white text-2xl">DIY route</text>
            <text class="text-white font-bold">$500.00-$1500.00</text>
          </div>

          <img src="https://picsum.photos/1200/300" />
          <text class="font-bold text-white"
            >Choose this option if you have your own 3D printer and ready to
            print and build your own models by yourself.
          </text>
          <hr />

          <text class="text-white pb-10">What is your plan?</text>

          <hr class="dotted-hr" />
        </div>

        <div name="pricing details" class="flex flex-col text-left pb-20">
          <text class="text-white">Pricing Details</text>
          <ul class="list-disc text-white pl-4">
            <li>¢50 per .STL joint generated</li>
          </ul>
        </div>
        <hr />
        <div name="included" class="flex flex-col text-left">
          <text class="text-white">Whats included?</text>
          <hr class="dotted-hr" />
          <ul class="list-disc text-white pl-4">
            <li class="">zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lenghts to cut</li>
            <li>simple instruction guide for assembly</li>
          </ul>
        </div>

        <div name="bottom">
          <div class="font-bold bg-yellow w-full p-2 text-center">
            GO BIG NOW
          </div>
        </div>
      </div>
      <!--diy container end-->
      <!--      build container start-->
      <div name="Build" class="bg-big3dBlack p-4 text-left">
        <div name="topB">
          <div class="flex justify-between">
            <text class="font-black text-white text-2xl">DIY route</text>
            <text class="text-white font-bold">$500.00-$1500.00</text>
          </div>

          <img src="https://picsum.photos/1200/300" />
          <text class="font-bold text-white"
            >Choose this option if you have your own 3D printer and ready to
            print and build your own models by yourself.
          </text>
          <hr />
          <div class="flex justify-between">
            <text class="text-white">What is your plan?</text>
            <button @click="() => (build1text = !build1text)">
              +
            </button>
          </div>
        </div>

        <hr class="dotted-hr" />

        <div name="pricing details b" class="flex flex-col text-left pb-20">
          <text class="text-white">Pricing Details</text>
          <ul v-if="build1text" class="list-disc text-white pl-4">
            <li>¢50 per .STL joint generated</li>
          </ul>
        </div>
        <hr />
        <div name="includedb" class="flex flex-col text-left">
          <text class="text-white">Whats included?</text>
          <hr class="dotted-hr" />
          <ul class="list-disc text-white pl-4">
            <li class="">zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lenghts to cut</li>
            <li>simple instruction guide for assembly</li>
          </ul>
        </div>

        <div name="bottomb">
          <div class="font-bold bg-yellow w-full p-2 text-center">
            GO BIG NOW
          </div>
        </div>
      </div>
      <!--      build container end-->
    </div>
  </div>
  <!--    routes container end-->
</template>

<script lang="ts">
export default {
  name: "Samples",

  methods: {},

  data() {
    return {
      build1text: false,
      build2text: false,
      diy1text: false,
      diy2text: false,
    };
  },
};
</script>

<style scoped lang="postcss">
.dotted-hr {
  border-top: 2px dashed white;
  opacity: 0.2;
}
</style>
