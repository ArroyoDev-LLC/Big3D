<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menu from 'primevue/menu'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

interface NavItem {
  label: string
  command: Function
}

export default defineComponent({
  name: 'NavBar',
  components: { Menu },
  props: {
    isUserLoggedIn: {
      type: Boolean,
      required: true
    },
    navItems: {
      type: Array<NavItem>,
      default: []
    }
  },
  setup(props, { emit }) {
    const tabClick = (item) => {
      item.command()
      emit('tabClick', item.label)
    }
    const isMobile = () => {
      return window.outerWidth < 376
    }
    const menu = ref()
    const toggleMenu = (event: boolean) => {
      menu.value.toggle(event)
    }
    return {
      tabClick,
      isMobile,
      toggleMenu,
      menu,
      sm
    }
  }
})
</script>

<template>
  <span class="flex" :class="sm ? 'justify-between mb-5' : ''">
    <img src="/big3dlogo.png" class="w-16 h-16 md:w-24 md:h-24" />
    <div v-if="!sm" class="flex items-center overflow-x-auto">
      <div v-for="(item, index) in navItems" :key="index">
        <slot name="nav-item" :item="item">
          <slot :name="item.label" :item="item">
            <div
              class="nav-item link link-underline link-underline-black"
              @click="tabClick(item)"
            >
              {{ item.label }}
            </div>
          </slot>
        </slot>
      </div>
    </div>
    <span class="flex">
      <button
        class="icon-btn mx-2 !outline-none"
        title="button.toggle_dark"
        @click="toggleDark()"
      >
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <span
        v-if="sm"
        class="bg-yellow flex items-center justify-center h-16 w-24"
        @click="toggleMenu"
      >
        <img src="/icons/hamburgerMenu.svg" />
      </span>
    </span>
    <Menu ref="menu" :model="navItems" :popup="true" />
  </span>
</template>

<style scoped>
div:nth-child(n) {
  @apply p-2 w-full h-full;
}

.nav-item {
  @apply cursor-pointer text-xl;
}

.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#000, #000);
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
