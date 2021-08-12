<template>
  <NavBar class="mb-1" @tabClick="goToSection" />
  <Intro id="home" class="mb-5" />
  <Story id="story" />
  <Samples id="samples" />
  <Gallery id="gallery" />
  <Pricing id="pricing" />
  <Printing id="printing" />
  <Purchase id="purchasing" />
  <ModelGeneratorWizard id="generator-wizard" />
  <Login />
  <LoginModal v-show="loginState" @close="() => (loginState = !loginState)">
    <template #header>Login</template>
    <template #body>
      <div class="flex justify-evenly">
        <InputText
          class="mr-4"
          type="text"
          placeholder="Username"
          :model-value="userLogin.username"
        />
        <InputText
          type="text"
          placeholder="Password"
          :model-value="userLogin.password"
        />
      </div>
    </template>
    <template #footer>
      <Button
        style="
          background: black;
          color: white;
          padding: 6px;
          margin-right: auto;
        "
        >Forgot Password
      </Button>
      <Button style="background: black; color: white; padding: 6px"
        >Go BIG
      </Button>
    </template>
  </LoginModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
  },
  setup() {
    const loginState = ref(false);
    const userLogin = {
      username: "",
      password: "",
    };
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
      loginState,
      userLogin,
      goToSection,
      jumpToWizard,
    };
  },
});
</script>
