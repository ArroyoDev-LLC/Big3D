<template>
  <div class="text-left text-xl md:text-3xl flex justify-between">
    {{ title }}

    <div>
      <span class="mx-2">
        <span class="text-yellow">{{ connectorInfo.connectors }}</span>
        Connectors
      </span>
      <span class="mx-2">
        <span class="text-yellow">{{ connectorInfo.edges }}</span>
        Edges
      </span>
    </div>
  </div>

  <div class="grid grid-cols-6 gap-4 text-left mt-6">
    <div class="col-span-4 p-3 border-t-4 border-big3dGray border-dotted">
      <span class="text-xl"> Square Wood Dowels </span>
      <div
        v-for="(value, index) in woodValues"
        :key="`${value}-${index}`"
        class="w-1/2 mt-4 grid grid-cols-6 gap-3 ml-5"
      >
        <input
          :id="`wood-dimension-${index}`"
          class="col-span-1"
          type="radio"
          v-model="currentSelection"
          :value="`wood:${value}`"
          :checked="index === 0"
        />
        <label class="col-span-5" :for="`wood-dimension-${index}`">
          {{ value }}
        </label>
      </div>
    </div>

    <img
      class="h-24 col-span-2 justify-self-end"
      src="images/square-wood-dowel.png"
    />
    <div class="col-span-4 p-3 border-t-4 border-big3dGray border-dotted">
      <span class="text-xl"> Round PVC Tubing (Coming Soon) </span>
      <div
        v-for="(value, index) in pvcValues"
        :key="`${value}-${index}`"
        class="w-1/2 mt-4 grid grid-cols-6 gap-3 ml-5"
      >
        <input
          :id="`pvc-dimension-${index}`"
          class="col-span-1"
          type="radio"
          v-model="currentSelection"
          :value="`pvc:${value}`"
        />
        <label class="col-span-5" :for="`pvc-dimension-${index}`">
          {{ value }}
        </label>
      </div>
    </div>
    <img
      class="h-24 col-span-2 justify-self-end"
      src="images/round-pvc-tubing.png"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from "vue";

export default defineComponent({
  name: "ConnectorView",
  components: {},
  emits: ["radioChange"],
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    connectorInfo: {
      type: Object as PropType<{ connectors: number; edges: number }>,
      required: true,
      default: () => ({ connectors: 0, edges: 0 }),
    },
  },

  // setup function
  setup(props, { emit }) {
    const currentSelection = ref("");

    const woodValues = ref([
      "3/4” (19.05 mm)",
      "1/2” (12.7 mm)",
      "1/4” (6.35 mm)",
    ]);

    const pvcValues = ref(["3/4” (19.05 mm)", "1/2” (12.7 mm)"]);

    watchEffect(() => {
      emit("radioChange", currentSelection.value);
    });

    return {
      currentSelection,
      woodValues,
      pvcValues,
    };
  },
});
</script>

<style lang="postcss" scoped>
input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid theme("colors.big3dGray");
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input[type="radio"]:checked {
  border: 5px solid theme("colors.yellow");
}
</style>
