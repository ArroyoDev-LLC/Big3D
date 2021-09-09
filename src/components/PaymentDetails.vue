<template>
  <div class="h-80 w-full grid grid-cols-1 sm:grid-cols-3">
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <div class="col-span-1 sm:col-span-2 order-2 sm:order-1">
      <CheckoutButton @click="submit" label="Buy Now" />

    </div>
    <div class="col-span-1 h-full sm:w-72 order-1 sm:order-2 bg-gray-800 p-4">
      <text class="text-lg">Order Summary</text>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <text>Taxes
          </text
          >
          <text class="text-yellow">{{ convertToDollars(taxes) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Payment Fee
          </text
          >
          <text class="text-yellow">{{ convertToDollars(fee) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Total
          </text
          >
          <text class="text-yellow">{{ calculateTotal() }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import CheckoutButton from "@/components/CheckoutButton.vue";

export default defineComponent({
  name: "PaymentDetails",
  components: { StripeCheckout, CheckoutButton },
  props: {
    connectorType: {
      type: String,
      default: ""
    }, connectorInfo: {
      type: Object
    }
  },
  data() {
    return {
      publishableKey: "pk_test_51JXTC3LEeW8HHB6ICHZKK8JqmrcxEw2Gv1guXlT7uJNrONda0xeRU2bZi5KYz3jVO6CR6TVUlqeyjC1rfDbJ8PIv00sZSIonWF",
      loading: false,

      successURL: "https://localhost:8080",
      cancelURL: "https://localhost:8080"
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    }
  },
  setup(props) {
    const lineItems = ref([]);
    if (props.connectorType == "wood:3/4” (19.05 mm)") {
      lineItems.value = [{ price: "price_1JXWQOLEeW8HHB6IuWJB3xLs", quantity: props.connectorInfo.connectors }];
    } else if (props.connectorType == "wood:1/2” (12.7 mm)") {
      lineItems.value = [{ price: "price_1JXoTBLEeW8HHB6IsLewxkc3", quantity: props.connectorInfo.connectors }];

    } else lineItems.value = [{ price: "price_1JXWQOLEeW8HHB6IuWJB3xLs", quantity: props.connectorInfo.connectors }];

    const taxes = ref(0);
    const fee = ref(0);
    const convertToDollars = (amount: number) => {
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    };
    const calculateTotal = () => {
      return convertToDollars(taxes.value + fee.value);
    };
    return {
      lineItems,
      convertToDollars,
      taxes,
      fee,
      calculateTotal
    };
  }
});
</script>
