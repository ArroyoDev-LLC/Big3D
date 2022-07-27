<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

interface RadioItem {
  value: string
  label?: string
}

export default defineComponent({
  name: 'RadioGroup',
  props: {
    radioGroup: {
      type: Array<RadioItem>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const setValue = (value: string) => {
      emit('select', value)
    }
    return {
      setValue
    }
  }
})
</script>

<template>
  <div v-for="(item, index) in radioGroup" :key="index">
    <div @click="setValue(item.value)">
      <input id="item.label" type="radio" />
      <label for="item.label">
        <slot :name="item.label ? item.label : item.value">
          {{ item.label ? item.label : item.value }}
        </slot>
      </label>
    </div>
  </div>
</template>

<style scoped>
input[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid gray;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input[type='radio']:checked {
  border: 5px solid yellow;
}
</style>
