<template>
  <div :class="styled.wrapper">
    <span :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
    </span>

    <SliderUI :items="offers">
      <template #default="props">
        <div :class="styled.cards">
          <ButtonUI
            v-for="card in props.items"
            :key="card.id"
            :class="styled.btn"
            type-style="pseudo"
            @click="citySearch(card)"
          >
            <OfferCard
              :city="card.city"
              :count="card.count"
            />
          </ButtonUI>
        </div>
      </template>
    </SliderUI>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import OfferCard from "../offerCard/OfferCard.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import SliderUI from "../../../../components/UI/slider/SliderUI.vue";
import styled from "./offerCards.module.css";


export default {
  name: "OfferCards",
  components: {
    OfferCard,
    ButtonUI,
    SliderUI,
  },
  data() {
    return {
      styled,
      isAllOffersVisible: false,
    }
  },
  computed: {
    ...mapState("offers", ["offers"]),
    ...mapState('products', ['products']),
    allCount() {
      return this.offers.reduce((acc, card) => +card.count + acc, 0)
    },
    correctWord() {
      const count = this.allCount.toString();
      const lastDigit = +count[count.length - 1];
      if (lastDigit === 1) {
        return "предложение";
      }
      if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
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
      "filterProductsAvailability",
      "setSortDirection",
      "initProducts",
      "cityFilter"
    ]),
    citySearch(card) {
      this.cityFilter(card.id);
    },
  },
}
</script>
