<template>
  <div :class="wrapperStyle">
    <div :class="styled.img">
      <slot />
    </div>
    <div :class="styled.title">
      {{ title }}
    </div>
    <div :class="styled.subTitle">
      {{ subTitle }}
    </div>
  </div>
</template>

<script>
import styled from "./benefitsCard.module.css";

export default {
  name: "BenefitsCard",
  props: {
    title: {
      type: String,
      require: true,
      default: "-"
    },
    subTitle: {
      type: String,
      require: true,
      default: "-"
    },
    imgName: {
      type: String,
      require: true,
      default: "-"
    },
    way: {
      type: String,
      require: true,
      default: "-"
    },
    isSpecialBackground: Boolean,
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    wrapperStyle() {
      return this.$props.isSpecialBackground ? styled.wrapperSpecial : styled.wrapperDefault
    }
  }
};
</script>
