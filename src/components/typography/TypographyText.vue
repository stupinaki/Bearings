<template>
  <span :class="styled.typography"></span>
</template>

<script>
import styled from "./typography.module.css";

export default {
  name: "TypographyText",
  data() {
    return {
      styled,
    };
  },
  props: {
    size: {
      type: String,
      default: "subTitle1",
      validator(size) {
        return [
          "subTitle2",
          "subTitle1",
          "title2",
          "title1",
          "header3",
          "header2",
          "header1",
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
        return ["darkgray", "darkblue", "white", "gray", "coral"].includes(
          type
        );
      },
    },
  },
  computed: {
    className() {
      const { size, font, color } = this.$props;
      const classes = [styled.typography];
      classes.push(size);
      classes.push(styled[`font-${font}`]);
      classes.push(styled[`color-${color}`]);

      return classes.filter((v) => v).join(" ");
    },
  },
};
</script>
