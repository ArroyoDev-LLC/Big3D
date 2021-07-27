<template>
<div>


  <NavBar  />
  <Intro />
  <Story />
  <Samples />
  <Gallery />
  <Pricing />
  <Printing />
  <Purchase />
  <Login />
  
  </div>
</template>

<script lang="ts">
import Intro from './NizaComponents/Intro.vue'
import NavBar from './NizaComponents/NavBar.vue'
import Story from './NizaComponents/Story.vue'
import Samples from './NizaComponents/Samples.vue'
import Printing from './NizaComponents/Printing.vue'
export default {
  name: "NizaHome",
  components:{NavBar, Intro, Story, Samples, Printing}
}
</script>

<style scoped>

</style>