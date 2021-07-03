<template>
  <div>
    <div
      id="nav"
      class="justify-between flex navbar items-center text-black h-28"
    >
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
    <div ref="Home" class="home relative text-center">
      <div class="image">
        <img
          style="width: 100%"
          class="bg-opacity-5"
          src="../../public/truckFrame.png"
        />
      </div>
      <div class="md:text-9xl text-6xl text-center centered font-bold">
        <div class="flex justify-evenly ">
          <div class="white font-thin">THINK</div>
          <div class="yellow font-black">BIG</div>
        </div>
        <div class="flex justify-evenly">
          <div class="white font-thin">PRINT</div>
          <div class="yellow font-black">BIG</div>
        </div>
        <div class="flex justify-evenly">
          <div class="white font-thin">BUILD</div>
          <div class="yellow font-black">BIG</div>
        </div>
        
        <div class="pt-6 text-base text-white leading-6 font-bold text-lg sm:leading-7">
          Upload a low poly 3D model and generate a life size BIG 3D puzzle
        </div>
      </div>
    </div>

    <a ref="Story"> <Story /></a>
    <a ref="Samples"> <Samples id="Samples" /> </a>
    <a ref="Gallery"> <Gallery id="Gallery" /> </a>
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

.yellow {
  color: #FBBF24;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.white {
  color: white;
}

.image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
}
</style>
