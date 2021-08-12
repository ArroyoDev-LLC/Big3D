<template>
  <div class="w-full">
    <div class="flex border-b border-dotted mb-10">
      <div
        class="text-lg font-bold sm:mr-10"
        :class="page === 'delivery' ? '' : 'opacity-40'"
      >
        <text>Delivery Details</text>
      </div>
      <div
        class="text-lg font-bold sm:mr-40"
        :class="page === 'payment' ? '' : 'opacity-40'"
      >
        <text>Payment Details</text>
      </div>
    </div>
    <DeliveryDetails v-if="page === 'delivery'" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import DeliveryDetails from "@/components/DeliveryDetails.vue";

export default defineComponent({
  name: "DeliveryPaymentView",
  components: { DeliveryDetails },
  setup() {
    const page = ref("delivery");
    return {
      page,
    };
  },
});
</script>
