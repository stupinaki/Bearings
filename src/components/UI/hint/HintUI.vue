<template>
  <div
    tabindex="-1"
    :class="styled.hint"
  >
    <div :class="styled.img">
      <slot name="hintImg" />
    </div>
    <div :class="styled.text">
      {{ text }}
    </div>
  </div>
</template>

<script>
import styled from "./hintUI.module.css";

export default {
  name: "HintUI",
  props: {
    text: {
      type: String,
      require: true,
      default: "",
    }
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
