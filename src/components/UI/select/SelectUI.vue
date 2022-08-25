<template>
  <div
    :class="styled.wrapper"
  >
    <v-select
      v-model="selected"
      :outlined="outlined"
      :clearable="clearable"
      :items="options"
      :label="label"
      :variant="variant"
      @update:model-value="onChange"
    />
  </div>
</template>

<script>
import styled from "./select.module.css";

export default {
  name: "SelectUI",
  props: {
    options: {
      type: Array,
      require: true,
      default: () => [],
    },
    clearable: Boolean,
    outlined: Boolean,
    label: {
      type: String,
      require: false,
      default: "Сортировать по",
    },
    variant: {
      type: String,
      require: false,
      default: "outlined",
    }
  },
  emits: ["selectOption"],
  data(){
    return {
      styled,
      selected: undefined,
    }
  },
  methods: {
    onChange(direction){
      this.$emit("selectOption", direction);
    }
  }
}
</script>
