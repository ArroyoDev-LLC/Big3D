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
    <div ref="Home" class="home flex min-h-screen">
      <div class="imageDeSaturation">
        <img class="imgStyle" src="../../public/truckFrame.png" style="width:100vw"/>
      </div>
      <div class="homeHeader flex-auto">
        <div class="flex-1 justify-evenly">
          <div class="text-white">THINK<span>BIG</span></div>
        </div>
        <div class="flex-1 justify-evenly">
          <div class="text-white">PRINT<span>BIG</span></div>
        </div>
        <div class="flex-1 justify-evenly">
          <div class="text-white">BUILD<span>BIG</span></div>
        </div>
        <div class="homeSubheader flex-auto">
          Upload a low poly 3D model and generate a life size <span>BIG 3D</span> puzzle
        </div>
      </div>
    </div>

    <a ref="Story">
      <Story @scrollMeTo="scrollMeTo('Purchase')" />
    </a>
    <a ref="Samples">
      <Samples id="Samples" />
    </a>
    <!--    <a ref="Gallery"> <Gallery id="Gallery" @scrollMeTo="scrollMeTo('Purchase')" /> </a>-->
    <a ref="Pricing">
      <Pricing id="Pricing" @scrollMeTo="scrollMeTo('Purchase')" />
    </a>
    <a ref="Printing">
      <Printing id="Printing" />
    </a>
    <a ref="Purchase">
      <Purchase id="Purchase" />
    </a>
  </div>
</template>

<script lang="ts">
import Story from "@/views/Story.vue";
import Samples from "@/views/Samples.vue";
import Gallery from "@/views/Gallery.vue";
import Pricing from "@/views/Pricing.vue";
import Printing from "@/views/Printing.vue";
import Purchase from "@/views/CreditCardCheckout.vue";

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
  @apply relative text-center h-auto;
}

.homeHeader {
  @apply pt-9 text-5xl lg:text-9xl md:text-9xl sm:text-9xl text-center centered font-extralight leading-10;
}

.homeSubheader {
  @apply pt-6 text-base text-white leading-6 font-semibold sm:text-lg sm:leading-7;
}

span {
  color: yellow;
  @apply font-black;
}
</style>
