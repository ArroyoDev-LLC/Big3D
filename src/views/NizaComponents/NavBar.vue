<template>
  <span class="flex" :class="sm ? 'bg-big3dBlack justify-between mb-5' : ''">
    <img src="big3dlogo.png" class="w-16 h-16 md:w-24 md:h-24" />
    <div class="flex items-center overflow-x-auto" v-if="!sm">
      <div @click="tabClick('home')" class="cursor-pointer">Home</div>
      <div @click="tabClick('story')" class="cursor-pointer">Story+</div>
      <div @click="tabClick('samples')" class="cursor-pointer">Samples+</div>
      <div @click="tabClick('gallery')" class="cursor-pointer">Gallery</div>
      <div @click="tabClick('pricing')" class="cursor-pointer">Pricing</div>
      <div @click="tabClick('printing')" class="cursor-pointer">Printing</div>
      <div @click="tabClick('generator-wizard')" class="cursor-pointer">
        Purchase
      </div>
      <div
        v-if="!isUserLoggedIn"
        @click="
          tabClick('login');
          $emit('login');
        "
        class="bg-yellow cursor-pointer"
      >
        Login
      </div>
      <div
        @click="$router.push('account')"
        v-else
        class="rounded-xl shadow-lg flex justify-center items-center"
        style="border: 1px solid black; height: 5rem"
      >
        Triston
      </div>
    </div>
    <span
      v-if="sm"
      class="bg-yellow flex items-center justify-center h-16 w-24"
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
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smaller("sm");

export default defineComponent({
  name: "NavBar",
  components: { Menu },
  props: {
    isUserLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
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
          tabClick("generator-wizard");
        },
      },
      {
        label: "Login",
        command: () => {
          tabClick("login");
        },
      },
      {
        label: "Account",
        command: () => {
          tabClick("account");
        },
      },
    ]);
    const menu = ref();
    const toggleMenu = (event: boolean) => {
      menu.value.toggle(event);
    };
    return {
      tabClick,
      isMobile,
      menuItems,
      toggleMenu,
      menu,
      sm,
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
