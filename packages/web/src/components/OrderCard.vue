<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="order-card">
    <div class="w-1/3 h-1/3 p-6">person and project</div>
    <div class="text-2xl text-yellow font-bold p-2">
      {{ order.fileName }}
    </div>
    <div class="text-white m-1">
      Last Downloaded on {{ order.date }} @ {{ order.time }}
    </div>
    <Button class="bg-white p-4 m-8">Download File</Button>
  </div>
</template>

<style scoped>
.order-card {
  @apply w-80 bg-big3dBlack flex flex-col items-center m-4;
}
</style>
