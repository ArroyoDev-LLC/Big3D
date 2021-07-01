<template>
  <div class="relative w-full h-full p-8" style="height: 100vh">
    <div class="font-bold text-2xl mb-6">
      Sometimes you just need to go <span>BIG</span>! Here are a few projects
      where a life size print was just too much fun to build
    </div>
    <div class="flex flex-wrap mb-6">
      Our original inspiration was a personal quest to build a lifesize Tesla
      Cybertruck for all the fans who may need to wait a little longer to pull
      that beast in to there garage. But in the process of building the model,
      we stumbled on an even better idea... The ability to build AN ANYTHING at
      all kinds of scales .Here are a few examples of some really fun projects
      build with big3D.me.
    </div>

    <div class="flex justify-evenly">
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
  color: yellow;
}
</style>
