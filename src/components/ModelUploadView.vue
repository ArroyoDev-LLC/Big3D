<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import ModelUploader from '@/components/ModelUploader.vue'
import NextStepButton from '@/components/NextStepButton.vue'

export default defineComponent({
  name: 'ModelUploadView',
  components: {
    ModelUploader,
    NextStepButton
  },
  props: {
    title: {
      type: String,
      default: 'Upload Model'
    }
  },
  setup(props, { emit }) {
    const longestDimension = ref()
    const disabledClasses = computed(() => ({
      'cursor-not-allowed': props.isLoading,
      'opacity-30': props.isLoading
    }))
    const isLongestDimensionValid = computed(() => longestDimension.value > 0)
    const isLoading = ref<boolean>(false)
    const modelFile = ref<File | null>(null)
    const handleModelUpload = async (files: FileList) => {
      modelFile.value = files[0]
      isLoading.value = true
      await new Promise((r) => setTimeout(r, 5000))
      isLoading.value = false
    }
    /**
     * prevent user from entering dimensions
     * greater than or less than specified value
     */
    watchEffect(() => {
      const min = 0
      const max = 10000
      if (longestDimension.value < min) {
        longestDimension.value = min
      } else if (longestDimension.value > max) {
        longestDimension.value = max
      }
    })
    return {
      longestDimension,
      disabledClasses,
      handleModelUpload,
      isLongestDimensionValid,
      modelFile,
      isLoading
    }
  }
})
</script>

<template>
  <div class="p-4 md:p-8 grid items-center h-full w-full">
    <div class="text-lg md:text-3xl text-left w-full">
      {{ title }}
    </div>
    <div class="grid grid-cols-6 m-6 z-10">
      <div
        class="col-span-6 sm:col-span-4 text-left text-yellow text-xl md:text-3xl"
      >
        What will the longest dimension be for this model?
      </div>
      <div class="sm:grid sm:grid-cols-6 gap-4 items-center col-span-2">
        <input
          id="longest-dimension-input"
          v-model="longestDimension"
          :disabled="isLoading"
          class="sm:col-span-4 p-4 bg-big3dBlack border-b-2"
          name="longest-dimension-input"
          step="0.01"
          type="number"
          placeholder="in mm"
          @focus="$event.target.select()"
          @change="$emit('dimensionSelect', longestDimension)"
        />
      </div>
    </div>
    <ModelUploader
      :class="disabledClasses && { 'opacity-30': !isLongestDimensionValid }"
      :disabled="isLoading || !isLongestDimensionValid"
      :error-message="null"
      :handle-file-change="handleModelUpload"
      :is-loading="isLoading"
      :selected-model-name="isLoading ? modelFile.name : null"
      accept=".stl,.blend"
      bg-image-path="images/elephant-model.png"
      class="w-full md:w-5/6 h-full m-3"
      label="Drag’n’drop your model here"
    />
    <NextStepButton
      v-if="modelFile"
      :class="disabledClasses"
      :disabled="isLoading"
      label="Next Step"
      class="w-full m-3"
      @click="$emit('nextStep')"
    />
  </div>
</template>
