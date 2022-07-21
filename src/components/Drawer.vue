<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Drawer',
  props: {
    title: {
      type: String,
      default: 'Drawer'
    },
    defaultState: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const toggle = ref(props.defaultState)
    return {
      toggle
    }
  }
})
</script>

<template>
  <slot name="header" :value="toggle">
    <div
      class="flex justify-between cursor-pointer border-dotted border-b border-opacity-40 py-1"
      @click="toggle = !toggle"
    >
      <slot name="title">
        <div class="text-white text-lg font-bold">
          {{ title }}
        </div>
      </slot>
      <slot name="toggle" :value="toggle">
        <button class="text-yellow text-xl font-bold">
          {{ toggle ? 'x' : '+' }}
        </button>
      </slot>
    </div>
  </slot>
  <div class="drawer" :class="toggle ? 'h-64 sm:h-48' : 'h-1'">
    <slot name="content" />
  </div>
</template>

<style scoped>
.drawer {
  @apply overflow-hidden;
  transition: all 0.2s;
}
</style>
