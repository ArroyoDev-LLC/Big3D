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
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1612888073644-c9d8fa45df5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1616427030011-214e41469f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1614086138082-8f9f4bed81e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
      <Carousel :circular="true" :autoplay-interval="3000" :value="imageList">
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
