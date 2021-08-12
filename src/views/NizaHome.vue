<template>
  <div>
    <NavBar />
    <Intro />
    <Story />
    <Samples @goBig="jumpToWizard" />
    <Gallery />
    <Pricing />
    <Printing />
    <Purchase />
    <ModelGeneratorWizard id="generator-wizard" />
    <Login />
  </div>
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
    const jumpToWizard = () => {
      const wizardId = document.getElementById("generator-wizard");
      if (wizardId) wizardId.scrollIntoView();
    };
    return {
      jumpToWizard,
    };
  },
});
</script>

<style scoped></style>
