<template>
  <div class="wizard">
    <div class="wizard__current">
      <div v-if="currentStep === WizardSteps.UPLOAD">Upload Files</div>
      <div v-else-if="currentStep === WizardSteps.DIMENSIONS">
        Enter Dimensions
      </div>
      <div v-else-if="currentStep === WizardSteps.CONNECTORS">
        Choose Connecters
      </div>
      <div v-else-if="currentStep === WizardSteps.DELIVERY">
        Choose Delivery
      </div>
      <div v-else-if="currentStep === WizardSteps.CHECKOUT">Checkout</div>
      <div v-else>INVALID STEP</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.UPLOAD)}`"
      class="wizard__step"
      @click="currentStep = WizardSteps.UPLOAD"
    >
      <div>File Upload</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.DIMENSIONS)}`"
      class="wizard__step"
      @click="currentStep = WizardSteps.DIMENSIONS"
    >
      <div>Enter Dimensions</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.CONNECTORS)}`"
      class="wizard__step"
      @click="currentStep = WizardSteps.CONNECTORS"
    >
      <div>Choose Connectors</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.DELIVERY)}`"
      class="wizard__step"
      @click="currentStep = WizardSteps.DELIVERY"
    >
      <div>Choose Delivery</div>
    </div>

    <div
      :class="`order-${getStepOrder(WizardSteps.CHECKOUT)}`"
      class="wizard__step"
      @click="currentStep = WizardSteps.CHECKOUT"
    >
      <div>Checkout</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export enum WizardSteps {
  UPLOAD,
  DIMENSIONS,
  CONNECTORS,
  DELIVERY,
  CHECKOUT,
}

export default defineComponent({
  name: "ModelGeneratorWizard",
  components: {},
  props: {},
  setup() {
    const currentStep = ref<WizardSteps>(WizardSteps.UPLOAD);

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
  @apply col-span-7 text-white;
}
</style>
