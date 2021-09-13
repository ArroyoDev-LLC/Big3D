<template>
  <div class="samples-page w-full h-full" style="width: 100%">
    <div class="font-bold text-2xl mb-6 text-center">
      Sometimes you just need to go <span>BIG</span>! Here are a few projects
      where a life size print was just too much fun to build
    </div>
    <div class="flex flex-wrap mb-6 justify-center">
      <p class="max-w-prose">
        Our original inspiration was a personal quest to build a lifesize Tesla
        Cybertruck for all the fans who may need to wait a little longer to pull
        that beast in to there garage. But in the process of building the model,
        we stumbled on an even better idea... The ability to build AN ANYTHING
        at all kinds of scales .Here are a few examples of some really fun
        projects build with big3D.me.
      </p>
    </div>

    <div class="flex justify-evenly sample-list">
      <div class="flex flex-col">
        <img src="../../public/sample1.png" />
        <div>African Elephant</div>
      </div>
      <div class="flex flex-col">
        <img src="../../public/sample2.png" />
        <div>RZ700 Turbo</div>
      </div>

      <div class="flex flex-col">
        <img src="../../public/sample3.png" />
        <div>Tesla CyberTruck</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Samples",
};
</script>

<style scoped>
span {
  color: #fbbf24;
}

.samples-page {
  @apply bg-gray-200 w-5/6 md:w-full p-7;
}

.sample-list {
  @apply bg-gray-50 w-5/6 md:w-full grid grid-cols-3 gap-4 border-t-2 border-b-2 p-7;
}
</style>
