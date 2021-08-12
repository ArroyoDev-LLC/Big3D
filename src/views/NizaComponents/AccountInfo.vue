<template>
  <div class="flex flex-col p-6">
    <div class="text-3xl font-black">
      Account <span class="bg-yellow">Info</span>
    </div>
    <div class="flex pt-4 pb-4">
      <InputText
        class="w-1/2 md: 1/4"
        style="margin-right: 1rem"
        placeholder="first name"
        v-model="userShipping.firstName"
      />
      <InputText
        class="w-1/2 md: 1/4"
        placeholder="last name"
        v-model="userShipping.lastName"
      />
      <Checkbox />
    </div>
    <div class="flex justify-between flex-col md:flex-row">
      <div class="flex flex-col w-full md:w-1/2 mr-4">
        <div class="text-yellow bg-big3dBlack mb-2">Billing address</div>
        <InputText placeholder="street" v-model="userShipping.Billing.street" />
        <div class="flex pb-2 pt-2">
          <InputText
            class="w-full md:w-1/3"
            placeholder="zip"
            v-model="userShipping.Billing.zip"
          />
          <InputText
            class="w-full md:w-1/3"
            placeholder="state"
            v-model="userShipping.Billing.state"
          />
          <InputText
            class="w-full md:w-1/3"
            placeholder="city"
            v-model="userShipping.Billing.city"
          />
        </div>
        <InputText placeholder="email" v-model="userShipping.Billing.email" />
      </div>

      <div class="flex flex-col w-full md:w-1/2">
        <div class="text-yellow bg-big3dBlack mb-2">Shipping address</div>
        <InputText placeholder="street" />
        <div class="flex pb-2 pt-2">
          <InputText
            class="w-full md:w-1/3"
            v-model="userShipping.Shipping.zip"
            placeholder="zip"
          />
          <InputText
            class="w-full md:w-1/3"
            placeholder="state"
            v-model="userShipping.Shipping.zip"
          />
          <InputText
            class="w-full md:w-1/3"
            placeholder="city"
            v-model="userShipping.Shipping.city"
          />
        </div>
        <InputText placeholder="email" v-model="userShipping.Shipping.email" />
      </div>
    </div>
    <div class="text-3xl font-black p-4">Past Orders</div>
    <div class="flex justify-evenly items-center flex-col md:flex-row">
      <OrderCard :key="idx" v-for="(item, idx) in orderList" :order="item" />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import OrderCard from "@/components/OrderCard.vue";
import { ref } from "vue";

export default {
  name: "AccountInfo",
  components: {
    InputText,

    OrderCard,
  },
  setup() {
    // replace with real data
    const orderList = ref([
      { id: 1, fileName: "test", date: "2/19/20", time: "7:30" },
      {
        id: 2,
        fileName: "test",
        date: "2/19/20",
        time: "7:30",
      },
      { id: 3, fileName: "test2", date: "2/19/20", time: "7:30" },
      { id: 4, fileName: "test3", date: "2/19/20", time: "7:30" },
    ]);

    // replace with real data

    const userShipping = ref({
      firstName: "",
      lastName: "",
      Billing: {
        city: "",
        state: "",
        zip: "",
        street: "",
        email: "",
      },
      Shipping: {
        city: "",
        state: "",
        zip: "",
        street: "",
        email: "",
      },
    });
    return { orderList, userShipping };
  },
};
</script>

<style scoped></style>
