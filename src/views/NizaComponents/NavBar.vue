<template>
  <span
    class="flex"
    :class="isMobile() ? 'bg-big3dBlack justify-between mb-5' : ''"
  >
    <span><img src="big3dlogo.png" /></span>
    <div class="flex flex-col sm:flex-row" v-if="!isMobile()">
      <div @click="tabClick('home')" class="cursor-pointer">Home</div>
      <div @click="tabClick('story')" class="cursor-pointer">Story+</div>
      <div @click="tabClick('samples')" class="cursor-pointer">Samples+</div>
      <div @click="tabClick('gallery')" class="cursor-pointer">Gallery</div>
      <div @click="tabClick('pricing')" class="cursor-pointer">Pricing</div>
      <div @click="tabClick('printing')" class="cursor-pointer">Printing</div>
      <div @click="tabClick('purchase')" class="cursor-pointer">Purchase</div>
      <div @click="tabClick('login')" class="bg-yellow cursor-pointer">
        Login
      </div>
    </div>
    <span
      v-if="isMobile()"
      class="bg-yellow flex items-center justify-center w-24"
      @click="toggleMenu"
    >
      <img src="/icons/hamburgerMenu.svg" />
    </span>
    <Menu :model="menuItems" ref="menu" :popup="true" />
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "primevue/menu";

export default defineComponent({
  name: "NavBar",
  components: { Menu },
  setup(props, { emit }) {
    const tabClick = (section: string) => {
      emit("tabClick", section);
    };
    const isMobile = () => {
      return window.outerWidth < 376;
    };
    const menuItems = ref([
      {
        label: "Home",
        command: () => {
          tabClick("home");
        },
      },
      {
        label: "Story+",
        command: () => {
          tabClick("story");
        },
      },
      {
        label: "Samples+",
        command: () => {
          tabClick("samples");
        },
      },
      {
        label: "Gallery",
        command: () => {
          tabClick("gallery");
        },
      },
      {
        label: "Pricing",
        command: () => {
          tabClick("pricing");
        },
      },
      {
        label: "Printing",
        command: () => {
          tabClick("printing");
        },
      },
      {
        label: "Purchase",
        command: () => {
          tabClick("purchase");
        },
      },
      {
        label: "Login",
        command: () => {
          tabClick("login");
        },
      },
    ]);
    const menu = ref();
    const toggleMenu = (event) => {
      menu.value.toggle(event);
    };
    return {
      tabClick,
      isMobile,
      menuItems,
      toggleMenu,
      menu,
    };
  },
});
</script>

<style scoped>
.nav-container {
  @apply flex justify-evenly;
}

div:nth-child(n) {
  @apply p-6 w-full h-full;
}
</style>
