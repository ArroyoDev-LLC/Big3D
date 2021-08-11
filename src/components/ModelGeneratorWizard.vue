<template>
  <div class="wizard">
    <div :class="`order-${activeStep + 1}`" class="wizard__current">
      <!-- ---------------------------------- -->
      <!-- --------- Upload Step --------------->
      <!-- ---------------------------------- -->
      <div
        v-show="currentStep.name === WizardSteps.UPLOAD"
        class="p-4 md:p-8 flex flex-col items-center h-full w-full"
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
              class="col-span-4 text-black p-4"
              max="100"
              min="1"
              name="longest-dimension-input"
              step="0.01"
              type="number"
            />
            <select
              id="unit-selector"
              v-model="longestDimensionUnit"
              :disabled="isLoading"
              class="col-span-2 bg-white p-4 text-black"
              name="unit-selector"
            >
              <option
                v-for="(unit, index) in unitOptions"
                :key="`${unit}-${index}`"
                :value="unit"
              >
                {{ unit }}
              </option>
            </select>
          </div>
        </div>
        <ModelUploader
          :class="disabledClasses"
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
      <!-- --------- Dimensions Step ----------->
      <!-- ---------------------------------- -->
      <div v-show="currentStep.name === WizardSteps.DIMENSIONS">
        {{ currentStep.label }}
      </div>

      <!-- ---------------------------------- -->
      <!-- --------- Connectors Step ----------->
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
      </div>

      <!-- ---------------------------------- -->
      <!-- --------- Delivery Step ------------->
      <!-- ---------------------------------- -->
      <div v-show="currentStep.name === WizardSteps.DELIVERY">
        <Delivery
          class="w-full h-full m-3"
          @toCheckout="setStep(activeStep + 1)"
        />
      </div>

      <!-- ---------------------------------- -->
      <!-- --------- Checkout Step ------------->
      <!-- ---------------------------------- -->
      <div v-show="currentStep.name === WizardSteps.CHECKOUT">
        {{ currentStep.label }}
      </div>
    </div>

    <!-- generate steps selectors -->
    <div
      v-for="(step, index) in steps"
      :key="`${step.name}-${index}`"
      :class="`order-${getStepOrder(step.name)}`"
      class="wizard__step"
      @click="setStep(step.name)"
    >
      <div>{{ step.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import ModelUploader from "@/components/ModelUploader.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import ConnectorView from "@/components/ConnectorView.vue";
import Delivery from "@/components/Delivery.vue";

enum WizardSteps {
  UPLOAD,
  DIMENSIONS,
  CONNECTORS,
  DELIVERY,
  CHECKOUT,
}

interface StepT {
  name: WizardSteps;
  isDisabled: boolean;
  label: string;
  title: string;
}

export default defineComponent({
  name: "ModelGeneratorWizard",
  components: {
    NextStepButton,
    ModelUploader,
    ConnectorView,
    Delivery,
  },
  props: {},
  setup() {
    const steps = reactive<StepT[]>([
      {
        name: WizardSteps.UPLOAD,
        isDisabled: false,
        label: "Upload Model",
        title: "Upload Low Poly 3D model here (.blend or .stl)",
      },
      {
        name: WizardSteps.DIMENSIONS,
        isDisabled: false,
        label: "Enter Dimensions",
        title: "Enter Dimensions",
      },
      {
        name: WizardSteps.CONNECTORS,
        isDisabled: false,
        label: "Choose Connectors",
        title: "Choose type of Connectors",
      },
      {
        name: WizardSteps.DELIVERY,
        isDisabled: false,
        label: "Choose Delivery",
        title: "Delivery Details",
      },
      {
        name: WizardSteps.CHECKOUT,
        isDisabled: false,
        label: "Checkout",
        title: "Checkout",
      },
    ]);

    const activeStep = ref<number>(0);
    const currentStep = computed(() => steps[activeStep.value]);
    const nextStep = computed(() => steps[activeStep.value + 1] || null);

    /**
     * state management for loading + disabled inputs
     */
    const isLoading = ref<boolean>(false);
    const disabledClasses = computed(() => ({
      "cursor-not-allowed": isLoading.value,
      "opacity-30": isLoading.value,
    }));

    /**
     * helpers for manipulating steps
     */
    const getStep = (step: number) => steps[step];
    const setStep = (step: number) => (activeStep.value = step);
    const enableStep = (step: number) => (steps[step].isDisabled = false);
    const disableStep = (step: number) => (steps[step].isDisabled = true);

    const getStepOrder = (step: WizardSteps) => step + 1;

    /**
     * handle state for file upload step
     * and validate dimensions
     */
    const modelFile = ref<File | null>(null);
    const handleModelUpload = async (files: FileList) => {
      console.log(files);
      modelFile.value = files[0];
      isLoading.value = true;
      await new Promise((r) => setTimeout(r, 5000));
      isLoading.value = false;
    };

    const longestDimension = ref<number>(0);
    const unitOptions = ref(["ft", "in", "m", "mm", "cm"]);
    const longestDimensionUnit = ref("ft");
    const isLongestDimensionValid = computed(() => longestDimension.value > 0);

    /**
     * prevent user from entering dimensions
     * greater than or less than specified value
     */
    watchEffect(() => {
      const min = 1;
      const max = 100;
      if (longestDimension.value < min) {
        longestDimension.value = min;
      } else if (longestDimension.value > max) {
        longestDimension.value = max;
      }
    });

    /**
     * handle state for connector step
     */
    const connectorInfo = reactive({
      connectors: 0,
      edges: 0,
    });

    const handleConnectorInput = (selection: string) => console.log(selection);

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
      longestDimensionUnit,
      isLongestDimensionValid,
      getStepOrder,
      getStep,
      setStep,
      enableStep,
      disableStep,
      handleModelUpload,
      handleConnectorInput,
    };
  },
});
</script>

<style lang="postcss" scoped>
.wizard {
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(18, minmax(0, 1fr));
  @apply md:m-8 m-4
  p-3
  bg-big3dBlack
  select-none;
}

.wizard__step {
  @apply col-span-1
  relative
  inline-block
  bg-yellow
  cursor-pointer;
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
</style>
