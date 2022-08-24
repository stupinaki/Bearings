<template>
  <button
    :class="className"
    :disabled="disabled"
    :type="type"
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
    name: {
      type: String,
      default: "primary",
      validator(type) {
        return ["primary", "secondary", "pseudo", "type-link"].includes(type);
      },
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator(type) {
        return ["button", "submit", "reset"].includes(type);
      },
    },
    disabled: Boolean
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    className() {
      const { size, name, disabled } = this.$props;
      const classes = [styled.btn];
      classes.push(styled[`btn-${size}`]);
      classes.push(styled[`btn-${name}`]);
      if (disabled) {
        classes.push(styled.btnDisabled);
      }
      return classes.filter((v) => v).join(" ");
    },
  },
};
</script>
