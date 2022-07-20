<template>
  <div @click="goToWizard" class="goBigButton">Go Big Now</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "GoBigButton",
  props: {
    relative: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const goToWizard = () => {
      const wizardElement = document.getElementById("generator-wizard");
      if (wizardElement) {
        wizardElement.scrollIntoView();
      }
    };
    return {
      goToWizard,
    };
  },
});
</script>

<style scoped>
.goBigButton {
  @apply text-black cursor-pointer hover:bg-gold hover:shadow-xl hover:scale-105 transform-gpu transition duration-500 ease-in-out
  font-bold
  rounded-lg
  bg-yellow
  w-64
  p-6

  shadow-md
  text-4xl;
}
</style>
