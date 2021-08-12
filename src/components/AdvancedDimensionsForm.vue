<template>
  <div>
    <div
      class="grid grid-cols-2 text-left"
      v-for="(field, index) in fieldKeys"
      :key="index"
    >
      <label :for="field" class="text-lg self-center">
        {{ getStartCase(field) }}
      </label>
      <input
        class="m-2 p-4 self-center text-black"
        type="number"
        :name="field"
        :id="field"
        v-model="formData[field]"
        @input="$emit('formUpdate', formData)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from "vue";

export interface AdvancedDimensionFormSchema {
  longestDimension: number;
  gap: number;
  supportScale: number;
  coreSizeMultiplier: number;
  fixtureShellThicknessMultiplier: number;
  labelSizeMultiplier: number;
  labelWidthMultiplier: number;
}

export default defineComponent({
  name: "MyComponentNameHere",
  props: {
    advancedDimensionsFormData: {
      type: Object as PropType<AdvancedDimensionFormSchema>,
      required: false,
      default: (): AdvancedDimensionFormSchema => ({
        longestDimension: 0,
        gap: 0,
        supportScale: 0,
        coreSizeMultiplier: 0,
        fixtureShellThicknessMultiplier: 0,
        labelSizeMultiplier: 0,
        labelWidthMultiplier: 0,
      }),
    },
  },
  setup(props) {
    const fieldKeys = ref(
      Object.keys(
        props.advancedDimensionsFormData as AdvancedDimensionFormSchema
      )
    );

    const formData = ref(
      props.advancedDimensionsFormData as AdvancedDimensionFormSchema
    );

    const getStartCase = (str: string): string => {
      const result = str.replace(/([A-Z])/g, " $1");
      return result.charAt(0).toUpperCase() + result.slice(1);
    };

    watchEffect(() => console.log(fieldKeys.value));

    return {
      formData,
      fieldKeys,
      getStartCase,
    };
  },
});
</script>

<style lang="postcss" scoped></style>
