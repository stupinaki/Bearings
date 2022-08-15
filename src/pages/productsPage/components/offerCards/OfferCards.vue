<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
    </div>
    <div :class="styled.cards">
      <div
        v-for="card in offers"
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
import OfferCard from "../offerCard/OfferCard.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "OfferCards",
  components: {
    OfferCard,
  },
  data(){
    return {
      styled,
    }
  },
  beforeMount() {
    this.initOffers();
  },
  methods: {
    ...mapActions("offers", ["initOffers"]),
  },
  computed: {
    ...mapState("offers", ["offers"]),
    allCount(){
      return this.offers.reduce((acc, card) => acc + +card.count, 0)
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