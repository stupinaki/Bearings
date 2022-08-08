<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
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
    correctWord(){
      const count = this.allCount.toString();
      const lastDigit = +count[count.length - 1];
      if(lastDigit === 1){
        return "предложение";
      }
      if(lastDigit === 2 || lastDigit === 3 || lastDigit === 4){
        return "предложения";
      }
      return "предложений";
    },
  },
}
</script>
