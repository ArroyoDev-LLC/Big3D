<script setup lang="ts">
import GoBigButton from "@/components/GoBigButton.vue";


</script>
<template>
  <div class="intro-container">
    <div class="image-container">
      <img src="Frame 1.png" class="w-full" />
    </div>
    <div class="intro-left-container">
      <div class="intro-header">
        <text class="sm:text-8xl">Stop Wondering.</text>
        <text class="sm:text-7xl">Think Big</text>
      </div>
      <text class="intro-subheader">
        Time for big toys! Generate full-size 3D model any form <br />
        you want and get constructor model of your dreams
      </text>
      <GoBigButton class="button" />
    </div>


  </div>
</template>

<style scoped lang="postcss">
.intro-container {
  @apply flex flex-col sm:flex-row justify-between relative;
}

.intro-left-container {
  @apply flex flex-col text-left justify-center sm:ml-12 sm:absolute px-4 sm:p-0 sm:bottom-0 z-40 mt-5 sm:mt-0 text-big3dBlack sm:text-white;
}

.intro-header {
  @apply pb-2 font-bold text-4xl flex flex-col;
}

.intro-subheader {
  @apply sm:text-white sm:text-2xl;
}

.button {
  @apply my-5 ml-10 sm:ml-0;
}

.image-container {
  @apply w-full sm:h-160 sm:overflow-hidden z-0;
  animation: fade-in;
  animation-duration: 3s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 100;
  }
}
</style>
