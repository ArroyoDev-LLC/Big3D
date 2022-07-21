<template>
  <div name="parent container" class="mb-5">
    <div name="text-container-top" class="text-lg text-left flex flex-col ml-3 sm:ml-8">
      <text>PRICING</text>
      <text class="text-5xl text-left font-bold text-black">What Does It <Span class="bg-yellow">Cost?</Span></text>
    </div>
    <div
      name="routes-container "
      class="sm:p-2 grid grid-cols-1 sm:grid-cols-2 gap-2"
    >
      <div class="col-span-1">
        <DetailsCard
          class="m-2"
          :title="diyData.title"
          :img="diyData.img"
          :details="diyData.details">
          <template #title>
            <div class="flex justify-between pb-2">
              <text class="font-black text-white text-2xl">{{ diyData.title }}</text>
              <text class="text-white font-bold">{{ diyData.cost }}</text>
            </div>
          </template>
          <template #details>
            <div class="py-3">
              <text class="font-bold text-white"
              >{{ diyData.details }}
              </text>
            </div>
            <hr />
            <Drawer title="What's in plan?" :defaultState="true">
              <template #content>
                <ul v-for="(item, index) in diyData.plan" :key="index" class="text-white ml-5 list-disc">
                  <li>{{ item }}</li>
                </ul>
              </template>
            </Drawer>
            <hr />
            <Drawer title="What's included?" :defaultState="true">
              <template #content>
                <ul v-for="(item, index) in diyData.included" :key="index" class="text-white ml-5 list-disc">
                  <li>{{ item }}</li>
                </ul>
              </template>
            </Drawer>
          </template>
          <template #footer>
            <div class="flex items-center justify-center">
              <GoBigButton />
            </div>
          </template>
        </DetailsCard>
      </div>
      <div class="col-span-1">
        <DetailsCard
          class="m-2"
          :title="buildData.title"
          :img="buildData.img"
          :details="buildData.details">
          <template #title>
            <div class="flex justify-between pb-2">
              <text class="font-black text-white text-2xl">{{ buildData.title }}</text>
              <text class="text-white font-bold">{{ buildData.cost }}</text>
            </div>
          </template>
          <template #details>
            <div class="py-3">
              <text class="font-bold text-white"
              >{{ buildData.details }}
              </text>
            </div>
            <hr />
            <Drawer title="What's in plan?" :defaultState="true">
              <template #content>
                <ul v-for="(item, index) in buildData.plan" :key="index" class="text-white ml-5 list-disc">
                  <li>{{ item }}</li>
                </ul>
              </template>
            </Drawer>
            <hr />
            <Drawer title="What's included?" :defaultState="true">
              <template #content>
                <ul v-for="(item, index) in buildData.included" :key="index" class="text-white ml-5 list-disc">
                  <li>{{ item }}</li>
                </ul>
              </template>
            </Drawer>
          </template>
          <template #footer>
            <div class="flex items-center justify-center">
              <GoBigButton />
            </div>
          </template>
        </DetailsCard>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GoBigButton from "@/components/GoBigButton.vue";
import DetailsCard from "@/components/DetailsCard.vue";
import Drawer from "@/components/Drawer.vue";

export default defineComponent({
  name: "Samples",
  components: { GoBigButton, DetailsCard, Drawer },
  setup() {
    const diyData = {
      title: "DIY Route",
      img: "Group 58.png",
      cost: "$500.00-$1500.00",
      details: "Choose this option if you have your own 3D printer and ready to print and build your own models by yourself.",
      plan: ["¢50 per .STL joint generated"],
      included: ["zip file of pre supported .stl files", "full cutsheet listing stick lengths to cut", "simple instruction guide for assembly"]
    };
    const buildData = {
      title: "Finished Frame Route",
      img: "Group 59.png",
      cost: "$1000.00-$3000.00",
      details: "Choose this option if you want to receive a complete ready-to-assemble kit from us.",
      plan: ["¢50 per .STL joint generated", "¢20 to ¢70 per. ft of stick material", "$2.20 to $4.00 each joint"],
      included: ["full set of 3D puzzle pieces", "full set of pre-cut and labeled stick to join them together", "custom instruction sheet", "zip file of pre supported .stl files", "full cutsheet listing stick lengths to cut", "simple instruction guide for assembly", "shipping cost ofc;)"]
    };
    return {
      diyData,
      buildData
    };
  }
});
</script>

<style scoped>
</style>