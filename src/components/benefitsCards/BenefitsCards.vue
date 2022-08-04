<template>
  <div :class="styled.wrapper">
    <div
      v-for="benefit in benefitsValue"
      :key="benefit.id"
    >
      <BenefitsCard
        :title="benefit.title"
        :sub-title="benefit.subTitle"
      >
      </BenefitsCard>
    </div>
  </div>
</template>

<script>
import BenefitsCard from "../benefitsCard/BenefitsCard.vue";
import { benefitsValue } from "../../../data/benefitsValue";
import styled from "./benefitsCards.module.css";

export default {
  name: "BenefitsCards",
  components: {
    BenefitsCard,
  },
  data() {
    return {
      benefitsValue,
      styled,
    };
  },
};
</script>
