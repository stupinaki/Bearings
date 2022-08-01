<template>
  <div :class="styled.wrapper">
    <div v-for="benefit in benefitsValue" :key="benefit.id">
      <BenefitsCard
          :title="benefit.title"
          :subTitle="benefit.subTitle"
          :way="benefit.way"
          :imgName="benefit.imgName"
      />
    </div>
  </div>
</template>

<script>
import BenefitsCard from "../benefitsCard/BenefitsCard.vue";
import { benefitsValue } from "../../../data/benefitsValue";
import styled from "./benefitsCards.module.css";


export default {
  name: "BenefitsCards",
  data(){
    return {
      benefitsValue,
      styled,
    }
  },
  components: {
    BenefitsCard,
  }
}
</script>
