<template>
  <NavBar
    class="mb-1"
    @tabClick="goToSection"
    @login="() => (loginState = !loginState)"
  />
  <Toast />
  <Intro id="home" class="mb-5" />
  <Story id="story" />
  <Samples id="samples" />
  <Gallery id="gallery" />
  <Pricing id="pricing" />
  <Printing id="printing" />
  <Purchase id="purchasing" />
  <ModelGeneratorWizard id="generator-wizard" />
  <LoginModal v-show="loginState" @close="() => (loginState = !loginState)">
    <template #header>Login</template>
    <template #body>
      <div class="flex justify-evenly">
        <InputText
          class="mr-4"
          type="text"
          placeholder="Username"
          v-model="userLogin.username"
        />
        <InputText
          type="text"
          placeholder="Password"
          v-model="userLogin.password"
        />
      </div>
    </template>
    <template #footer>
      <Button
        class="shadow-md"
        style="
          background: black;
          color: white;
          padding: 6px;
          margin-right: auto;
        "
        >Forgot Password
      </Button>
      <Button
        @click="loginToSite"
        class="shadow-md"
        style="
          background: yellow;
          color: black;
          padding: 6px;
          font-weight: bold;
        "
        >Jump In
      </Button>
    </template>
  </LoginModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import InputText from "primevue/inputtext";
import Intro from "./NizaComponents/Intro.vue";
import NavBar from "./NizaComponents/NavBar.vue";
import Story from "./NizaComponents/Story.vue";
import Samples from "./NizaComponents/Samples.vue";
import Printing from "./NizaComponents/Printing.vue";
import ModelGeneratorWizard from "@/components/ModelGeneratorWizard.vue";
import Gallery from "@/views/Gallery.vue";
import LoginModal from "../components/LoginModal.vue";

export default defineComponent({
  name: "NizaHome",
  components: {
    ModelGeneratorWizard,
    NavBar,
    Intro,
    Story,
    Samples,
    Printing,
    Gallery,
    LoginModal,
    InputText,
    Toast,
  },
  setup() {
    const toast = useToast();

    const showSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Successfully Logged In",
        life: 3000,
      });
    };
    const showError = () => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Error Logging In Username Or Password May Be Incorrect",
        life: 3000,
      });
    };
    const loginToSite = () => {
      //success or error state on actual login through database
      showSuccess();
      showError();
      console.log(userLogin.value);
      console.log("logged in");
    };
    const loginState = ref(false);
    const userLogin = ref({
      username: "",
      password: "",
    });
    const goToSection = (section: string) => {
      const sectionId = document.getElementById(section);
      if (sectionId) {
        sectionId.scrollIntoView();
      }
    };
    const jumpToWizard = () => {
      const wizardId = document.getElementById("generator-wizard");
      if (wizardId) wizardId.scrollIntoView();
    };
    return {
      showSuccess,
      loginToSite,
      loginState,
      userLogin,
      goToSection,
      jumpToWizard,
    };
  },
});
</script>
