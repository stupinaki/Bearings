<template>
  <span class="typography"></span>
</template>

<script>
// import styled from "./typography.css";

export default {
  name: "TypographyText",
  props: {
    size: {
      type: String,
      default: "xxm",
      validator(size) {
        return [
          "xxs",
          "xs",
          "s",
          "xxm",
          "xm",
          "m",
          "xxxl",
          "xxl",
          "xl",
          "l",
        ].includes(size);
      },
    },
    font: {
      type: String,
      default: "Inter",
      validator(type) {
        return ["Inter"].includes(type);
      },
    },
    color: {
      type: String,
      default: "darkgrey",
      validator(type) {
        return [
          "darkgray",
          "darkblue",
          "white",
          "gray",
          "lightgray",
          "coral",
        ].includes(type);
      },
    },
  },
  computed: {
    className() {
      const { size, font, color } = this.$props;
      const classes = ["typography"];
      classes.push(`size-${size}`);
      classes.push(`font-${font}`);
      classes.push(`color-${color}`);

      return classes.filter((v) => v).join(" ");
    },
  },
};
</script>
