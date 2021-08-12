<template>
  <Carousel
    :circular="true"
    :value="imageList"
    :numVisible="1"
    :numScroll="1"
    :autoplayInterval="10000"
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
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Carousel from "primevue/carousel";

export default defineComponent({
  name: "GalleryComponent",
  components: { Carousel },
  props: {
    imageList: {
      type: Array as PropType<Array<Array<string>>>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>
