<template>
  <div class="m-uploader">
    <div class="m-uploader__dropbox">
      <input
        id="m-uploader"
        v-bind="$attrs"
        class="m-uploader__input"
        name="m-uploader"
        type="file"
        @change="handleFileChange($event.target.files)"
      />

      <div class="m-uploader__bg-image">
        <img :src="bgImagePath" alt="m-uploader-bg-image" />
      </div>

      <div v-if="isLoading" class="m-uploader__loader">
        Uploading file {{ selectedModelName }}...
        <Spinner />
      </div>

      <div v-else class="m-uploader__labels">
        <div class="md:text-2xl font-bold">
          {{ label }}
        </div>

        <hr class="w-2/3 bg-white h-px m-8" />

        <button class="font-bold cursor-pointer py-4 px-8 bg-white text-black">
          Browse
        </button>
      </div>
    </div>

    <small v-show="errorMessage" class="text-red-500">{{ errorMessage }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  name: "ModelUploader",
  components: { Spinner },
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    subLabel: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    bgImagePath: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    selectedModelName: {
      type: String,
      default: "",
    },
    handleFileChange: {
      type: Function as PropType<(files: FileList) => Promise<unknown>>,
      default: null,
    },
  },
});
</script>

<style scoped>
.m-uploader__dropbox {
  word-break: break-word;
  @apply p-4
  border-2 border-dashed border-big3dGray
  relative
  w-full h-full
  bg-big3dGray bg-opacity-5
  hover:bg-opacity-10
  transition duration-300
  cursor-pointer
  flex flex-col
  justify-center
  items-center
  text-center;
}

.m-uploader__input {
  z-index: 10;
  @apply absolute
  top-0
  left-0
  opacity-0
  w-full
  h-full
  cursor-pointer;
}

.m-uploader__bg-image {
  @apply absolute;
  z-index: 0;
  bottom: 2%;
  right: 1%;
}

.m-uploader__loader {
  @apply absolute inset-0 flex flex-col items-center;
  top: 40%;
}
</style>
