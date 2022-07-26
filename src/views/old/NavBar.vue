<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menu from 'primevue/menu'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

export default defineComponent({
  name: 'NavBar',
  components: { Menu },
  props: {
    isUserLoggedIn: {
      type: Boolean,
      required: true
    },
    navItems: {
      type: Array<unknown>,
      default: []
    }
  },
  setup(props, { emit }) {
    const tabClick = (section: string) => {
      emit('tabClick', section)
    }
    const isMobile = () => {
      return window.outerWidth < 376
    }
    const menuItems = ref([
      {
        label: 'Home',
        command: () => {
          tabClick('home')
        }
      },
      {
        label: 'Story+',
        command: () => {
          tabClick('story')
        }
      },
      {
        label: 'Samples+',
        command: () => {
          tabClick('samples')
        }
      },
      {
        label: 'Gallery',
        command: () => {
          tabClick('gallery')
        }
      },
      {
        label: 'Pricing',
        command: () => {
          tabClick('pricing')
        }
      },
      {
        label: 'Purchase',
        command: () => {
          tabClick('generator-wizard')
        }
      },
      {
        label: 'Login',
        command: () => {
          tabClick('login')
          emit('login')
        }
      },
      {
        label: 'Account',
        command: () => {
          tabClick('account')
        }
      }
    ])
    const menu = ref()
    const toggleMenu = (event: boolean) => {
      menu.value.toggle(event)
    }
    return {
      tabClick,
      isMobile,
      menuItems,
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
        <div
          v-if="item.label !== 'Login'"
          class="nav-item link link-underline link-underline-black"
          @click="item.command"
        >
          {{ item.label }}
        </div>
        <div v-else>
          <div
            v-if="!isUserLoggedIn"
            class="login-button"
            @click="item.command"
          >
            {{ item.label }}
          </div>
          <div
            v-else
            class="rounded-xl shadow-lg flex justify-center items-center"
            style="border: 1px solid black; height: 5rem"
            @click="$router.push('account')"
          >
            Triston
          </div>
        </div>
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
.login-button {
  @apply bg-yellow text-xl hover:bg-gold hover:scale-105 hover:shadow-lg transform-gpu transition duration-300 ease-in-out cursor-pointer;
}

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
