<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import CheckoutButton from '@/components/CheckoutButton.vue'

export default defineComponent({
  name: 'PaymentDetails',
  components: { StripeCheckout, CheckoutButton },
  props: {
    connectorType: {
      type: String,
      default: ''
    },
    connectorInfo: {
      type: Object
    }
  },
  setup(props) {
    const connectorStore = useConnectorStore()
    const { deliveryOption, connector } = storeToRefs(connectorStore)
    const lineItems = ref([])

    if (deliveryOption.value === 'KIT') {
      if (connector.value.dimension === '3/4” (19.05 mm)') {
        lineItems.value = [
          {
            price: 'price_1JZFpULEeW8HHB6IbLxWuk67',
            quantity: props.connectorInfo.connectors
          },
          {
            price: 'price_1JZFv0LEeW8HHB6Ij1g5Nul8',
            quantity: props.connectorInfo.connectors
          }
        ]
      } else if (connector.value.dimension === '1/2” (12.7 mm)') {
        lineItems.value = [
          {
            price: 'price_1JZFnsLEeW8HHB6I0jDVJiZX',
            quantity: props.connectorInfo.connectors
          },
          {
            price: 'price_1JZFv0LEeW8HHB6Ij1g5Nul8',
            quantity: props.connectorInfo.connectors
          }
        ]
      } else if (connector.value.dimension === '1/4” (6.35 mm)') {
        lineItems.value = [
          {
            price: 'prod_KCCtLjhsgvLQTr',
            quantity: props.connectorInfo.connectors
          },
          {
            price: 'price_1JZFv0LEeW8HHB6Ij1g5Nul8',
            quantity: props.connectorInfo.connectors
          }
        ]
      } else null
    } else
      lineItems.value = [
        {
          price: 'price_1JZFv0LEeW8HHB6Ij1g5Nul8',
          quantity: props.connectorInfo.connectors
        }
      ]

    const taxes = ref(0)
    const fee = ref(0)
    const convertToDollars = (amount: number) => {
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
    const calculateTotal = () => {
      return convertToDollars(taxes.value + fee.value)
    }
    return {
      lineItems,
      convertToDollars,
      taxes,
      fee,
      calculateTotal
    }
  },
  data() {
    return {
      publishableKey:
        'pk_test_51JXTC3LEeW8HHB6ICHZKK8JqmrcxEw2Gv1guXlT7uJNrONda0xeRU2bZi5KYz3jVO6CR6TVUlqeyjC1rfDbJ8PIv00sZSIonWF',
      loading: false,

      successURL: 'https://localhost:8080',
      cancelURL: 'https://localhost:8080'
    }
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    }
  }
})
</script>

<template>
  <div class="h-80 w-full grid grid-cols-1 sm:grid-cols-3">
    <StripeCheckout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <div class="col-span-1 sm:col-span-2 order-2 sm:order-1">
      <CheckoutButton label="Buy Now" @click="submit" />
    </div>
    <div class="col-span-1 h-full sm:w-72 order-1 sm:order-2 bg-gray-800 p-4">
      <text class="text-lg">Order Summary</text>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <text>Taxes</text>
          <text class="text-yellow">{{ convertToDollars(taxes) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Payment Fee</text>
          <text class="text-yellow">{{ convertToDollars(fee) }}</text>
        </div>
        <div class="flex flex-row justify-between">
          <text>Total</text>
          <text class="text-yellow">{{ calculateTotal() }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
