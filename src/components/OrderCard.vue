<template>
  <div class="order-card">
    <div class="w-1/3 h-1/3 p-6">person and project</div>
    <div class="text-2xl text-yellow font-bold p-2">{{ fileName }}</div>
    <div class="text-white">Last Downloaded on {{ date }} @ {{ time }}</div>
    <Button class="bg-white p-4 m-8">Download File</Button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "OrderCard",
  setup() {
    const fileName = ref("Name of file");
    return {
      fileName,
    };
  },
};
</script>

<style scoped>
.order-card {
  @apply w-80 bg-big3dBlack flex flex-col items-center m-4;
}
</style>
