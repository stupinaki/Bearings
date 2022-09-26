<template>
  <div :class="styled.primary">
    {{ value }}
  </div>
</template>

<script>
import styled from "./chipUI.module.css";

export default {
  name: "ChipUI",
  props: {
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
