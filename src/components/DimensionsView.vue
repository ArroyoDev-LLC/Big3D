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
          v-model="dynamicLongestDimension"
          class="w-full text-black p-4"
          name="dynamic-longest-dimension-input"
          step="0.01"
          type="number"
        />
      </div>
    </div>

    <div class="col-span-5 grid grid-rows-5">
      <div class="row-span-1 text-xl md:text-2xl">APPROXIMATE SIZE</div>
      <div class="row-span-4 border border-white relative">
        <div class="human-scale-container absolute bottom-0 left-0">
          <img
            ref="humanScaleRef"
            :src="humanScaleSrc"
            alt="human-scale"
            @load="handleHumanScaleLoad"
          />
        </div>
        <div class="model-scale-container absolute bottom-0 right-0">
          <img
            ref="modelScaleRef"
            :src="modelScaleSrc"
            alt="model-scale"
            @load="handleModelScaleLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export interface ScaleInfoT {
  width: number;
  height: number;
  src: string;
}

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

  setup(props) {
    const dynamicLongestDimension = ref<number>(1);
    const humanScaleRef = ref(null);
    const modelScaleRef = ref(null);

    const humanScaleInfo = reactive<ScaleInfoT>({
      height: 0,
      width: 0,
      src: props.humanScaleSrc as string,
    });

    const modelScaleInfo = reactive<ScaleInfoT>({
      height: 0,
      width: 0,
      src: props.modelScaleSrc as string,
    });

    const handleHumanScaleLoad = (event: Event) => {
      const img = event.target as HTMLImageElement;
      if (img) {
        humanScaleInfo.width = img.clientWidth;
        humanScaleInfo.height = img.clientHeight;
      }
      console.log(humanScaleInfo);
    };

    const handleModelScaleLoad = (event: Event) => {
      const img = event.target as HTMLImageElement;
      if (img) {
        modelScaleInfo.width = img.clientWidth;
        modelScaleInfo.height = img.clientHeight;
      }
      console.log(modelScaleInfo);
    };

    return {
      humanScaleRef,
      modelScaleRef,
      dynamicLongestDimension,
      handleHumanScaleLoad,
      handleModelScaleLoad,
    };
  },
});
</script>

<style lang="postcss" scoped></style>
