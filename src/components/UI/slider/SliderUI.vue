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
      default: 5,
    }
  },
  data() {
    return {
      styled,
      chunkNumber: 0,
      windowInnerWidth: undefined,
    }
  },
  computed: {
    visibleItems() {
      const {visibleItemsMaxCount, items} = this.$props;
      if(this.$data.windowInnerWidth < 1200 && this.$data.windowInnerWidth > 900) {
        return chunk(items, 4);
      }
      if(this.$data.windowInnerWidth <= 900 && this.$data.windowInnerWidth > 700) {
        return chunk(items, 3);
      }
      if(this.$data.windowInnerWidth <= 700) {
        return chunk(items, 2);
      }
      return chunk(items, visibleItemsMaxCount);
    },
    currentItems() {
      return this.visibleItems[this.$data.chunkNumber];
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
  beforeMount() {
    this.$data.windowInnerWidth = window.innerWidth;
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
