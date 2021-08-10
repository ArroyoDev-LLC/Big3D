<template>
  <div class="wizard">
    <div class="wizard__current">
      <div v-if="currentStep.name === WizardSteps.UPLOAD">
        {{ currentStep.label }}
      </div>
      <div v-else-if="currentStep.name === WizardSteps.DIMENSIONS">
        {{ currentStep.label }}
      </div>
      <div v-else-if="currentStep.name === WizardSteps.CONNECTORS">
        {{ currentStep.label }}
      </div>
      <div v-else-if="currentStep.name === WizardSteps.DELIVERY">
        {{ currentStep.label }}
      </div>
      <div v-else-if="currentStep.name === WizardSteps.CHECKOUT">
        {{ currentStep.label }}
      </div>
      <div v-else>INVALID STEP</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.UPLOAD)}`"
      class="wizard__step"
      @click="setStep(WizardSteps.UPLOAD)"
    >
      <div>File Upload</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.DIMENSIONS)}`"
      class="wizard__step"
      @click="setStep(WizardSteps.DIMENSIONS)"
    >
      <div>Enter Dimensions</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.CONNECTORS)}`"
      class="wizard__step"
      @click="setStep(WizardSteps.CONNECTORS)"
    >
      <div>Choose Connectors</div>
    </div>

    <div
      @click="setStep(WizardSteps.DELIVERY)"
      :class="`order-${getStepOrder(WizardSteps.DELIVERY)}`"
      class="wizard__step"
    >
      <div>Choose Delivery</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.CHECKOUT)}`"
      class="wizard__step"
      @click="setStep(WizardSteps.CHECKOUT)"
    >
      <div>Checkout</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

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
}

export default defineComponent({
  name: "ModelGeneratorWizard",
  components: {},
  props: {},
  setup() {
    const steps = reactive<StepT[]>([
      {
        name: WizardSteps.UPLOAD,
        isDisabled: false,
        label: "Upload Files",
      },
      {
        name: WizardSteps.DIMENSIONS,
        isDisabled: false,
        label: "Enter Dimensions",
      },
      {
        name: WizardSteps.CONNECTORS,
        isDisabled: false,
        label: "Choose Connectors",
      },
      {
        name: WizardSteps.DELIVERY,
        isDisabled: false,
        label: "Choose Delivery",
      },
      {
        name: WizardSteps.CHECKOUT,
        isDisabled: false,
        label: "Checkout",
      },
    ]);

    const activeStep = ref<number>(0);
    const currentStep = computed(() => steps[activeStep.value]);

    const getStep = (step: number) => steps[step];
    const setStep = (step: number) => (activeStep.value = step);
    const enableStep = (step: number) => (steps[step].isDisabled = false);
    const disableStep = (step: number) => (steps[step].isDisabled = true);

    const getStepOrder = (step: WizardSteps) => {
      if (step === WizardSteps.UPLOAD) return 1;
      else if (step === WizardSteps.DIMENSIONS) return 2;
      else if (step === WizardSteps.CONNECTORS) return 3;
      else if (step === WizardSteps.DELIVERY) return 4;
      else if (step === WizardSteps.CHECKOUT) return 5;
      else return 6;
    };

    return {
      WizardSteps,
      currentStep,
      getStepOrder,
      getStep,
      setStep,
      enableStep,
      disableStep,
    };
  },
});
</script>

<style lang="postcss" scoped>
.wizard {
  height: 30rem;
  @apply grid
  grid-cols-12
  md:m-8 m-4
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
  @apply col-span-7
    text-white
    flex justify-center items-center;
}
</style>
