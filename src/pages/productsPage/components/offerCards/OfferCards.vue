<template>
  <div :class="styled.wrapper">
    <span :class="styled.title">
      Найдено {{ allCount }} {{ correctWord }}
    </span>

    <SliderUI
      :items="offers"
      :visible-items-max-count="visibleItemsMaxCount"
    >
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
import {breakpoints} from "../../../../consts/breakpoints";
import {getCorrectWord} from "../../../../helpers/getCorrectWord";
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
      words: ["предложение", "предложения", "предложений"],
    }
  },
  computed: {
    ...mapState("offers", ["offers"]),
    ...mapState('products', ['products']),
    ...mapState("viewport", ["viewportWidth"]),
    allCount() {
      return this.offers.reduce((acc, card) => +card.count + acc, 0)
    },
    correctWord() {
      const correctWord = getCorrectWord(this.$data.words);
      return correctWord(this.allCount);
    },
    visibleItemsMaxCount() {
      if (this.viewportWidth < breakpoints.extraLarge && this.viewportWidth > breakpoints.large) {
        return 4;
      }
      if (this.viewportWidth <= breakpoints.large && this.viewportWidth > breakpoints.small) {
        return 3;
      }
      if (this.viewportWidth <= breakpoints.small && this.viewportWidth > breakpoints.extraSmall) {
        return 2;
      }
      if (this.viewportWidth <= breakpoints.extraSmall) {
        return 1;
      }
      return 5;
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
