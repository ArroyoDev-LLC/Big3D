<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, ref, watchEffect } from 'vue'
import NextStepButton from '@/components/NextStepButton.vue'
import RadioGroup from '@/components/RadioGroup.vue'

export default defineComponent({
  name: 'ConnectorView',
  components: { NextStepButton, RadioGroup },
  emits: ['radioChange'],
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    connectorInfo: {
      type: Object as PropType<{ connectors: number; edges: number }>,
      required: true,
      default: () => ({ connectors: 0, edges: 0 })
    }
  },

  // setup function
  setup(props, { emit }) {
    const currentSelection = ref('')

    const woodValues = ref([
      { value: '3/4” (19.05 mm)' },
      { value: '1/2” (12.7 mm)' },
      { value: '1/4” (6.35 mm)' }
    ])

    const pvcValues = ref([
      { value: '3/4” (19.05 mm)' },
      { value: '1/2” (12.7 mm)' }
    ])

    watchEffect(() => {
      emit('radioChange', currentSelection.value)
    })

    const changeSelection = (selection: string) => {
      currentSelection.value = selection
    }

    return {
      currentSelection,
      woodValues,
      pvcValues,
      changeSelection
    }
  }
})
</script>

<template>
  <div>
    <div class="p-4 md:p-8 h-full w-full">
      <div class="text-left text-base md:text-3xl flex justify-between">
        {{ title }}

        <div>
          <span class="mx-2">
            <span class="text-yellow">{{ connectorInfo.connectors }}</span>
            Connectors
          </span>
          <span class="mx-2">
            <span class="text-yellow">{{ connectorInfo.edges }}</span>
            Edges
          </span>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-4 text-left mt-6">
        <div class="wood-option">
          <span class="text-sm"> Square Wood Dowels </span>
          <RadioGroup
            container-classes="w-full md:w-1/2 mt-4 grid grid-cols-6 gap-3 ml-5"
            item-classes="col-span-5 cursor-pointer"
            group-name="wood"
            :radio-group="woodValues"
          />
        </div>

        <img class="wood-option-img" src="/images/square-wood-dowel.png" />
        <div class="pvc-option opacity-30">
          <span class="text-sm"> Round PVC Tubing (Coming Soon) </span>
          <RadioGroup
            :radio-group="pvcValues"
            disabled
            group-name="pvc"
            container-classes="w-full md:w-1/2 mt-4 grid grid-cols-6 gap-3 ml-5"
            item-classes="col-span-5"
          />
        </div>
        <img class="pvc-option-img" src="/images/round-pvc-tubing.png" />
      </div>
      <div class="flex justify-end mt-20 md:p-4">
        <NextStepButton
          label="Next Step"
          class="self-end absolute"
          @click="$emit('nextStep')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wood-option,
.pvc-option {
  @apply col-span-6 md:col-span-4 p-1 md:p-3 border-t-4 border-big3dGray border-dotted;
}

.wood-option-img,
.pvc-option-img {
  @apply h-24 col-span-6 md:col-span-2 justify-self-center md:justify-self-end;
}
</style>
