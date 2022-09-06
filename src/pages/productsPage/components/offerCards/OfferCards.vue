<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
    </div>
    <div :class="styled.cards">
      <div
        v-for="card in offers"
        :key="card.id"
        :class="styled.btnWrapper"
      >
        <ButtonUI
          type-style="pseudo"
          :class="styled.btn"
          @click="citySearch(card)"
        >
          <OfferCard
            :city="card.city"
            :count="card.count"
          />
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./offerCards.module.css";
import OfferCard from "../offerCard/OfferCard.vue";
import {mapActions, mapState} from "vuex";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";

export default {
  name: "OfferCards",
  components: {
    OfferCard,
    ButtonUI,
  },
  data(){
    return {
      styled,
    }
  },
  computed: {
    ...mapState("offers", ["offers"]),
    ...mapState('products', ['products']),
    allCount(){
      return this.offers.reduce((acc, card) => +card.count + acc, 0)
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
  beforeMount() {
    this.initOffers();
  },
  methods: {
    ...mapActions("offers", ["initOffers"]),
    ...mapActions("products", [
      "initProducts",
      "setSortDirection",
      "filterProductsAvailability",
      "cityFilter"
    ]),
    citySearch(card) {
      this.cityFilter(card.id);
    }
  },
}
</script>
