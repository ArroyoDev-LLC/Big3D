<template>
  <div class="wizard">
    <div class="wizard__current" :class="`order-${activeStep + 1}`">
      <div
        v-show="currentStep.name === WizardSteps.UPLOAD"
        class="p-4 md:p-8 flex flex-col items-center h-full w-full"
      >
        <div class="text-lg md:text-3xl text-left w-full">
          {{ currentStep.title }}
        </div>
        <ModelUploader
          class="w-full md:w-5/6 h-full m-3"
          label="Drag’n’drop your model here"
          accept=".stl,.blend"
          bg-image-path="images/elephant-model.png"
          :is-loading="isLoading"
          :selected-model-name="isLoading ? modelFile.name : null"
          :handle-file-change="handleModelUpload"
          :error-message="null"
        />
        <NextStepButton
          v-if="nextStep && modelFile"
          class="self-end"
          :class="disabledClasses"
          :label="nextStep.label"
          :disabled="isLoading"
          @click="setStep(activeStep + 1)"
        />
      </div>
      <div v-show="currentStep.name === WizardSteps.DIMENSIONS">
        {{ currentStep.label }}
      </div>
      <div v-show="currentStep.name === WizardSteps.CONNECTORS">
        {{ currentStep.label }}
      </div>
      <div v-show="currentStep.name === WizardSteps.DELIVERY">
        <Delivery
          class="w-full h-full m-3"
          @toCheckout="setStep(activeStep + 1)"
        />
      </div>
      <div v-show="currentStep.name === WizardSteps.CHECKOUT">
        {{ currentStep.label }}
      </div>
    </div>

    <!-- generate steps selectors -->
    <div
      v-for="(step, index) in steps"
      :key="`${step.name}-${index}`"
      class="wizard__step"
      :class="`order-${getStepOrder(step.name)}`"
      @click="setStep(step.name)"
    >
      <div>{{ step.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import ModelUploader from "@/components/ModelUploader.vue";
import NextStepButton from "@/components/NextStepButton.vue";
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
  components: { NextStepButton, ModelUploader, Delivery },
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

    const isLoading = ref<boolean>(false);
    const disabledClasses = computed(() => ({
      "cursor-not-allowed": isLoading.value,
      "opacity-30": isLoading.value,
    }));

    const modelFile = ref<File | null>(null);

    const getStep = (step: number) => steps[step];
    const setStep = (step: number) => (activeStep.value = step);
    const enableStep = (step: number) => (steps[step].isDisabled = false);
    const disableStep = (step: number) => (steps[step].isDisabled = true);

    const getStepOrder = (step: WizardSteps) => step + 1;

    const handleModelUpload = async (files: FileList) => {
      console.log(files);
      modelFile.value = files[0];
      isLoading.value = true;

      await new Promise((r) => setTimeout(r, 5000));

      console.log(files);
      isLoading.value = false;
    };

    return {
      WizardSteps,
      steps,
      activeStep,
      currentStep,
      nextStep,
      isLoading,
      disabledClasses,
      modelFile,
      getStepOrder,
      getStep,
      setStep,
      enableStep,
      disableStep,
      handleModelUpload,
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
