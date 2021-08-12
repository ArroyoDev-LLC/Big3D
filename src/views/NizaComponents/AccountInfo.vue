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
      />
      <InputText class="w-1/2 md: 1/4" placeholder="last name" />
      <Checkbox />
    </div>
    <div class="flex justify-between flex-col md:flex-row">
      <div class="flex flex-col w-full md:w-1/2 mr-4">
        <div class="text-yellow bg-big3dBlack mb-2">Billing address</div>
        <InputText placeholder="street" />
        <div class="flex pb-2 pt-2">
          <InputText class="w-full md:w-1/3" placeholder="zip" />
          <InputText class="w-full md:w-1/3" placeholder="state" />
          <InputText class="w-full md:w-1/3" placeholder="city" />
        </div>
        <InputText placeholder="email" />
      </div>

      <div class="flex flex-col w-full md:w-1/2">
        <div class="text-yellow bg-big3dBlack mb-2">Shipping address</div>
        <InputText placeholder="street" />
        <div class="flex pb-2 pt-2">
          <InputText class="w-full md:w-1/3" placeholder="zip" />
          <InputText class="w-full md:w-1/3" placeholder="state" />
          <InputText class="w-full md:w-1/3" placeholder="city" />
        </div>
        <InputText placeholder="email" />
      </div>
    </div>
    <div class="text-3xl font-black p-4">Past Orders</div>
    <div class="flex justify-evenly items-center flex-col md:flex-row">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import OrderCard from "@/components/OrderCard.vue";

export default {
  name: "AccountInfo",
  components: {
    InputText,

    OrderCard,
  },
};
</script>

<style scoped></style>
