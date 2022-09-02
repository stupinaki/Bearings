<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
    </div>
    <div :class="styled.cards">
      <div
        v-for="card in visibleOffers"
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
    <ButtonUI
      type-style="type-link"
      :class="styled.btnMore"
      @click="showMore"
    >
      Показать больше предложений по городам
      <ArrowImg :class="arrowStyle" />
    </ButtonUI>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import OfferCard from "../offerCard/OfferCard.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import ArrowImg from "../../../../assets/iconForward.svg"
import styled from "./offerCards.module.css";


export default {
  name: "OfferCards",
  components: {
    OfferCard,
    ButtonUI,
    ArrowImg
  },
  data(){
    return {
      styled,
      isAllOffersVisible: false,
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
    visibleOffers() {
      if(this.$data.isAllOffersVisible) {
        return this.offers;
      }
      return this.offers.slice(0, 5);
    },
    arrowStyle() {
      if(this.$data.isAllOffersVisible) {
        return styled.arrowUp;
      }
      return styled.arrowDown;
    }
  },
  beforeMount() {
    this.initOffers();
  },
  methods: {
    ...mapActions("offers", ["initOffers"]),
    ...mapActions("products", [
      "filterProductsAvailability",
      "setSortDirection",
      "initProducts",
      "cityFilter"
    ]),
    citySearch(card) {
      this.cityFilter(card.id);
    },
    showMore() {
      this.$data.isAllOffersVisible = !this.$data.isAllOffersVisible;
    }
  },
}
</script>
