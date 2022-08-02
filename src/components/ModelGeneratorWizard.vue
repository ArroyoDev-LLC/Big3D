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
  component: string
  props: Object<unknown>
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
    const connectorType = computed(() => connector.value.type)

    const activeStep = ref<number>(0)

    /**
     * state management for loading + disabled inputs
     */

    /**
     * helpers for manipulating steps
     */
    const setStep = (step: number) => {
      activeStep.value = step
    }

    /**
     * handle state for file upload step
     * and validate dimensions
     */
    const modelFile = ref<File | null>(null)
    const longestDimension = ref<number>(0)
    const handleModelUpload = async (file: File, dimension: number) => {
      longestDimension.value = dimension
      modelFile.value = file
      await new Promise((r) => setTimeout(r, 5000))
    }
    const toCheckout = (deliveryOption: DeliveryOptions) => {
      isDIY.value = deliveryOption === DeliveryOptions.DIY
      console.log(activeStep.value)
      activeStep.value++
    }

    const isDIY = ref(false)

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
    const steps = computed<StepT[]>(() => [
      {
        name: WizardSteps.UPLOAD,
        isDisabled: false,
        label: 'Upload Model',
        title: 'Upload Low Poly 3D model here (.blend or .stl)',
        component: 'ModelUploadView',
        props: {
          title: 'Upload Low Poly 3D model here (.blend or .stl)',
          selectedLongestDimension: longestDimension.value,
          defaultFile: modelFile.value
        }
      },
      {
        name: WizardSteps.DIMENSIONS,
        isDisabled: true,
        label: 'Enter Dimensions',
        title: 'Confirm Dimensions',
        component: 'DimensionsView',
        props: {
          title: 'Confirm Dimensions',
          selectedLongestDimension: longestDimension.value
        }
      },
      {
        name: WizardSteps.CONNECTORS,
        isDisabled: true,
        label: 'Choose Connectors',
        title: 'Choose type of Connectors',
        component: 'ConnectorView',
        props: {
          title: 'Choose type of Connectors',
          connectorInfo
        }
      },
      {
        name: WizardSteps.DELIVERY,
        isDisabled: true,
        label: 'Choose Delivery',
        title: 'Delivery Details',
        component: 'Delivery',
        props: {
          title: 'Delivery Details',
          numConnectors: connectorInfo.connectors,
          numEdges: connectorInfo.edges
        }
      },
      {
        name: WizardSteps.CHECKOUT,
        isDisabled: true,
        label: 'Checkout',
        title: 'Checkout',
        component: 'DeliveryPaymentView',
        props: {
          title: 'Checkout',
          connectorType: connectorType.value.type,
          connectorInfo,
          isDIY: isDIY.value
        }
      }
    ])

    return {
      steps,
      activeStep,
      modelFile,
      connectorInfo,
      longestDimension,
      setStep,
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
      v-for="(step, index) in steps"
      :key="index"
      :class="activeStep === index ? 'w-full' : ''"
    >
      <div
        class="bg-black step"
        :class="
          activeStep === index
            ? 'sm:h-180 sm:w-full bg-black'
            : 'h-18 sm:h-180 sm:w-30 bg-yellow hover:bg-yellow-500 hover:text-white'
        "
      >
        <div v-if="activeStep === index">
          <slot :name="step.component">
            <component
              :is="step.component"
              v-bind="step.props"
              @nextStep="setStep(activeStep + 1)"
              @modelUpload="handleModelUpload"
              @dimensionUpdate="setLongestDimension"
              @toCheckout="toCheckout"
              @radioChange="handleConnectorInput"
            />
          </slot>
        </div>
        <div v-else class="minimized" @click="activeStep = index">
          <span>{{ step.label }}</span>
        </div>
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

.minimized {
  @apply transform-gpu sm:rotate-270 sm:translate-y-80 text-center cursor-pointer;
}

.wizard {
  @apply md:m-8 m-4
  shadow-xl
  bg-black
  select-none;
}
</style>
