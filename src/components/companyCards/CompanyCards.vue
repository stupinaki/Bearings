<template>
  <div :class="styled.cards">
    <div
      v-for="card in cardsValue"
      :key="card.id"
      :class="styled.card"
    >
      <CompanyCard v-bind="card" />
    </div>
  </div>
</template>

<script>
import CompanyCard from "../companyCard/CompanyCard.vue";
import { cardsValue } from "../../../data/cardsValue";
import styled from "./companyCards.module.css";

export default {
  name: "CompanyCards",
  components: {
    CompanyCard,
  },
  data() {
    return {
      cardsValue,
      styled,
    };
  },
};
</script>
