<template>
  <div :class="styled.cards">
    <div v-for="card in cardsValue" :class="styled.card" :key="card.id">
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
  data() {
    return {
      cardsValue,
      styled,
    };
  },
  components: {
    CompanyCard,
  },
};
</script>
