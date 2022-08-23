<template>
  <div
      :class="styled.wrapper"
  >
    <v-select
      :outlined="outlined"
      :clearable="clearable"
      :items="options"
      :label="label"
      :variant="variant"
      ref="select"
      @select="onChange"
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
  data(){
    return {
      styled,
    }
  },
  methods: {
    onChange() {
      console.log("выбрали опцию")
    }
  }
}
</script>
