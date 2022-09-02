<template>
  <div :class="styled.wrapper">
    <ButtonUI
      type-style="pseudo"
      :class="btnPrevStyle"
      @click="goPrev"
    >
      <ArrowImg :class="styled.arrowPrev" />
    </ButtonUI>

    <div :class="styled.slider">
      <div
        v-for="card in visibleItems[chunkNumber]"
        :key="card.id"
      >
        <OfferCard
          :city="card.city"
          :count="card.count"
        />
      </div>
    </div>

    <ButtonUI
      type-style="pseudo"
      :class="btnNextStyle"
      @click="goNext"
    >
      <ArrowImg />
    </ButtonUI>
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import OfferCard from "../../../pages/productsPage/components/offerCard/OfferCard.vue";
import ArrowImg from "../../../assets/iconForward.svg";
import ButtonUI from "../button/ButtonUI.vue";
import styled from "./sliderUI.module.css";

export default {
  name: "SliderUI",
  components: {
    ArrowImg,
    ButtonUI,
    OfferCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    visibleItemsCount: {
      type: Number,
      required: false,
      default: 5,
    }
  },
  data() {
    return {
      styled,
      chunkNumber: 0,
    }
  },
  computed: {
    visibleItems() {
      const {visibleItemsCount, items} = this.$props;
      return chunk(items, visibleItemsCount);
    },
    btnNextStyle() {
      if(this.visibleItems.length === 1) {
        return [styled.btnWrapper, styled.btnHide];
      }
      if(this.$data.chunkNumber < this.visibleItems.length - 1) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    },
    btnPrevStyle() {
      if(this.visibleItems.length === 1) {
        return [styled.btnWrapper, styled.btnHide];
      }
      if(this.$data.chunkNumber > 0) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    }
  },
  methods: {
    goNext() {
      if(this.$data.chunkNumber < this.visibleItems.length - 1) {
        return this.$data.chunkNumber++
      }
    },
    goPrev() {
      if(this.$data.chunkNumber > 0) {
        return this.$data.chunkNumber--
      }
    }
  }
}
</script>
