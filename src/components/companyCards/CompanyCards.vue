<template>
  <div :class="styled.cards">
    <div
      v-for="card in searchCards"
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
  props: {
    searchCompanyName: {
      type: String,
      require: false,
      default: undefined,
    }
  },
  data() {
    return {
      cardsValue,
      styled,
    };
  },
  computed: {
    searchCards() {
      const { searchCompanyName } = this.$props;
      const { cardsValue } = this.$data;
      if (!searchCompanyName) {
        return cardsValue;
      }
      return cardsValue.filter(card => card.title.toLowerCase().includes(searchCompanyName));
    }
  },

};
</script>
