<script setup lang="ts">
import GoBigButton from "@/components/GoBigButton.vue";

</script>
<template>
  <div class="flex flex-col sm:flex-row justify-between relative">
    <div class="w-full sm:h-160 sm:overflow-hidden image-container z-0">
      <img src="Frame 1.png" class="w-full" />
    </div>
    <div class="intro-left-container px-4 sm:p-0 sm:absolute sm:bottom-0 z-40 mt-5 sm:mt-0">
      <text class="font-bold text-4xl sm:text-8xl text-big3dBlack sm:text-white"> Stop wondering.</text>

      <text class="font-bold text-4xl sm:text-7xl pb-2 text-big3dBlack sm:text-white"> Think big</text>

      <text class="sm:text-white sm:text-2xl">
        Time for big toys! Generate full-size 3D model any form <br />
        you want and get constructor model of your dreams
      </text>
      <GoBigButton class="my-5 ml-10 sm:ml-0" />


    </div>


  </div>
</template>

<style scoped lang="postcss">
.intro-header {
  @apply font-black text-6xl text-yellow;
}

.intro-left-container {
  @apply flex flex-col text-left justify-center sm:ml-12 sm:absolute;
}

.image-container {
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
