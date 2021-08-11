<template>
  <NavBar @tabClick="goToSection" />
  <Intro id="home" class="mb-5" />
  <Story id="story" />
  <Samples id="samples" />
  <Gallery id="gallery" />
  <Pricing id="pricing" />
  <Printing id="printing" />
  <Purchase id="purchasing" />
  <ModelGeneratorWizard id="generator-wizard" />
  <Login />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "./NizaComponents/Intro.vue";
import NavBar from "./NizaComponents/NavBar.vue";
import Story from "./NizaComponents/Story.vue";
import Samples from "./NizaComponents/Samples.vue";
import Printing from "./NizaComponents/Printing.vue";
import ModelGeneratorWizard from "@/components/ModelGeneratorWizard.vue";
import Gallery from "@/views/Gallery.vue";
export default defineComponent({
  name: "NizaHome",
  components: {
    ModelGeneratorWizard,
    NavBar,
    Intro,
    Story,
    Samples,
    Printing,
    Gallery
  },
  setup() {
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
      goToSection,
      jumpToWizard,
    };
  },
});
</script>
