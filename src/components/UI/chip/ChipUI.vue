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
      require: true,
      default: undefined,
      color: {
        type: String,
      },
    },
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
