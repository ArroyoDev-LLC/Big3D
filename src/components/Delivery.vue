<template>
  <div class="px-1 sm:px-0">
    <text v-if="isMobile()">Choose Delivery</text>
    <span class="grid grid-cols-6 sm:grid-cols-3 text-xs sm:text-base sm:gap-1">
      <div class="grid grid-rows-4 col-span-6 sm:col-span-2 gap-2">
        <div
          class="
            row-span-1
            border-b border-dashed border-opacity-30
            grid grid-flow-col
            sm:grid-cols-3
          "
        >
          <text class="col-span-auto" v-if="!isMobile()">Choose Delivery</text>
          <text class="col-span-auto text-sm sm:text-lg"
            ><span class="text-yellow">{{ numConnectors }}</span>
            Connectors</text
          >
          <text class="col-span-auto text-sm sm:text-lg"
            ><span class="text-yellow">{{ numEdges }}</span> Edges</text
          >
        </div>
        <div
          :class="deliveryOption === DeliveryOptions.KIT ? 'opacity-40' : ''"
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
            <img src="connectors.png" class="w-10 sm:w-20" />
          </div>
          <div class="col-span-1 text-right flex flex-col">
            <text class="font-bold">{{
              formatToDollar(numConnectors * 0.52)
            }}</text>
            <text class="text-yellow">(.52 per connector)</text>
          </div>
        </div>
        <div
          :class="deliveryOption ===  DeliveryOptions.DIY ? 'opacity-40' : ''"
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
            <img src="parcel.png" class="w-10 sm:w-20" />
          </div>
          <div class="col-span-1 text-right flex flex-col">
            <text class="font-bold">{{
              formatToDollar(numConnectors * 2.5)
            }}</text>
            <text class="text-yellow">(2.50 per connector)</text>
          </div>
        </div>
        <div class="col-span-1" v-if="isMobile() && deliveryOption">
          <div
            @click="display = true"
            class="text-yellow underline flex flex-col items-center"
          >
            <text>Details</text>
          </div>
        </div>
      </div>
      <div v-if="!isMobile()" class="col-span-1 bg-gray-800 relative">
        <text>WHAT'S INCLUDED</text>
        <div class="pb-16 max-h-60 overflow-auto">
          <ul
            v-show="deliveryOption === DeliveryOptions.DIY"
            class="list-disc text-white px-6"
          >
            <li>zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lenghts to cut</li>
            <li>simple instruction guide for assembly</li>
          </ul>
          <ul
            v-show="deliveryOption === DeliveryOptions.KIT"
            class="list-disc text-white px-6"
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
        <div class="absolute bottom-2 w-full">
          <NextStepButton @click="toCheckout" class="w-full" />
        </div>
      </div>
    </span>
  </div>
  <Dialog
    v-model:visible="display"
    :modal="true"
    class="w-full"
    header="WHAT'S INCLUDED"
  >
    <div class="pt-4">
      <ul v-if="deliveryOption === DeliveryOptions.DIY" class="list-disc px-6">
        <li>zip file of pre supported .stl files</li>
        <li>full cutsheet listing stick lenghts to cut</li>
        <li>simple instruction guide for assembly</li>
      </ul>
      <ul
        v-if="deliveryOption === DeliveryOptions.KIT"
        class="list-disc px-4 sm:px-6"
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
    <template #footer>
      <div class="w-full flex justify-center mt-2">
        <NextStepButton @click="toCheckout" />
      </div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import RadioButton from "primevue/radiobutton";
import Dialog from "primevue/dialog";
import NextStepButton from "@/components/NextStepButton.vue";

export enum DeliveryOptions {
  DIY = "DIY Route",
  KIT = "Finished KIT",
}

export default defineComponent({
  name: "Delivery",
  components: { RadioButton, Dialog, NextStepButton },
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
  setup(props, { emit }) {
    const deliveryOption = ref();
    const formatToDollar = (dollarAmount: number) => {
      return dollarAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };
    const isMobile = () => {
      return window.outerWidth < 376;
    };
    const toCheckout = () => {
      display.value = false;
      if (deliveryOption.value) {
        emit("toCheckout", deliveryOption.value);
      }
    };
    const display = ref(false);
    return {
      deliveryOption,
      formatToDollar,
      isMobile,
      display,
      toCheckout,
      DeliveryOptions,
    };
  },
});
</script>
