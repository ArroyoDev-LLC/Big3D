<template>
  <div class="grid grid-cols-12 gap-4 h-full">
    <div class="col-span-7 grid grid-cols-7 grid-rows-3 m-6">
      <span class="col-span-7 text-left text-xl md:text-3xl">
        {{ title }}
      </span>
      <div
        class="col-span-5 self-center text-left text-yellow text-xl md:text-3xl"
      >
        What will the longest dimension be for this model?
      </div>
      <div class="col-span-2 self-center">
        <input
          id="dynamic-longest-dimension-input"
          v-model="dynamicLongestDimension"
          class="w-full text-black p-4"
          name="dynamic-longest-dimension-input"
          step="0.5"
          type="number"
        />
      </div>
    </div>

    <div class="col-span-5 grid grid-rows-5">
      <div class="row-span-1 text-xl md:text-2xl">APPROXIMATE SIZE</div>
      <div
        class="row-span-4 border border-white relative"
        ref="scaleContainerRef"
      >
        <div class="human-scale-container absolute bottom-0 left-0">
          <img
            class="transition-all"
            ref="humanScaleRef"
            :src="humanScaleSrc"
            alt="human-scale"
            @load="handleHumanScaleLoad"
          />
        </div>
        <div class="model-scale-container absolute bottom-0 right-0">
          <img
            class="transition-all"
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
import { defineComponent, reactive, ref, watchEffect } from "vue";

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
    selectedLongestDimension: {
      type: Number,
      required: false,
      default: 50,
    },
  },

  setup(props) {
    const dynamicLongestDimension = ref<number>(
      props.selectedLongestDimension as number
    );
    const scaleContainerRef = ref<HTMLDivElement | null>(null);
    const humanScaleRef = ref<HTMLImageElement | null>(null);
    const modelScaleRef = ref<HTMLImageElement | null>(null);

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

    /**
     * clamps a number between a range
     */
    const clamp = (n: number, min: number, max: number): number => {
      return Math.max(min, Math.min(n, max));
    };

    /**
     * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     *
     * @param {Number} srcWidth width of source image
     * @param {Number} srcHeight height of source image
     * @param {Number} maxWidth maximum available width
     * @param {Number} maxHeight maximum available height
     * @return {Object} { width, height }
     */
    const calculateAspectRatioFit = (
      srcWidth: number,
      srcHeight: number,
      maxWidth: number,
      maxHeight: number
    ): { width: number; height: number } => {
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        width: srcWidth * ratio,
        height: srcHeight * ratio,
      };
    };

    watchEffect(() => {
      const min = 0;
      const max = 100;
      if (dynamicLongestDimension.value < min) {
        dynamicLongestDimension.value = min;
      } else if (dynamicLongestDimension.value > max) {
        dynamicLongestDimension.value = max;
      }
    });

    watchEffect(() => {
      let containerHeight = 0;
      let containerWidth = 0;
      if (scaleContainerRef.value) {
        console.log(scaleContainerRef.value.clientHeight);
        containerWidth = scaleContainerRef.value.clientWidth;
        containerHeight = scaleContainerRef.value.clientHeight;
      }

      if (humanScaleRef.value) {
        humanScaleRef.value.style.height = `${
          calculateAspectRatioFit(
            humanScaleInfo.width,
            humanScaleInfo.height,
            containerWidth,
            containerHeight
          ).height * 0.25
          // * clamp((dynamicLongestDimension.value * 0.33) / 100, 0, 1)
        }px`;
        console.log(humanScaleRef.value.style.height);
      }

      if (modelScaleRef.value) {
        modelScaleRef.value.style.height = `${
          calculateAspectRatioFit(
            modelScaleInfo.width,
            modelScaleInfo.height,
            containerWidth,
            containerHeight
          ).height * clamp(dynamicLongestDimension.value / 100, 0, 1)
        }px`;
        console.log(modelScaleRef.value.style.height);
      }
    });

    return {
      scaleContainerRef,
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
