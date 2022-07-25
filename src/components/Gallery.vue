<script lang="ts">
import { defineComponent, ref } from 'vue'
import Carousel from 'primevue/carousel'
export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel
  },
  setup() {
    const imageList = ref([
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
      'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
      'https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg',
      'https://www.softwaretestingnews.co.uk/wp-content/uploads/2021/06/logo-copy-2-2-copy.png'
    ])
    return {
      imageList
    }
  }
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-2 dark:text-white">
    <div class="col-span-1 text-left flex justify-center items-center">
      <div class="ml-8">
        <div class="text-lg">GALLERY</div>
        <div class="text-5xl font-bold">
          Our Fans Featured
          <span class="bg-yellow dark:text-gray-500">Big Prints</span>
        </div>
        <div class="text-lg">
          We love the things that are being created out there and want to share
          it with you. Here are some examples of cool stuff being created with
          big3D
        </div>
      </div>
    </div>
    <div>
      <Carousel :circular="true" autoplay-interval="3000" :value="imageList">
        <template #item="{ data }">
          <div class="flex items-center justify-center h-full">
            <img :src="data" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.divHighlight:hover {
  @apply bg-white;
  color: black;
}
</style>
