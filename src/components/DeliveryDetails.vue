<template>
  <div v-if="!hasAuth" class="flex flex-col">
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
        @click="login"
      />
      <NextStepButton
        label="Create Account"
        :showIcon="false"
        @click="createAccount"
      />

      <NextStepButton
        class="mb-2 sm:mb-0 sm:ml-2"
        label="Skip to checkout"
        @click="skipToCheckout"
      />
    </div>
    <div class="text-yellow cursor-pointer text-left" @click="forgot">
      <text>forgot password?</text>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 h-80 pt-1 mx-2" v-else>
    <div class="col-span-1">
      <div class="flex flex-col sm:flex-row mb-2">
        <div class="mb-2 sm:mb-0 sm:mr-2">
          <InputText placeholder="First Name" class="w-full" />
        </div>
        <div>
          <InputText placeholder="Last Name" class="w-full" />
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
    <div class="col-span-1" v-if="isDIY">
      <div class="flex items-center" :class="showShipping ? 'mb-16' : 'mb-2'">
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
      <div v-if="!showShipping" class="mb-16 sm:mb-0">
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
      default: false,
    },
    isShippingSame: {
      type: Boolean,
      default: false,
    },
    isDIY: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const showShipping = ref(props.isShippingSame);
    const hasAuth = ref(props.isAuthed);
    const login = () => {
      hasAuth.value = true;
      emit("login");
    };
    const createAccount = () => {
      hasAuth.value = true;
      emit("createAccount");
    };
    const forgot = () => {
      emit("forgot");
    };
    const skipToCheckout = () => {
      hasAuth.value = true;

      emit("skip");
    };

    return {
      showShipping,
      hasAuth,
      skipToCheckout,
      login,
      createAccount,
      forgot,
    };
  },
});
</script>