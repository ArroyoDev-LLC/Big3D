<template>
  <div class="m-uploader">
    <div class="m-uploader__dropbox">
      <input
        id="m-uploader"
        v-bind="$attrs"
        class="m-uploader__input"
        name="m-uploader"
        type="file"
        :disabled="isLoading"
        @change="handleFileChange($event.target.files)"
      />

      <div class="m-uploader__bg-image">
        <img :src="bgImagePath" alt="m-uploader-bg-image" />
      </div>

      <div v-if="isLoading" class="m-uploader__loader">
        Uploading file {{ selectedModelName }}...
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
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

export default defineComponent({
  name: "ModelUploader",
  components: {},
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
