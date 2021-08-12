<template>
  <div class="grid grid-cols-12 gap-4 h-full">
    <div class="col-span-7 grid grid-cols-7 grid-rows-2 m-6">
      <span class="col-span-7 text-left text-xl md:text-3xl">
        {{ title }}
      </span>
      <div class="col-span-5 text-left text-yellow text-xl md:text-3xl">
        Longest Dimension:
      </div>
      <div class="col-span-2">
        <input
          id="dynamic-longest-dimension-input"
          type="number"
          v-model="dynamicLongestDimension"
          :disabled="isLoading"
          class="w-full text-black p-4"
          name="dynamic-longest-dimension-input"
          step="0.01"
        />
      </div>
    </div>

    <div class="col-span-5 grid grid-rows-5">
      <div class="row-span-1 text-xl md:text-2xl">APPROXIMATE SIZE</div>
      <div class="row-span-4 border border-white relative">
        <div class="human-scale-container absolute bottom-0 left-0">
          <img :src="humanScaleSrc" alt="human-scale" />
        </div>
        <div class="model-scale-container absolute bottom-0 right-0">
          <img :src="modelScaleSrc" alt="model-scale" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DimensionsView",
  components: {},
  emits: [],
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    humanScaleSrc: {
      type: String,
      required: false,
      default: "images/human-for-scale.png",
    },
    modelScaleSrc: {
      type: String,
      required: false,
      default: "images/placeholder-model-for-scale.png",
    },
  },

  // setup function
  setup() {
    const dynamicLongestDimension = ref<number>(1);

    function handleHumanScaleLoad() {
      console.log(this);
    }

    const handleModelScaleLoad = (ev) => {
      console.log(ev);
    };

    return {
      dynamicLongestDimension,
      handleHumanScaleLoad,
      handleModelScaleLoad,
    };
  },
});
</script>

<style lang="postcss" scoped></style>
