<template>
  <div name="parent container" class="mb-5">
    <div name="text-container-top" class="text-lg text-left flex flex-col ml-3 sm:ml-8">
      <text>PRICING</text>
      <text class="text-5xl text-left font-bold text-black">What does it <Span class="bg-yellow">cost?</Span></text>
    </div>
    <!--    route container start-->
    <div
      name="routes-container "
      class="sm:p-2 grid grid-cols-1 sm:grid-cols-2 gap-2"
    >
      <!--      diy container start-->
      <div class="col-span-1">
        <div name="DIY" class="bg-big3dBlack p-4 m-2 text-left relative">
          <div name="top">
            <div class="flex justify-between pb-2">
              <text class="font-black text-white text-2xl">DIY route</text>
              <text class="text-white font-bold">$500.00-$1500.00</text>
            </div>

            <img src="Group 58.png" class="w-full" />
            <div class="max-w-xl py-3">
              <text class="font-bold text-white"
              >Choose this option if you have your own 3D printer and ready to
                print and build your own models by yourself.
              </text>
            </div>
            <hr />

            <div
              class="
              flex
              justify-between
              cursor-pointer
              border-dotted border-b border-opacity-40
              py-1
            "
              @click="() => (diy1text = !diy1text)"
            >
              <text class="text-white text-lg font-bold">What's in plan?</text>

              <button class="text-yellow text-xl font-bold">
                {{ diy1text ? "x" : "+" }}
              </button>
            </div>
          </div>

          <div
            name="pricing details"
            class="flex flex-col text-left overflow-hidden drawer"
            :class="diy1text ? 'h-40' : 'h-1'"
          >
            <ul class="list-disc text-white pl-4">
              <li>¢50 per .STL joint generated</li>
            </ul>
          </div>
          <hr />
          <div name="included" class="flex flex-col text-left">
            <div
              class="
              flex
              justify-between
              cursor-pointer
              border-dotted border-b border-opacity-40
              py-1
            "
              @click="() => (diy2text = !diy2text)"
            >
              <text class="text-white text-lg font-bold">What's included?</text>
              <button class="text-yellow text-xl font-bold">
                {{ diy2text ? "x" : "+" }}
              </button>
            </div>

            <div class="drawer overflow-hidden" :class="diy2text ? 'h-48' : 'h-1'">
              <ul class="list-disc text-white pl-4">
                <li>zip file of pre supported .stl files</li>
                <li>full cutsheet listing stick lenghts to cut</li>
                <li>simple instruction guide for assembly</li>
              </ul>
            </div>
          </div>

          <div name="bottom">
            <div class="flex items-center justify-center">
              <GoBigButton />
            </div>
          </div>
        </div>
      </div>
      <!--diy container end-->
      <!--      build container start-->
      <div class="col-span-1">
        <div name="Build" class="bg-big3dBlack p-4 m-2 text-left relative">
          <div name="topB">
            <div class="flex justify-between pb-2">
              <text class="font-black text-white text-2xl"
              >Finished frame route
              </text>
              <text class="text-white font-bold">$1000.00-$3000.00</text>
            </div>

            <img src="Group 59.png" class="w-full" />
            <div class="max-w-xl py-3">
              <text class="font-bold text-white">
                Choose this option if you want to receive a complete
                ready-to-assemble kit from us.
              </text>
            </div>
            <hr />
            <div
              class="
              flex
              justify-between
              cursor-pointer
              border-dotted border-b border-opacity-40
              py-1
            "
              @click="() => (build1text = !build1text)"
            >
              <text class="text-white text-lg font-bold">What's in plan?</text>
              <button class="text-yellow text-xl font-bold">
                {{ build1text ? "x" : "+" }}
              </button>
            </div>
          </div>

          <div
            name="pricing details b"
            class="flex flex-col text-left overflow-hidden drawer"
            :class="build1text ? 'h-40' : 'h-2'"
          >
            <ul v-if="build1text" class="list-disc text-white pl-4">
              <li>¢50 per .STL joint generated</li>
              <li>¢20 to ¢70 per. ft of stick material</li>
              <li>$2.20 to $4.00 each joint</li>
            </ul>
          </div>
          <hr />
          <div
            name="includedb"
            class="flex flex-col text-left justify-between"
          >
            <div
              class="
              flex
              justify-between
              cursor-pointer
              border-dotted border-b border-opacity-40
              py-1
            "
              @click="() => (build2text = !build2text)"
            >
              <text class="text-white text-lg font-bold">What's included?</text>
              <button class="text-yellow text-xl font-bold">
                {{ build2text ? "x" : "+" }}
              </button>
            </div>
            <div class="overflow-hidden drawer" :class="build2text ? 'h-64 sm:h-48' : 'h-1'">
              <ul class="list-disc text-white pl-5">
                <li>full set of 3D puzzle pieces</li>
                <li>full set of pre-cut and labeled stick to join them together</li>
                <li>custom instruction sheet</li>
                <li>zip file of pre supported .stl files</li>
                <li>full cutsheet listing stick lengths to cut</li>
                <li>simple instruction guide for assembly</li>
                <li>shipping cost ofc;)</li>
              </ul>
            </div>
          </div>

          <div name="bottom">
            <div class="flex items-center justify-center">
              <GoBigButton />
            </div>
          </div>
        </div>
      </div>
      <!--      build container end-->
    </div>
  </div>
  <!--    routes container end-->
</template>

<script>
import { defineComponent } from "vue";
import GoBigButton from "@/components/GoBigButton.vue";

export default defineComponent({
  name: "Samples",
  components: { GoBigButton },
  data() {
    return {
      build1text: true,
      build2text: true,
      diy1text: true,
      diy2text: true
    };
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.drawer {
  transition: all 0.2s;
}
</style>