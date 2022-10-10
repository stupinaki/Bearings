<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Почему стоит воспользоваться нашим сервисом?
    </div>
    <div :class="styled.benefitsWrapper">
      <div
        v-for="benefit in benefitsValue"
        :key="benefit.id"
      >
        <BenefitsCard
          :title="benefit.title"
          :sub-title="benefit.subTitle"
          :is-special-background="benefit.isSpecialBackground"
        >
          <component :is="imageMap[benefit.imgName]" />
        </BenefitsCard>
      </div>
    </div>
  </div>
</template>

<script>
import BenefitsCard from "../benefitsCard/BenefitsCard.vue";
import imageMap from "./benifitImages";
import styled from "./benefitsCards.module.css";

export default {
  name: "BenefitsCards",
  components: {
    BenefitsCard,
  },
  props: {
    benefitsValue: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      imageMap,
      styled,
    };
  }
};
</script>
