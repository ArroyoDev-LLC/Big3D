<template>
  <div class="grid grid-cols-3 text-xs sm:text-base gap-1">
    <div class="grid grid-rows-4 col-span-2">
      <div
        class="
          row-span-1
          border-b border-dashed border-opacity-30
          grid grid-cols-3
          pb-10
        "
      >
        <text class="col-span-auto -ml-4 sm:0">Choose Delivery</text>
        <text class="col-span-auto text-sm sm:text-lg -ml-6 sm:ml-0"
          ><span class="text-yellow">{{ numConnectors }}</span> Connectors</text
        >
        <text class="col-span-auto text-sm sm:text-lg"
          ><span class="text-yellow">{{ numEdges }}</span> Edges</text
        >
      </div>
      <div
        :class="deliveryOption === 'Finished KIT' ? 'opacity-40' : ''"
        class="
          row-span-1
          border-b border-dashed border-opacity-30
          grid grid-cols-3
        "
      >
        <div class="col-span-1">
          <RadioButton
            name="deliveryOption"
            v-model="deliveryOption"
            value="DIY Route"
            id="diy"
          />
          <label for="diy" class="ml-1 font-bold">DIY Route</label>
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <img src="connectors.png" />
        </div>
        <div class="col-span-1 text-right flex flex-col">
          <text class="font-bold">{{
            formatToDollar(numConnectors * 0.52)
          }}</text>
          <text class="text-yellow">(.52 per connector)</text>
        </div>
      </div>
      <div
        :class="deliveryOption === 'DIY Route' ? 'opacity-40' : ''"
        class="
          row-span-1
          border-b border-dashed border-opacity-30
          grid grid-cols-3
        "
      >
        <div class="col-span-1">
          <RadioButton
            name="deliveryOption"
            v-model="deliveryOption"
            value="Finished KIT"
            id="kit"
          />
          <label for="kit" class="ml-1 font-bold">Finished KIT</label>
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <img src="parcel.png" />
        </div>
        <div class="col-span-1 text-right flex flex-col">
          <text class="font-bold">{{ formatToDollar(numEdges * 0.52) }}</text>
          <text class="text-yellow">(2.50 per connector)</text>
        </div>
      </div>
    </div>
    <div class="col-span-1 bg-gray-800">
      <text>WHAT'S INCLUDED</text>
      <div class="text-xs sm:text-base">
        <ul
          v-show="deliveryOption === 'DIY Route'"
          class="list-disc text-white px-6"
        >
          <li class="">zip file of pre supported .stl files</li>
          <li>full cutsheet listing stick lenghts to cut</li>
          <li>simple instruction guide for assembly</li>
        </ul>
        <ul
          v-show="deliveryOption === 'Finished KIT'"
          class="list-disc text-white px-4 sm:px-6"
        >
          <li>full set of 3D puzzle pieces</li>
          <li>full set of pre-cut and labeled stick to join them together</li>
          <li>custom instruction sheet</li>
          <li>zip file of pre supported .stl files</li>
          <li>full cutsheet listing stick lengths to cut</li>
          <li>simple instruction guide for assembly</li>
          <li>shipping cost included</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import RadioButton from "primevue/radiobutton";

export default defineComponent({
  name: "Delivery",
  components: { RadioButton },
  props: {
    numConnectors: {
      type: Number,
      default: 0,
    },
    numEdges: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const deliveryOption = ref();
    const formatToDollar = (dollarAmount: number) => {
      return dollarAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };
    return {
      deliveryOption,
      formatToDollar,
    };
  },
});
</script>
