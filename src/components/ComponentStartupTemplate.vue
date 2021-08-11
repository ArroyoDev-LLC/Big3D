<template>
  <div class="my-component">{{ myVar }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "MyComponentNameHere",
  components: {},

  // example prop definitions
  props: {
    prop1: {
      type: String,
      required: false,
      default: "",
    },
    prop2: {
      type: Boolean,
      required: true,
      default: false,
    },
    prop3: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: [1, 2, 3],
    },
  },

  // setup function
  setup() {
    const myVar = ref<string>("Hello world");
    return {
      myVar,
    };
  },
});
</script>

<style lang="postcss" scoped></style>
