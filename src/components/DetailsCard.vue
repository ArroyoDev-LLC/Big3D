<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DetailsCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    details: {
      type: String,
      default: 'Details'
    },
    img: {
      type: String,
      required: false
    }
  }
})
</script>

<template>
  <div class="bg-black text-white text-left p-4">
    <slot name="header">
      <slot name="title">
        <div>{{ title }}</div>
      </slot>
      <slot name="image">
        <img v-if="img" :src="img" class="w-full" />
      </slot>
      <slot name="details">
        <div>{{ details }}</div>
      </slot>
    </slot>
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>
