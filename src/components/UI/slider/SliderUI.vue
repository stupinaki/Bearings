<template>
  <div :class="styled.wrapper">
    <ButtonUI
      type-style="pseudo"
      :class="btnPrevStyle"
      @click="goPrev"
    >
      <ArrowImg :class="styled.arrowPrev" />
    </ButtonUI>
    <slot :items="currentItems" />
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
import {breakpoints} from "../../../consts/breakpoints";
import {mapState} from "vuex";
import ArrowImg from "../../../assets/iconForward.svg";
import ButtonUI from "../button/ButtonUI.vue";
import styled from "./sliderUI.module.css";

export default {
  name: "SliderUI",
  components: {
    ArrowImg,
    ButtonUI,
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    visibleItemsMaxCount: {
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
    ...mapState("viewport", ["viewportWidth"]),
    visibleItems() {
      const {visibleItemsMaxCount, items} = this.$props;
      if (this.viewportWidth < breakpoints.extraLarge && this.viewportWidth > breakpoints.large) {
        return chunk(items, 4);
      }
      if (this.viewportWidth <= breakpoints.large && this.viewportWidth > breakpoints.small) {
        return chunk(items, 3);
      }
      if (this.viewportWidth <= breakpoints.small && this.viewportWidth > breakpoints.extraSmall) {
        return chunk(items, 2);
      }
      if (this.viewportWidth <= breakpoints.extraSmall) {
        return chunk(items, 1);
      }
      return chunk(items, visibleItemsMaxCount);
    },
    currentItems() {
      return this.visibleItems[this.$data.chunkNumber];
    },
    btnNextStyle() {
      if (this.visibleItems.length === 1) {
        return [styled.btnWrapper, styled.btnHide];
      }
      if (this.$data.chunkNumber < this.visibleItems.length - 1) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    },
    btnPrevStyle() {
      if (this.visibleItems.length === 1) {
        return [styled.btnWrapper, styled.btnHide];
      }
      if (this.$data.chunkNumber > 0) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    }
  },
  methods: {
    goNext() {
      if (this.$data.chunkNumber < this.visibleItems.length - 1) {
        return this.$data.chunkNumber++;
      }
    },
    goPrev() {
      if (this.$data.chunkNumber > 0) {
        return this.$data.chunkNumber--;
      }
    }
  }
}
</script>
