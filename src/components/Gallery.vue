<template>
  <Carousel
    circular
    :value="imageList"
    :numVisible="1"
    :numScroll="1"
    :autoplayInterval="3000"
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
      default: () => [
        [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",
          "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg",
          "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg",
          "https://www.softwaretestingnews.co.uk/wp-content/uploads/2021/06/logo-copy-2-2-copy.png",
        ],
        [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",
          "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg",
          "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg",
          "https://www.softwaretestingnews.co.uk/wp-content/uploads/2021/06/logo-copy-2-2-copy.png",
        ],
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
