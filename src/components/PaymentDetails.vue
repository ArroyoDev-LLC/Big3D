<template>
  <div class="h-80 w-full grid grid-cols-1 sm:grid-cols-3">
    <div class="col-span-1 sm:col-span-2 order-2 sm:order-1">
      <NextStepButton label="Buy Now" />
    </div>
    <div class="col-span-1 h-full sm:w-72 order-1 sm:order-2 bg-gray-800 p-4">
      <text class="text-lg">Order Summary</text>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <text>Taxes</text
          ><text class="text-yellow">{{ convertToDollars(taxes) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Payment Fee</text
          ><text class="text-yellow">{{ convertToDollars(fee) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Total</text
          ><text class="text-yellow">{{ calculateTotal() }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import NextStepButton from "@/components/NextStepButton.vue";

export default defineComponent({
  name: "PaymentDetails",
  components: { NextStepButton },
  setup() {
    const taxes = ref(0);
    const fee = ref(0);
    const convertToDollars = (amount: number) => {
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };
    const calculateTotal = () => {
      return convertToDollars(taxes.value + fee.value);
    };
    return {
      convertToDollars,
      taxes,
      fee,
      calculateTotal,
    };
  },
});
</script>
