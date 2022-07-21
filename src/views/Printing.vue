<script>
export default {
  name: 'Printing'
}
</script>

<template>
  <div class="w-full h-full" style="height: 100vh; width: 100vw">
    <div class="printingHeader">Big Printing Partners</div>
    <div class="partnerTextContainer">
      <div id="partners">
        <img src="../../public/craftcloud.png" />
        <img src="../../public/shape.png" />
        <img src="../../public/sculpt.png" />
        <img src="../../public/imaterial.png" />
        <img src="../../public/xometry.png" />
      </div>
      <div id="description" class="description">
        During your build process you have the option to choose from a list of
        top rated 3D printing services to turn your idea into a life size 3D
        puzzle! They will custom print your joint files and ship them to your
        door. In addition, our cut shop can read the cut sheet for all the
        sticks you will need for your puzzle and pre-cut, label and ship them to
        you as well
      </div>
    </div>
  </div>
</template>

<style scoped>
.printingHeader {
  @apply md:text-8xl font-bold;
}
.partnerTextContainer {
  @apply flex flex-col md:flex-row justify-evenly;
}
.description {
  @apply shadow-md md:p-12 text-2xl md:w-1/2 text-left;
}
</style>
