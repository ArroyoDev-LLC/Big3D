<template>
  <div class="flex flex-col p-6">
    <div class="text-3xl font-black">
      Account <span class="bg-yellow">Info</span>
    </div>
    <div class="flex pt-4 pb-4">
      <InputText
        style="width: 23.5%; margin-right: 1rem"
        placeholder="first name"
      />
      <InputText style="width: 23.5%" placeholder="last name" />
      <Checkbox />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col w-1/2 mr-4">
        <div class="text-yellow bg-big3dBlack mb-2">Billing address</div>
        <InputText placeholder="street" />
        <div class="flex pb-2 pt-2">
          <InputText style="width: 33.33%" placeholder="zip" />
          <InputText style="width: 33.33%" placeholder="state" />
          <InputText style="width: 33.33%" placeholder="city" />
        </div>
        <InputText placeholder="email" />
      </div>

      <div class="flex flex-col w-1/2">
        <div class="text-yellow bg-big3dBlack mb-2">Shipping address</div>
        <InputText placeholder="street" />
        <div class="flex pb-2 pt-2">
          <InputText style="width: 33.33%" placeholder="zip" />
          <InputText style="width: 33.33%" placeholder="state" />
          <InputText style="width: 33.33%" placeholder="city" />
        </div>
        <InputText placeholder="email" />
      </div>
    </div>
    <div class="text-3xl font-black">Past Order</div>
    <Skeleton shape="card" class="h-14" />
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

import Skeleton from "primevue/skeleton";

export default {
  name: "AccountInfo",
  components: {
    InputText,
    Skeleton,
  },
};
</script>

<style scoped></style>
