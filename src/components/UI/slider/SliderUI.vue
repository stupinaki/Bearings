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
      default: 1,
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
      return chunk(this.$props.items, this.$props.visibleItemsMaxCount);
    },
    currentItems() {
      return this.visibleItems[this.$data.chunkNumber];
    },
    btnNextStyle() {
      if (this.$data.chunkNumber + 1 < this.visibleItems.length) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    },
    btnPrevStyle() {
      if (this.$data.chunkNumber > 0) {
        return [styled.btnWrapper, styled.btnVisible];
      }
      return [styled.btnWrapper, styled.btnHide];
    }
  },
  methods: {
    goNext() {
      if (this.$data.chunkNumber < this.visibleItems.length - 1) {
        this.$data.chunkNumber++;
      }
    },
    goPrev() {
      if (this.$data.chunkNumber > 0) {
        this.$data.chunkNumber--;
      }
    }
  }
}
</script>
