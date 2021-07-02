<template>
  <div style="width: 100vw; height: 100vh">
    <div id="nav" class="navbar">
      <img src="../../public/big3dlogo.png" />
      <a @click="scrollMeTo('Home')">Home</a>
      <a @click="scrollMeTo('Story')">Story</a>
      <a @click="scrollMeTo('Samples')">Samples</a>
      <a @click="scrollMeTo('Gallery')">Gallery</a>
      <a @click="scrollMeTo('Pricing')">Pricing</a>
      <a @click="scrollMeTo('Printing')">Printing</a>
      <a @click="scrollMeTo('Purchase')">Purchase</a>
      <a @click="scrollMeTo('Login')">Login</a>
    </div>
    <div ref="Home" class="home">
      <div class="imageDeSaturation">
        <img class="imgStyle" src="../../public/truckFrame.png" />
      </div>
      <div class="homeHeader">
        <div class="flex justify-evenly">
          <div class="text-white">think</div>
          <div class="text-yellow">BIG</div>
        </div>
        <div class="flex justify-evenly">
          <div class="text-white">print</div>
          <div class="text-yellow">BIG</div>
        </div>
        <div class="flex justify-evenly">
          <div class="text-white">build</div>
          <div class="text-yellow">BIG</div>
        </div>
        <div class="homeSubheader">
          Upload a low poly 3D model and generate a life size BIG 3D puzzle
        </div>
      </div>
    </div>

    <a ref="Story"> <Story /></a>
    <a ref="Samples"> <Samples id="Samples" /> </a>
    <!--    <a ref="Gallery"> <Gallery id="Gallery" /> </a>-->
    <a ref="Pricing"> <Pricing id="Pricing" /> </a>
    <a ref="Printing"> <Printing id="Printing" /> </a>
    <a ref="Purchase"> <Purchase id="Purchase" /> </a>
  </div>
</template>

<script lang="ts">
import Story from "@/views/Story.vue";
import Samples from "@/views/Samples.vue";
import Gallery from "@/views/Gallery.vue";
import Pricing from "@/views/Pricing.vue";
import Printing from "@/views/Printing.vue";
import Purchase from "@/views/Purchase.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Purchase,
    Printing,
    Pricing,
    Story,
    Samples,
    Gallery,
  },
  methods: {
    scrollMeTo(refName: string | number) {
      let element = this.$refs[refName];
      let top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
})
export default class Home extends Vue {}
</script>
<style>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.imageDeSaturation {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
}
.imgStyle {
  @apply bg-opacity-5;
  width: 100%;
}
.navbar {
  @apply justify-between
  flex

  items-center
  text-black
  flex-col
  md:flex-row;
}
.home {
  @apply relative text-center;
}
.homeHeader {
  @apply md:text-9xl text-center centered font-bold;
}
.homeSubheader {
  @apply text-white md:text-3xl pt-12;
}
</style>
