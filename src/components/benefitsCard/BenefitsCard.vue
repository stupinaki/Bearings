<template>
  <div :class="styled.wrapper">
    <div :class="styled.img">
      <img :src="way" :alt="imgName" />
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
  data() {
    return {
      styled,
    };
  },
  props: {
    title: String,
    subTitle: String,
    imgName: String,
    way: String,
  },
};
</script>
