<template>
  <div class="relative w-full h-full" style="height: 100vh">
    <div class="storyHeader">What is big<span>3D</span>.me?</div>
    <div class="p-8">
      <p>What all comes included in your 3D print with BIG3D?</p>
    </div>
      <GoBigButton @click="$emit('scrollMeTo')" />


    <!-- Download List -->
    <div class="container mx-auto">
      <ul class="list-disc space-y-2 download-list flex justify-center object-center">
        <li class="flex items-start download-list-item">
          <span class="h-6 flex items-center sm:h-7">
            <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p class="ml-2">
            Professionally printed <code class="text-sm font-bold text-gray-900">joints, skins, and labels.</code>
          </p>
        </li>
        <li class="flex items-start download-list-item">
          <span class="h-6 flex items-center sm:h-7">
            <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p class="ml-2">
            Sticks and built-in support.
          </p>
        </li>
        <li class="flex items-start download-list-item">
          <span class="h-6 flex items-center sm:h-7">
            <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p class="ml-2">Lighting elements</p>
        </li>
        <li class="flex items-start download-list-item">
          <span class="h-6 flex items-center sm:h-7">
            <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p class="ml-2">DIY 3D printing and Cut Sheet options.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GoBigButton from "@/components/GoBigButton";

export default {
  name: "Story",
  components: {
    GoBigButton,
  },
};
</script>

<style scoped>
span {
  color: #FBBF24;
  outline: black;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.storyHeader {
  @apply text-3xl md:text-5xl pt-6 text-base leading-6 font-bold sm:leading-7 ;
}
.goBigButton {
  @apply text-black
  font-bold
  rounded-lg
  bg-yellow
  w-64
  p-6
  centered
  shadow-md
  text-4xl;
}

.download-list {
  @apply bg-gray-200 w-5/6 md:w-full grid grid-cols-3 gap-4 border-t-2 border-b-2 p-7 ;
}

.download-list-item {
  @apply bg-gray-50 rounded-lg p-1;
}

</style>
