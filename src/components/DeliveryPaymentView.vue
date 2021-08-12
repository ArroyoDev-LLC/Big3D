<template>
  <div class="w-full relative">
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
    <DeliveryDetails
      v-if="page === 'delivery'"
      :isDIY="isDIY"
      @login="hasAuth = true"
      @createAccount="hasAuth = true"
      @forgot="page = 'forgotPassword'"
    />
    <ForgotPassword
      v-if="page === 'forgotPassword'"
      @submit="page = 'delivery'"
    />
    <PaymentDetails v-if="page === 'payment'" />
    <div
      class="absolute -bottom-5 right-2"
      v-if="page === 'delivery' && hasAuth"
    >
      <NextStepButton label="Go to Payment" @click="goToPayment" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import DeliveryDetails from "@/components/DeliveryDetails.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import PaymentDetails from "@/components/PaymentDetails.vue";

export default defineComponent({
  name: "DeliveryPaymentView",
  components: {
    DeliveryDetails,
    NextStepButton,
    ForgotPassword,
    PaymentDetails,
  },
  props: {
    isAuthed: {
      type: Boolean,
      default: false,
    },
    isDIY: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const page = ref("delivery");
    const hasAuth = ref(props.isAuthed);
    const goToPayment = () => {
      page.value = "payment";
    };
    return {
      page,
      goToPayment,
      hasAuth,
    };
  },
});
</script>
