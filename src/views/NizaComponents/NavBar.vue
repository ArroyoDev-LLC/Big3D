<template>
  <div class="flex flex-col sm:flex-row">
    <div><img src="big3dlogo.png" class="w-full sm:w-20" /></div>
    <div class="sm:flex sm:justify-evenly">
      <div @click="tabClick('home')" class="cursor-pointer">Home</div>
      <div @click="tabClick('story')" class="cursor-pointer">Story+</div>
      <div @click="tabClick('samples')" class="cursor-pointer">Samples+</div>
      <div @click="tabClick('gallery')" class="cursor-pointer">Gallery</div>
      <div @click="tabClick('pricing')" class="cursor-pointer">Pricing</div>
      <div @click="tabClick('printing')" class="cursor-pointer">Printing</div>
      <div @click="tabClick('purchase')" class="cursor-pointer">Purchase</div>
      <div class="bg-yellow cursor-pointer">Login</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  setup(props, { emit }) {
    const tabClick = (section: string) => {
      emit("tabClick", section);
    };
    return {
      tabClick,
    };
  },
});
</script>

<style scoped>
.nav-container {
  @apply flex justify-evenly;
}

div:nth-child(n) {
  @apply p-6 w-full h-full;
}
</style>
