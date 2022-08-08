<script lang="ts">
import { defineComponent, ref } from 'vue'
import DeliveryDetails from '@/components/DeliveryDetails.vue'
import NextStepButton from '@/components/NextStepButton.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import PaymentDetails from '@/components/PaymentDetails.vue'

export default defineComponent({
  name: 'DeliveryPaymentView',
  components: {
    DeliveryDetails,
    NextStepButton,
    ForgotPassword,
    PaymentDetails
  },
  props: {
    connectorType: {
      type: String,
      default: ''
    },
    connectorInfo: {
      type: Object
    },
    isAuthed: {
      type: Boolean,
      default: false
    },
    isDIY: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const page = ref('delivery')
    const hasAuth = ref(props.isAuthed)
    const goToPayment = () => {
      page.value = 'payment'
    }

    return {
      page,
      goToPayment,
      hasAuth
    }
  }
})
</script>

<template>
  <div class="w-full relative sm:p-10">
    <div class="flex border-b border-dotted mb-10">
      <div
        class="text-lg font-bold mr-5 sm:mr-10"
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
      :is-d-i-y="isDIY"
      @login="hasAuth = true"
      @createAccount="hasAuth = true"
      @forgot="page = 'forgotPassword'"
      @skip="hasAuth = true"
    />
    <ForgotPassword
      v-if="page === 'forgotPassword'"
      @submit="page = 'delivery'"
    />
    <PaymentDetails
      v-if="page === 'payment'"
      :connector-type="connectorType"
      :connector-info="connectorInfo"
    />
    <div
      v-if="page === 'delivery' && hasAuth"
      class="absolute -bottom-16 sm:-bottom-5 right-2"
    >
      <NextStepButton label="Go to Payment" @click="goToPayment" />
    </div>
  </div>
</template>
