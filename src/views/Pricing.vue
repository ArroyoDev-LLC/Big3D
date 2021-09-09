<template>
  <div class="relative w-full h-full grid-rows-3">
    <div class="pricingHeader">What does it Cost</div>

    <div
      class="
        pricingCardContainer
        grid grid-rows-1
        gap-4
        flex-col
        md:flex-row
        lg:mt-12
      "
    >
      <div class="pricingCards p-8">
        <div class="font-bold">DIY Route</div>
        <div>
          If you have your own 3D printer and are ready to print your own models
          then this is the route for you.
        </div>
        <!-- DIY List -->
        <ul
          class="list-disc space-y-2 download-list justify-center object-center"
        >
          <li class="items-start download-list-item">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">.50 per .STL joint print.</p>
          </li>
          <li class="flex items-start download-list-item">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">* zuo file of pre-supported .stl files.</p>
          </li>
          <li class="flex items-start download-list-item">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">*Full cutest listing stick lengths to cut</p>
          </li>
          <li class="flex items-start download-list-item">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">* simple instruction guide for assembly</p>
          </li>
        </ul>
      </div>
      <div class="pricingCards p-8">
        <div class="font-bold">Finished Frame Route</div>

        <div>Just send me the finished puzzle ready for assembly</div>
        <div class="font-bold">
          <div>.50 per .STL</div>

          <div>.20 to .70 per ft of stick material chosen</div>
          <div>2.20 to 4.00 each joint</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <GoBigButton relative @click="$emit('scrollMeTo')" />
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
.pricingHeader {
  @apply text-black font-bold;
}

.pricingCardContainer {
  @apply flex justify-evenly p-6 text-left;
}

.pricingCards {
  @apply shadow-md rounded-md md:w-1/3 text-left bg-gray-100;
}
</style>
