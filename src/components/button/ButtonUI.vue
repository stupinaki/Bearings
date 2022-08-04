<template>
  <button
    :class="className"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
import styled from "./button.module.css";

export default {
  name: "ButtonUI",
  props: {
    size: {
      type: String,
      default: "m",
      validator(size) {
        return ["s", "m", "l"].includes(size);
      },
    },
    type: {
      type: String,
      require: true,
      default: "primary",
      validator(type) {
        return ["primary", "secondary", "pseudo", "typeLink"].includes(type);
      },
    },
    disabled: Boolean,
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    className() {
      const { size, type, disabled } = this.$props;
      const classes = [styled.btn];
      classes.push(styled[`btn-${size}`]);
      classes.push(styled[`btn-${type}`]);
      if (disabled) {
        classes.push(styled.btnDisabled);
      }
      return classes.filter((v) => v).join(" ");
    },
  },
};
</script>
