<template>
  <div class="relative w-full h-full" style="height: 100vh">
    <div class="text-8xl text-black font-bold">
      What is big<span>3D</span>.me?
    </div>
    <div
      class="
        text-black
        font-bold
        rounded-lg
        bg-yellow
        w-64
        p-6
        centered
        shadow-md
        text-4xl
      "
    >
      go BIG now
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
  color: yellow;
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
</style>
