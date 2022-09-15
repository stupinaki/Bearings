<template>
  <button
    type="button"
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
    typeStyle: {
      type: String,
      default: "primary",
      validator(style) {
        return ["primary", "secondary", "pseudo", "type-link"].includes(style);
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
      const {size, typeStyle, disabled} = this.$props;
      const classes = [styled.btn];
      classes.push(styled[`btn-${size}`]);
      classes.push(styled[`btn-${typeStyle}`]);
      if (disabled) {
        classes.push(styled.btnDisabled);
      }
      return classes.filter((v) => v).join(" ");
    },
  },
};
</script>
