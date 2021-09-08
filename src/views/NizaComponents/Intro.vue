<template>
  <div class="flex flex-col sm:flex-row justify-between">
    <div class="intro-left-container px-4 sm:p-0">
      <text class="font-bold text-4xl text-big3dBlack"> Stop wondering.</text>

      <text class="font-bold text-4xl pb-2 text-big3dBlack"> Think big</text>

      <text>
        Time for big toys! Generate full-size 3D model any form <br />
        you want and get constructor model of your dreams
      </text>
      <GoBigButton class="my-5 ml-10 sm:ml-0" />


      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="(v) => (loading = v)"
      />
      <button @click="submit">Pay now!</button>
      0
    </div>

    <div>
      <img src="Frame 1.png" />
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import GoBigButton from "@/components/GoBigButton.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default defineComponent({
  name: "Intro",
  components: { GoBigButton, StripeCheckout },
  data() {
    return {
      publishableKey: "pk_test_51JXTC3LEeW8HHB6ICHZKK8JqmrcxEw2Gv1guXlT7uJNrONda0xeRU2bZi5KYz3jVO6CR6TVUlqeyjC1rfDbJ8PIv00sZSIonWF",
      loading: false,
      lineItems: [
        {
          price: "price_1JXUiZLEeW8HHB6I43nlyTOB", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1
        }
      ],
      successURL: "https://localhost:8080/#/",
      cancelURL: "https://localhost:8080/#/"
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
});
</script>

<style scoped lang="postcss">
.intro-header {
  @apply font-black text-6xl text-yellow;
}

.intro-left-container {
  @apply flex flex-col text-left justify-center ml-64;
}
</style>
