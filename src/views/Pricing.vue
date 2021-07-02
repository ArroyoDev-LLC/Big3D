<template>
  <div class="relative w-full h-full" style="height: 100vh">
    <div class="pricingHeader">What does it Cost?</div>

    <div class="pricingCardContainer">
      <div class="pricingCards">
        <div class="font-bold">DIY Route</div>
        <div>
          If you have your own 3D printer and are ready to print your own models
          then this is the route for you.
        </div>
        <div class="font-bold">.50 per .STL joint generated</div>

        <div class="font-bold">
          <div>whats included...</div>
          <div>* zuo file of pre supported .stl files</div>
          <div>* full cutest listing stick lengths to cut</div>
          <div>* simple instruction guide for assembly</div>
        </div>
      </div>
      <div class="pricingCards">
        Finished Frame Route

        <div>Just send me the finished puzzle ready for assembly</div>
        <div class="font-bold">
          <div>.50 per .STL</div>

          <div>.20 to .70 per ft of stick material chosen</div>
          <div>2.20 to 4.00 each joint</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <GoBigButton @click="$emit('scrollMeTo')" />
    </div>
  </div>
</template>

<script lang="ts">
import GoBigButton from "@/components/GoBigButton.vue";

export default {
  name: "Pricing",
  components: {
    GoBigButton,
  },
  methods: {},
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.goBigButton {
  @apply text-black
  font-bold
  rounded-lg
  bg-yellow
  w-64
  p-6
  centered
  shadow-md
  text-4xl;
}
.pricingHeader {
  @apply text-black font-bold;
}

.pricingCardContainer {
  @apply flex justify-evenly p-6 text-left;
}

.pricingCards {
  @apply shadow-md rounded-md w-1/3 text-left;
}
</style>
