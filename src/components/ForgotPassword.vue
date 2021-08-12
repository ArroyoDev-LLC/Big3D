<template>
  <div class="flex flex-col items-start h-80 relative">
    <div class="flex flex-col sm:flex-row">
      <text class="text-lg font-bold mr-2">Forgot Password</text>
      <text class="text-xs"
        >enter email here. If you have an account, you will be emailed a reset
        code to type in below</text
      >
    </div>
    <div class="flex mb-2 w-full">
      <InputText class="w-full sm:w-1/2" placeholder="Email" v-model="email" />
    </div>
    <NextStepButton
      class="absolute bottom-0 right-0"
      label="Send Reset Email"
      :showIcon="false"
      @click="sendResetEmail"
      v-if="!onEmailReset"
    />
    <NextStepButton
      class="absolute bottom-0 right-0"
      label="Submit"
      :showIcon="false"
      @click="submit"
      v-else
    />
    <div v-if="onEmailReset" class="flex flex-col w-full">
      <div class="flex mb-2">
        <InputText
          class="w-full sm:w-1/2"
          placeholder="Reset Code"
          v-model="code"
        />
      </div>
      <div class="flex mb-2">
        <InputText
          class="w-full sm:w-1/2"
          placeholder="New Password"
          v-model="pass"
        />
      </div>
      <div class="flex mb-2">
        <InputText
          class="w-full sm:w-1/2"
          placeholder="New Password (confirm)"
          v-model="confirm"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import NextStepButton from "@/components/NextStepButton.vue";

export default defineComponent({
  name: "ForgotPassword",
  components: { InputText, NextStepButton },
  setup(props, { emit }) {
    const email = ref("");
    const onEmailReset = ref(false);
    const code = ref("");
    const pass = ref("");
    const confirm = ref("");
    const sendResetEmail = () => {
      onEmailReset.value = true;
    };
    const submit = () => {
      emit("submit");
    };
    return {
      email,
      onEmailReset,
      code,
      pass,
      confirm,
      sendResetEmail,
      submit,
    };
  },
});
</script>
