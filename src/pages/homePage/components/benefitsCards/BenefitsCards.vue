<template>
  <div :class="styled.title">
    Почему стоит воспользоваться нашим сервисом?
  </div>
  <div :class="styled.wrapper">
    <div
      v-for="benefit in benefitsValue"
      :key="benefit.id"
    >
      <BenefitsCard
        :title="benefit.title"
        :sub-title="benefit.subTitle"
      >
        <component :is="imageMap[benefit.imgName]" />
      </BenefitsCard>
    </div>
  </div>
</template>

<script>
import BenefitsCard from "../benefitsCard/BenefitsCard.vue";
import imageMap from "./benifitImages";
import {benefitsValue} from "../../../../../data/benefitsValue";

import styled from "./benefitsCards.module.css";

export default {
  name: "BenefitsCards",
  components: {
    BenefitsCard,
  },
  data() {
    return {
      imageMap,
      styled,
      benefitsValue,
    };
  },
};
</script>
