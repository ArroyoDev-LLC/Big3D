import { createStore } from "vuex";

export default createStore({
  state: {
    connector: { type: "", dimension: "" },
    connectorPrice: 0,
  },
  mutations: {
    changeConnector(state, updatedConnector) {
      state.connector.type = updatedConnector.type;
      state.connector.dimension = updatedConnector.dimension;
    },

    changeConnectorPrice(state, updatedPrice) {
      state.connectorPrice = updatedPrice;
    },
  },
  actions: {},
  modules: {},
});
