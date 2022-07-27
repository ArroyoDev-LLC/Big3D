<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import type { AdvancedDimensionFormSchema } from '@/components/AdvancedDimensionsForm.vue'
import AdvancedDimensionsForm from '@/components/AdvancedDimensionsForm.vue'

export interface ScaleInfoT {
  width: number
  height: number
  src: string
}

export default defineComponent({
  name: 'DimensionsView',
  components: { AdvancedDimensionsForm },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    humanScaleSrc: {
      type: String,
      required: false,
      default: '/images/human-for-scale.png'
    },
    modelScaleSrc: {
      type: String,
      required: false,
      default: '/images/placeholder-model-for-scale.png'
    },
    selectedLongestDimension: {
      type: Number,
      required: false,
      default: 50
    }
  },
  emits: [],

  setup(props, { emit }) {
    const dynamicLongestDimension = ref<number>(
      props.selectedLongestDimension as number
    )
    const scaleContainerRef = ref<HTMLDivElement | null>(null)
    const humanScaleRef = ref<HTMLImageElement | null>(null)
    const modelScaleRef = ref<HTMLImageElement | null>(null)
    const isAdvancedFormActive = ref<boolean>(false)

    const advancedDimensionsFormData = ref<AdvancedDimensionFormSchema>({
      longestDimension: 0,
      gap: 0,
      supportScale: 0,
      coreSizeMultiplier: 0,
      fixtureShellThicknessMultiplier: 0,
      labelSizeMultiplier: 0,
      labelWidthMultiplier: 0
    })

    const handleAdvancedFormUpdate = (
      formData: AdvancedDimensionFormSchema
    ) => {
      console.log(formData)
    }

    const humanScaleInfo = reactive<ScaleInfoT>({
      height: 0,
      width: 0,
      src: props.humanScaleSrc as string
    })

    const modelScaleInfo = reactive<ScaleInfoT>({
      height: 0,
      width: 0,
      src: props.modelScaleSrc as string
    })

    const handleHumanScaleLoad = (event: Event) => {
      const img = event.target as HTMLImageElement
      if (img) {
        humanScaleInfo.width = img.clientWidth
        humanScaleInfo.height = img.clientHeight
      }
    }

    const handleModelScaleLoad = (event: Event) => {
      const img = event.target as HTMLImageElement
      if (img) {
        modelScaleInfo.width = img.clientWidth
        modelScaleInfo.height = img.clientHeight
      }
    }

    /**
     * clamps a number between a range
     */
    const clamp = (n: number, min: number, max: number): number => {
      return Math.max(min, Math.min(n, max))
    }

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
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
      return {
        width: srcWidth * ratio,
        height: srcHeight * ratio
      }
    }

    watchEffect(() => {
      const min = 0
      const max = 10000
      if (dynamicLongestDimension.value < min) {
        dynamicLongestDimension.value = min
      } else if (dynamicLongestDimension.value > max) {
        dynamicLongestDimension.value = max
      }
    })

    watchEffect(() => {
      let containerHeight = 0
      let containerWidth = 0
      if (scaleContainerRef.value) {
        containerWidth = scaleContainerRef.value.clientWidth
        containerHeight = scaleContainerRef.value.clientHeight
      }

      if (humanScaleRef.value) {
        humanScaleRef.value.style.height = `${
          calculateAspectRatioFit(
            humanScaleInfo.width,
            humanScaleInfo.height,
            containerWidth,
            containerHeight
          ).height * clamp(1676 / 10000, 0, 1)
        }px`
      }

      if (modelScaleRef.value) {
        modelScaleRef.value.style.height = `${
          calculateAspectRatioFit(
            modelScaleInfo.width,
            modelScaleInfo.height,
            containerWidth,
            containerHeight
          ).height * clamp(dynamicLongestDimension.value / 10000, 0, 1)
        }px`
      }
      emit('dimensionUpdate', dynamicLongestDimension.value)
    })

    return {
      scaleContainerRef,
      humanScaleRef,
      modelScaleRef,
      dynamicLongestDimension,
      isAdvancedFormActive,
      advancedDimensionsFormData,
      handleHumanScaleLoad,
      handleModelScaleLoad,
      handleAdvancedFormUpdate
    }
  }
})
</script>

<template>
  <div class="p-4 md:p-8 h-full w-full">
    <div class="grid grid-cols-12 gap-4 h-full">
      <AdvancedDimensionsForm
        v-if="isAdvancedFormActive"
        class="col-span-12 md:col-span-7"
        :advanced-dimensions-form-data="advancedDimensionsFormData"
        @formUpdate="handleAdvancedFormUpdate"
      />
      <div
        v-else
        class="col-span-12 md:col-span-7 grid grid-cols-7 grid-rows-2 gap-3 md:grid-rows-3 m-6"
      >
        <span class="col-span-7 text-left text-xl md:text-3xl">
          {{ title }}
        </span>
        <div
          class="col-span-5 self-center text-left text-yellow text-lg md:text-3xl"
        >
          What will the longest dimension be for this model?
        </div>
        <div class="col-span-2 self-center">
          <input
            id="dynamic-longest-dimension-input"
            v-model="dynamicLongestDimension"
            class="w-full p-4 bg-big3dBlack border-b-2"
            name="dynamic-longest-dimension-input"
            type="number"
            placeholder="in mm"
          />
        </div>
      </div>

      <div class="col-span-12 md:col-span-5 grid grid-rows-5">
        <div class="row-span-1 text-xl md:text-2xl">APPROXIMATE SIZE</div>
        <div
          ref="scaleContainerRef"
          class="row-span-4 border border-white relative"
        >
          <div class="human-scale-container absolute bottom-0 left-0">
            <img
              ref="humanScaleRef"
              class="transition-all"
              :src="humanScaleSrc"
              alt="human-scale"
              @load="handleHumanScaleLoad"
            />
          </div>
          <div class="model-scale-container absolute bottom-0 right-0">
            <img
              ref="modelScaleRef"
              class="transition-all"
              :src="modelScaleSrc"
              alt="model-scale"
              @load="handleModelScaleLoad"
            />
          </div>
        </div>
      </div>

      <button
        v-if="isAdvancedFormActive === false"
        class="underline cursor-pointer"
        @click="isAdvancedFormActive = !isAdvancedFormActive"
      >
        Advanced
      </button>
      <button
        v-else
        class="underline cursor-pointer col-span-12 mb-2"
        @click="isAdvancedFormActive = !isAdvancedFormActive"
      >
        Show Less
      </button>
    </div>
    <div class="flex justify-end md:p-4">
      <NextStepButton
        label="Next Step"
        class="self-end sm:absolute"
        @click="$emit('nextStep')"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
