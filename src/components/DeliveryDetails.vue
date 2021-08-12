<template>
  <div v-if="!isAuthed" class="flex flex-col">
    <div class="px-2 sm:px-0 sm:w-full mb-2">
      <InputText
        class="w-full"
        placeholder="Email (for electronic delivery and download access)"
      />
    </div>
    <div class="px-2 sm:px-0 sm:w-full">
      <InputText class="w-full" placeholder="Password" />
    </div>
    <div class="flex flex-col sm:flex-row m-2 sm:mx-0">
      <NextStepButton
        label="Login"
        :showIcon="false"
        class="mb-2 sm:mb-0 sm:mr-2"
      />
      <NextStepButton label="Create Account" :showIcon="false" />
    </div>
    <div class="text-yellow cursor-pointer text-left">
      <text>forgot password?</text>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 ml-2" v-else>
    <div class="col-span-1">
      <div class="flex mb-2">
        <div class="mr-2">
          <InputText placeholder="First Name" />
        </div>
        <div>
          <InputText placeholder="Last Name" />
        </div>
      </div>
      <div class="text-left text-yellow font-bold mb-2">
        <text>Billing Address</text>
      </div>
      <div class="mb-2">
        <InputText placeholder="Address" class="w-full" />
      </div>
      <div class="grid grid-cols-3 gap-1 mb-2">
        <div class="col-span-1">
          <InputText placeholder="Zip" class="w-full" />
        </div>
        <div class="col-span-1">
          <InputText placeholder="Country" class="w-full" />
        </div>
        <div class="col-span-1 grid grid-cols-2 gap-1">
          <InputText placeholder="City" class="col-span-1" />
          <InputText placeholder="State" class="col-span-1" />
        </div>
      </div>
      <div>
        <InputText placeholder="Email" class="w-full" />
      </div>
    </div>
    <div class="col-span-1 mr-1">
      <div class="flex items-center mb-2">
        <div class="mr-2">
          <ToggleButton
            v-model="showShipping"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
          />
        </div>
        <div>
          <text>shipping address is the same as billing</text>
        </div>
      </div>
      <div v-if="!showShipping">
        <div class="text-left text-yellow font-bold mb-2">
          <text>Shipping Address</text>
        </div>
        <div class="mb-2">
          <InputText placeholder="Address" class="w-full" />
        </div>
        <div class="grid grid-cols-3 gap-1 mb-2">
          <div class="col-span-1">
            <InputText placeholder="Zip" class="w-full" />
          </div>
          <div class="col-span-1">
            <InputText placeholder="Country" class="w-full" />
          </div>
          <div class="col-span-1 grid grid-cols-2 gap-1">
            <InputText placeholder="City" class="col-span-1" />
            <InputText placeholder="State" class="col-span-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import NextStepButton from "@/components/NextStepButton.vue";
import ToggleButton from "primevue/togglebutton";

export default defineComponent({
  name: "DeliveryDetails",
  components: { InputText, NextStepButton, ToggleButton },
  props: {
    isAuthed: {
      type: Boolean,
      default: true,
    },
    isShippingSame: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const showShipping = ref(props.isShippingSame);
    return {
      showShipping,
    };
  },
});
</script>
