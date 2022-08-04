<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Найдено {{ allCount }} предложений
    </div>
    <div :class="styled.cards">
      <div
        v-for="card in offerCardsValue"
        :key="card.id"
      >
        <OfferCard
          :city="card.city"
          :count="card.count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./offerCards.module.css";
import {offerCardsValue} from "../../../data/offerCardsValue";
import OfferCard from "../offerCard/OfferCard.vue";

export default {
  name: "OfferCards",
  components: {
    OfferCard,
  },
  data(){
    return {
      styled,
      offerCardsValue,
    }
  },
  computed: {
    allCount(){
      return this.offerCardsValue.reduce((acc, card) => acc + +card.count, 0)
    },
  },
}
</script>
