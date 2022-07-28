<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

interface RadioItem {
  value: string
  label?: string
  id?: string
}

export default defineComponent({
  name: 'RadioGroup',
  props: {
    radioGroup: {
      type: Array<RadioItem | string>,
      default: () => []
    },
    itemClasses: {
      type: String,
      default: ''
    },
    containerClasses: {
      type: String,
      default: ''
    },
    groupName: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const group = ref(props.radioGroup)
    const selection = ref('')
    return {
      selection,
      group
    }
  }
})
</script>

<template>
  <div v-for="(item, index) in group" :key="index">
    <div :class="containerClasses">
      <input
        :id="item.id ? item.id : `${groupName}-${index}`"
        v-model="selection"
        type="radio"
        :value="typeof item === 'string' ? item : item.value"
        :checked="index === null"
        :disabled="disabled"
        @click="$emit('select', item.value)"
      />
      <label :class="itemClasses" :for="`${groupName}-${index}`">
        <slot :name="item.label ? item.label : item.value">
          {{
            typeof item === 'string'
              ? item
              : item.label
              ? item.label
              : item.value
          }}
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
