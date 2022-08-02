<template>
  <div :class="styled.primary">
    {{ value }}
  </div>
</template>

<script>
import styled from "./chipLabel.module.css";

export default {
  name: "ChipLabel",
  data() {
    return {
      styled,
    };
  },
  props: {
    value: {
      type: String,
      color: {
        type: String,
      },
    },
  },
};
</script>
