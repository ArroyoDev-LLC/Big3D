<template>
  <div class="relative w-full h-full" style="height: 100vh">
    <div class="text-base text-4xl pt-9 font-bold leading-7">
      What is big<span>3D</span>.me!
    </div>
    <div
      class="
        text-white
        font-bold
        rounded-lg
        bg-yellow
        w-90
        p-6
        centered
        shadow-md
        text-4xl
      "
    >
      <a href="#" class="text-cyan-600 hover:text-cyan-700"> GO.BIG.NOW </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Story",
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

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bg-yellow {
  background-color:#FBBF24;
}
</style>
