<script lang="ts">
import { storeToRefs } from 'pinia'
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'
import ModelUploadView from '@/components/ModelUploadView.vue'
import ConnectorView from '@/components/ConnectorView.vue'
import DimensionsView from '@/components/DimensionsView.vue'
import Delivery, { DeliveryOptions } from '@/components/Delivery.vue'
import DeliveryPaymentView from '@/components/DeliveryPaymentView.vue'
import Drawer from '@/components/Drawer.vue'

enum WizardSteps {
  UPLOAD,
  DIMENSIONS,
  CONNECTORS,
  DELIVERY,
  CHECKOUT
}

interface StepT {
  name: WizardSteps
  isDisabled: boolean
  label: string
  title: string
}

export default defineComponent({
  name: 'ModelGeneratorWizard',
  components: {
    DimensionsView,
    ConnectorView,
    Delivery,
    DeliveryPaymentView,
    ModelUploadView
  },
  props: {},
  setup() {
    const connectorStore = useConnectorStore()
    const { connector } = storeToRefs(connectorStore)

    const steps = reactive<StepT[]>([
      {
        name: WizardSteps.UPLOAD,
        isDisabled: false,
        label: 'Upload Model',
        title: 'Upload Low Poly 3D model here (.blend or .stl)'
      },
      {
        name: WizardSteps.DIMENSIONS,
        isDisabled: true,
        label: 'Enter Dimensions',
        title: 'Confirm Dimensions'
      },
      {
        name: WizardSteps.CONNECTORS,
        isDisabled: true,
        label: 'Choose Connectors',
        title: 'Choose type of Connectors'
      },
      {
        name: WizardSteps.DELIVERY,
        isDisabled: true,
        label: 'Choose Delivery',
        title: 'Delivery Details'
      },
      {
        name: WizardSteps.CHECKOUT,
        isDisabled: true,
        label: 'Checkout',
        title: 'Checkout'
      }
    ])

    const activeStep = ref<number>(0)
    const currentStep = computed(() => steps[activeStep.value])
    const nextStep = computed(() => steps[activeStep.value + 1] || null)

    /**
     * state management for loading + disabled inputs
     */
    const isLoading = ref<boolean>(false)
    const disabledClasses = computed(() => ({
      'cursor-not-allowed': isLoading.value,
      'opacity-30': isLoading.value
    }))

    /**
     * helpers for manipulating steps
     */
    const getStep = (step: number) => steps[step]
    const setStep = (step: number) => {
      activeStep.value = step
    }
    const enableStep = (step: number) => (steps[step].isDisabled = false)
    const disableStep = (step: number) => (steps[step].isDisabled = true)

    const getStepOrder = (step: WizardSteps) => step

    /**
     * handle state for file upload step
     * and validate dimensions
     */
    const modelFile = ref<File | null>(null)
    const handleModelUpload = async (files: FileList) => {
      modelFile.value = files[0]
      isLoading.value = true
      await new Promise((r) => setTimeout(r, 5000))
      isLoading.value = false
    }
    const toCheckout = (deliveryOption: DeliveryOptions) => {
      isDIY.value = deliveryOption === DeliveryOptions.DIY
      setStep(activeStep.value + 1)
    }

    const isDIY = ref(false)

    const longestDimension = ref<number>(0)
    const unitOptions = ref(['ft', 'in', 'm', 'mm', 'cm'])
    const longestDimensionUnit = ref('ft')
    const isLongestDimensionValid = computed(() => longestDimension.value > 0)

    const setLongestDimension = (dimension: number) => {
      longestDimension.value = dimension
    }

    /**
     * handle state for connector step
     */
    const connectorInfo = reactive({
      connectors: 20,
      edges: 0
    })

    const handleConnectorInput = (selection: string) => {
      const [type, dimension] = selection.split(':')
      connectorStore.changeConnector({ type, dimension })

      if (connector.value.dimension === '3/4” (19.05 mm)') {
        connectorStore.changeConnectorPrice(2)
      } else if (connector.value.dimension === '1/2” (12.7 mm)') {
        connectorStore.changeConnectorPrice(1.5)
      } else if (connector.value.dimension === '1/4” (6.35 mm)') {
        connectorStore.changeConnectorPrice(1)
      } else null
    }

    return {
      WizardSteps,
      steps,
      activeStep,
      currentStep,
      nextStep,
      isLoading,
      disabledClasses,
      modelFile,
      connectorInfo,
      longestDimension,
      unitOptions,
      getStepOrder,
      getStep,
      setStep,
      enableStep,
      disableStep,
      handleModelUpload,
      handleConnectorInput,
      toCheckout,
      isDIY,
      setLongestDimension
    }
  }
})
</script>

<template>
  <div class="flex justify-between dark:text-white mb-12">
    <div class="flex flex-col text-left ml-10">
      <div class="text-lg">
        <text>Order</text>
      </div>
      <div class="text-5xl font-bold">
        <text
          >It's time...
          <span class="bg-yellow dark:text-gray-500">lets go BIG!</span></text
        >
      </div>
      <text class="text-lg"
        >Ordering has never been so easy. Upload your model image and follow the
        order steps.
      </text>
    </div>
  </div>
  <div
    class="flex sm:flex-row flex-col wizard border-10 border-ridge border-amber rounded-lg"
  >
    <div
      class="step bg-black"
      :class="
        activeStep === 0
          ? 'sm:h-180 sm:w-full bg-black'
          : 'h-18 sm:h-180 sm:w-1 bg-yellow hover:bg-yellow-500 hover:text-white'
      "
    >
      <div v-show="activeStep === 0">
        <ModelUploadView
          :title="currentStep.title"
          @dimensionSelect="setLongestDimension"
          @nextStep="setStep(activeStep + 1)"
        />
      </div>
      <div
        v-show="activeStep !== 0"
        class="transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer"
        @click="activeStep = 0"
      >
        <span>Upload Model</span>
      </div>
    </div>
    <div
      class="step"
      :class="
        activeStep === 1
          ? 'sm:h-180 sm:w-full bg-black'
          : 'h-18 sm:h-180 sm:w-1 bg-yellow hover:bg-yellow-500  hover:text-white'
      "
    >
      <div v-show="activeStep === 1">
        <DimensionsView
          v-if="activeStep === 1"
          :title="currentStep.title"
          :selected-longest-dimension="longestDimension"
          @nextStep="setStep(activeStep + 1)"
        />
      </div>
      <div
        v-show="activeStep !== 1"
        class="transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer"
        @click="activeStep = 1"
      >
        <span>Enter Dimension</span>
      </div>
    </div>
    <div
      class="step"
      :class="
        activeStep === 2
          ? 'sm:h-180 sm:w-full bg-black'
          : 'h-18 sm:h-180 sm:w-1 bg-yellow hover:bg-yellow-500  hover:text-white'
      "
    >
      <div v-show="activeStep === 2">
        <ConnectorView
          :connector-info="connectorInfo"
          :title="currentStep.title"
          @radioChange="handleConnectorInput"
          @nextStep="setStep(activeStep + 1)"
        />
      </div>
      <div
        v-show="activeStep !== 2"
        class="transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer"
        @click="activeStep = 2"
      >
        <span>Choose Connectors</span>
      </div>
    </div>
    <div
      class="step"
      :class="
        activeStep === 3
          ? 'sm:h-180 sm:w-full bg-black'
          : 'h-18 sm:h-180 sm:w-1 bg-yellow hover:bg-yellow-500  hover:text-white'
      "
    >
      <div v-show="activeStep === 3">
        <div v-show="currentStep.name === WizardSteps.DELIVERY">
          <Delivery
            :num-connectors="connectorInfo.connectors"
            :num-edges="connectorInfo.edges"
            class="w-full h-full m-3"
            @toCheckout="toCheckout"
          />
        </div>
      </div>
      <div
        v-show="activeStep !== 3"
        class="transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer"
        @click="activeStep = 3"
      >
        <span>Choose Delivery</span>
      </div>
    </div>
    <div
      class="step"
      :class="
        activeStep === 4
          ? 'sm:h-180 sm:w-full bg-black'
          : 'h-18 sm:h-180 sm:w-1 bg-yellow hover:bg-yellow-500  hover:text-white'
      "
    >
      <div v-show="activeStep === 4" class="py-16 sm:p-20">
        <DeliveryPaymentView
          :connector-info="connectorInfo"
          :is-d-i-y="isDIY"
        />
      </div>
      <div
        v-show="activeStep !== 4"
        class="transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer"
        @click="activeStep = 4"
      >
        <span>Checkouts</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.step {
  @apply overflow-hidden;
  transition: all 0.2s;
}

.wizard {
  min-height: 30rem;
  display: grid;
  grid-template-columns: repeat(18, minmax(0, 1fr));
  @apply md:m-8 m-4
  shadow-xl
  bg-big3dBlack
  select-none;
}

.wizard__step {
  @apply col-span-1
  border-b-2
  sm:border-b-0
  border-r-0
  sm:border-r-2
  border-black
  sm:hover:bg-gold
  relative
  inline-block
  bg-yellow
  cursor-pointer
  h-full;
}

.wizard__step div {
  @apply absolute text-lg font-bold whitespace-nowrap top-1/2 left-1/2;
  -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.wizard__current {
  grid-column: span 13 / span 13;
  @apply text-white
  flex justify-center items-center;
}

@media (max-width: 640px) {
  .wizard {
    min-height: 50rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .wizard__step {
    @apply row-span-1 py-2;
    display: initial;
    position: initial;
  }

  .wizard__step div {
    position: initial;
    @apply text-lg font-bold whitespace-nowrap;
    -moz-transform: translateX(0%) translateY(0%) rotate(0deg);
    -webkit-transform: translateX(0%) translateY(0%) rotate(0deg);
    transform: translateX(0%) translateY(0%) rotate(0deg);
  }

  .wizard__current {
    grid-column: span 1 / span 1;
    grid-row: span 13 / span 13;
  }
}
</style>
