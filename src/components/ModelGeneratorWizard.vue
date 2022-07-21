<script lang="ts">
import { storeToRefs } from 'pinia'
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'
import ModelUploader from '@/components/ModelUploader.vue'
import NextStepButton from '@/components/NextStepButton.vue'
import ConnectorView from '@/components/ConnectorView.vue'
import DimensionsView from '@/components/DimensionsView.vue'
import Delivery, { DeliveryOptions } from '@/components/Delivery.vue'
import DeliveryPaymentView from '@/components/DeliveryPaymentView.vue'

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
    NextStepButton,
    ModelUploader,
    DimensionsView,
    ConnectorView,
    Delivery,
    DeliveryPaymentView
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
    const setStep = (step: number) => (activeStep.value = step)
    const enableStep = (step: number) => (steps[step].isDisabled = false)
    const disableStep = (step: number) => (steps[step].isDisabled = true)

    const getStepOrder = (step: WizardSteps) => step

    /**
     * handle state for file upload step
     * and validate dimensions
     */
    const modelFile = ref<File | null>(null)
    const handleModelUpload = async (files: FileList) => {
      console.log(files)
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

    /**
     * handle state for connector step
     */
    const connectorInfo = reactive({
      connectors: 20,
      edges: 0
    })
    const connectorType = reactive({
      type: ''
    })

    const handleConnectorInput = (selection: string) => {
      const [type, dimension] = selection.split(':')
      connectorStore.changeConnector({ type, dimension })
      console.log(selection.split(':'))
      console.log(connector.value)

      if (connector.value.dimension === '3/4” (19.05 mm)') {
        connectorStore.changeConnectorPrice(2)
      } else if (connector.value.dimension === '1/2” (12.7 mm)') {
        connectorStore.changeConnectorPrice(1.5)
      } else if (connector.value.dimension === '1/4” (6.35 mm)') {
        connectorStore.changeConnectorPrice(1)
      } else null
    }

    return {
      connectorType,
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
      longestDimensionUnit,
      isLongestDimensionValid,
      getStepOrder,
      getStep,
      setStep,
      enableStep,
      disableStep,
      handleModelUpload,
      handleConnectorInput,
      toCheckout,
      isDIY
    }
  }
})
</script>

<template>
  <div class="flex justify-between">
    <div class="flex flex-col text-left ml-10">
      <div class="text-lg">
        <text>Order</text>
      </div>
      <div class="text-5xl font-bold">
        <text>It's time... <Span class="bg-yellow">lets go BIG!</Span></text>
      </div>
      <text class="text-lg"
        >Ordering has never been so easy. Upload your model image and follow the
        order steps.
      </text>
    </div>
  </div>

  <div class="wizard">
    <div :class="`order-${activeStep + 1}`" class="wizard__current">
      <!-- ---------------------------------- -->
      <!------------ Upload Step --------------->
      <!-- ---------------------------------- -->
      <div
        v-show="currentStep.name === WizardSteps.UPLOAD"
        class="p-4 md:p-8 grid items-center h-full w-full"
      >
        <div class="text-lg md:text-3xl text-left w-full">
          {{ currentStep.title }}
        </div>
        <div class="grid grid-cols-6 m-6 z-10">
          <div class="col-span-4 text-left text-yellow text-xl md:text-3xl">
            What will the longest dimension be for this model?
          </div>
          <div class="grid grid-cols-6 gap-4 items-center col-span-2">
            <input
              id="longest-dimension-input"
              v-model="longestDimension"
              :disabled="isLoading"
              class="col-span-4 text-white p-4 bg-big3dBlack border-b-2"
              name="longest-dimension-input"
              step="0.01"
              type="number"
              placeholder="in mm"
              @focus="$event.target.select()"
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
          v-if="nextStep && modelFile"
          :class="disabledClasses"
          :disabled="isLoading"
          :label="nextStep.label"
          class="self-end"
          @click="setStep(activeStep + 1)"
        />
      </div>

      <!-- ---------------------------------- -->
      <!------------ Dimensions Step ----------->
      <!-- ---------------------------------- -->
      <div
        v-if="currentStep.name === WizardSteps.DIMENSIONS"
        class="p-4 md:p-8 h-full w-full"
      >
        <DimensionsView
          :title="currentStep.title"
          :selected-longest-dimension="longestDimension"
        />
        <div class="flex justify-end md:p-4">
          <NextStepButton
            v-if="nextStep && modelFile"
            :class="disabledClasses"
            :disabled="isLoading"
            :label="nextStep.label"
            class="self-end absolute"
            @click="setStep(activeStep + 1)"
          />
        </div>
      </div>

      <!-- ---------------------------------- -->
      <!------------ Connectors Step ----------->
      <!-- ---------------------------------- -->
      <div
        v-show="currentStep.name === WizardSteps.CONNECTORS"
        class="p-4 md:p-8 h-full w-full"
      >
        <ConnectorView
          :connector-info="connectorInfo"
          :title="currentStep.title"
          @radioChange="handleConnectorInput"
        />
        <div class="flex justify-end mt-20 md:p-4">
          <NextStepButton
            v-if="nextStep && modelFile"
            :class="disabledClasses"
            :disabled="isLoading"
            :label="nextStep.label"
            class="self-end absolute"
            @click="setStep(activeStep + 1)"
          />
        </div>
      </div>

      <!-- ---------------------------------- -->
      <!------------ Delivery Step ------------->
      <!-- ---------------------------------- -->
      <div v-show="currentStep.name === WizardSteps.DELIVERY">
        <Delivery
          :connector-type="connectorType.type"
          :num-connectors="connectorInfo.connectors"
          :num-edges="connectorInfo.edges"
          class="w-full h-full m-3"
          @toCheckout="toCheckout"
        />
      </div>

      <!-- ---------------------------------- -->
      <!------------ Checkout Step ------------->
      <!-- ---------------------------------- -->
      <div v-show="currentStep.name === WizardSteps.CHECKOUT">
        <DeliveryPaymentView
          :connector-type="connectorType.type"
          :connector-info="connectorInfo"
          :is-d-i-y="isDIY"
        />
      </div>
    </div>

    <!-- generate steps selectors -->
    <div
      v-for="(step, index) in steps"
      :key="`${step.name}-${index}`"
      :class="`order-${getStepOrder(step.name)}`"
      class="wizard__step"
      @click="step.isDisabled ? null : setStep(step.name)"
    >
      <div>{{ step.label }}</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
