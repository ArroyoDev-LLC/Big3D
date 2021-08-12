<template>
  <div>
    <NavBar />
    <Intro />
    <Story />
    <Samples />
    <Gallery />
    <Pricing />
    <Printing />
    <Purchase />
    <ModelGeneratorWizard />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
});
</script>

<style scoped></style>
