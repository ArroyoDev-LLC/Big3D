<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import Carousel from 'primevue/carousel'

export default defineComponent({
  name: 'GalleryComponent',
  components: { Carousel },
  props: {
    imageList: {
      type: Array as PropType<Array<Array<string>>>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <Carousel
    :circular="true"
    :value="imageList"
    :num-visible="1"
    :num-scroll="1"
    :autoplay-interval="10000"
  >
    <template #item="slotProps">
      <div class="grid grid-cols-2 gap-5">
        <div v-for="(item, index) in slotProps.data" :key="index">
          <img :src="item" class="col-span-1" />
        </div>
      </div>
    </template>
  </Carousel>
</template>
