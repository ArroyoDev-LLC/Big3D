<template>
  <NavBar
    class="mb-1"
    @tabClick="goToSection"
    @login="() => (loginClickedSate = !loginClickedSate)"
    :isUserLoggedIn="userLoggedIn"
  />
  <Toast />
  <Intro id="home" class="mb-5" />
  <Story id="story" />
  <Samples id="samples" />
  <Pricing id="pricing" />
  <Printing id="printing" />
  <Purchase id="purchasing" />
  <ModelGeneratorWizard id="generator-wizard" />
  <LoginModal
    v-if="!userLoggedIn"
    v-show="loginClickedSate"
    @close="() => (loginClickedSate = !loginClickedSate)"
  >
    <template #header>Login</template>
    <template #body>
      <div class="flex flex-col md:flex-row justify-evenly">
        <div>
          <InputText
            type="text"
            placeholder="Username"
            v-model="userLoginInfo.username"
          />
        </div>
        <div class="m-6 md:m-0">
          <InputText
            type="text"
            placeholder="Password"
            v-model="userLoginInfo.password"
          />
        </div>
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
  <Gallery id="gallery" />
  <Footer />
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
import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: "NizaHome",
  components: {
    Footer,
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
      //if successful login then disable the login promptp
      userLoggedIn.value = !userLoggedIn.value;
      showError();
      console.log(userLoginInfo.value);
      console.log("logged in");
    };

    const userLoggedIn = ref(false);
    const loginClickedSate = ref(false);
    const userLoginInfo = ref({
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
      userLoggedIn,
      loginClickedSate,
      userLoginInfo,
      goToSection,
      jumpToWizard,
    };
  },
});
</script>
