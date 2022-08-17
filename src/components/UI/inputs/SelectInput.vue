<template>
  <select
    name="select"
    :class="styled.select"
  >
    <slot name="hint-options" />
    <option
      v-for="option in options"
      :key="option.id"
      :class="styled.option"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import styled from "./select.module.css";

export default {
  name: "SelectInput",
  props: {
    options: {
      type: Array,
      require: true,
      default: () => { [] },
    },
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
