<template>
  <div :class="styled.pagination">
    <div
      v-for="page in visibleQuantityPage"
      :key="page"
    >
      <ButtonUI
        type="pseudo"
      >
        {{ page }}
      </ButtonUI>
    </div>

    <div
      v-if="quantityPage > 10"
      :class="styled.morePages"
    >
      <div :class="styled.dots">
        ...
      </div>
      <ButtonUI type="pseudo">
        {{ quantityPage }}
      </ButtonUI>
      <ButtonUI type="pseudo">
        Вперед
        <ArrowForwardImg />
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import ButtonUI from "../button/ButtonUI.vue";
import ArrowForwardImg from "../../../assets/iconForward.svg";
import styled from "./paginationUI.module.css";

export default {
  name: "PaginationUI",
  components: {
    ButtonUI,
    ArrowForwardImg,
  },
  props: {
    quantityCard: {
      type: Number,
      required: true,
    },
    chunk: {
      type: Number,
      required: true,
      default: 10,
    }
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    quantityPage() {
      return Math.round(this.quantityCard / this.chunk);
    },
    visibleQuantityPage() {
      if(this.quantityPage <= 10) {
        return this.quantityPage;
      }
      return 10;
    },
  }
}

</script>
