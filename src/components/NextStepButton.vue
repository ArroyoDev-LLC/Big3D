<template>
  <button
    class="
      flex
      justify-center
      items-center
      bg-white
      font-bold
      px-8
      py-3
      text-black
    "
  >
    <span class="mr-2">
      {{ label }}
    </span>
    <svg
      v-if="showIcon"
      class="bounce-right text-big3dBlack"
      fill="none"
      height="16"
      stroke="currentColor"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222 15.778L6.808 14.364L12.172 8.99998H0V6.99998H12.172Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NextStepButton",
  props: {
    label: {
      type: String,
      required: false,
      default: "Next Step",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
/* right arrow bounce effect */
.bounce-right {
  -webkit-animation: bounceRight 2s infinite;
  animation: bounceRight 2s infinite;
}

@-webkit-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateX(-4px);
    transform: translateX(-4px);
  }
  60% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
}

@-moz-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(-2px);
  }
}

@keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -ms-transform: translateX(-4px);
    transform: translateX(-4px);
  }
  60% {
    -ms-transform: translateX(-2px);
    transform: translateX(-2px);
  }
}
</style>
