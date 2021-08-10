<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1 text-left flex justify-center items-center">
      <div class="w-1/2">
        <div class="text-lg">Community</div>
        <div class="text-2xl font-bold">Our fans featured big prints</div>
        <div>
          We love the things that are being created out there and want to share
          it with you. Here are some examples of cool stuff being created with
          big3D
        </div>
      </div>
    </div>
    <GalleryComponent class="col-span-1" />
  </div>
</template>

<script lang="ts">
import GalleryComponent from "@/components/Gallery.vue";
export default {
  name: "Gallery",
  components: {
    GalleryComponent,
  },
};
</script>

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
