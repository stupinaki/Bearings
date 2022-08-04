<template>
  <div :class="styled.wrapper">
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
    title: String,
    subTitle: String,
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
