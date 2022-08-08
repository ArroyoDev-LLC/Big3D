import { defineStore } from 'pinia'

export const useConnectorStore = defineStore('connector', () => {
  const connector = ref({ type: '', dimension: '' })
  const connectorPrice = ref(0)
  const deliveryOption = ref('')

  function changeConnector(updatedConnector) {
    connector.value = updatedConnector
  }

  function changeConnectorPrice(updatedPrice) {
    connectorPrice.value = updatedPrice
  }

  function changeDeliveryOption(updatedDeliveryOption) {
    deliveryOption.value = updatedDeliveryOption
  }

  return {
    connector,
    connectorPrice,
    deliveryOption,
    changeConnector,
    changeConnectorPrice,
    changeDeliveryOption
  }
})
