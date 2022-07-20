<template>
  <span class="flex" :class="sm ? 'bg-big3dBlack justify-between mb-5' : ''">
    <img src="big3dlogo.png" class="w-16 h-16 md:w-24 md:h-24" />
    <div class="flex items-center overflow-x-auto" v-if="!sm">
      <div @click="tabClick('home')" class="nav-item link link-underline link-underline-black">Home</div>
      <div @click="tabClick('story')" class="nav-item link link-underline link-underline-black">Story+</div>
      <div @click="tabClick('samples')" class="nav-item link link-underline link-underline-black">Samples+</div>
      <div @click="tabClick('gallery')" class="nav-item link link-underline link-underline-black">Gallery</div>
      <div @click="tabClick('pricing')" class="nav-item link link-underline link-underline-black">Pricing</div>
      <div @click="tabClick('generator-wizard')" class="nav-item link link-underline link-underline-black">
        Purchase
      </div>
      <div
        v-if="!isUserLoggedIn"
        @click="
          tabClick('login');
          $emit('login');
        "
        class="login-button"
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
        label: "Purchase",
        command: () => {
          tabClick("generator-wizard");
        },
      },
      {
        label: "Login",
        command: () => {
          tabClick("login");
          emit("login");
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
.login-button {
  @apply bg-yellow text-xl hover:bg-gold hover:scale-105 hover:shadow-lg transform-gpu transition duration-300 ease-in-out cursor-pointer;
}

div:nth-child(n) {
  @apply p-2 lg:p-4 w-full h-full;
}

.nav-item {
  @apply cursor-pointer text-xl;
}

.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#000, #000)
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%
}
</style>
