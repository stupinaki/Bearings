<template>
  <div :class="styled.pagination">
    <div
      v-if="hasPrev"
      :class="styled.morePages"
    >
      <ButtonUI
        type-style="pseudo"
        @click="changePage(currentPageNumber - 1)"
      >
        <ArrowForwardImg :class="styled.arrow" />
        Назад
      </ButtonUI>
      <ButtonUI
        v-if="isFirstVisible"
        type-style="pseudo"
        @click="changePage(1)"
      >
        1
      </ButtonUI>
      <div
        v-if="isFirstVisible"
        class="styled.dots"
      >
        ...
      </div>
    </div>

    <div
      v-for="pageNumberLeft in leftButtons"
      :key="pageNumberLeft"
    >
      <ButtonUI
        type-style="pseudo"
        @click="changePage(pageNumberLeft)"
      >
        {{ pageNumberLeft }}
      </ButtonUI>
    </div>

    <ButtonUI
      :class="styled.selectedBtn"
      type-style="pseudo"
    >
      {{ currentPageNumber }}
    </ButtonUI>

    <div
      v-for="pageNumberRight in rightButtons"
      :key="pageNumberRight"
    >
      <ButtonUI
        type-style="pseudo"
        @click="changePage(pageNumberRight)"
      >
        {{ pageNumberRight }}
      </ButtonUI>
    </div>

    <div
      v-if="hasNext"
      :class="styled.morePages"
    >
      <div
        v-if="isLastVisible"
        :class="styled.dots"
      >
        ...
      </div>
      <ButtonUI
        v-if="isLastVisible"
        type-style="pseudo"
        @click="changePage(totalPages)"
      >
        {{ totalPages }}
      </ButtonUI>
      <ButtonUI
        type-style="pseudo"
        @click="changePage(currentPageNumber + 1)"
      >
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
    totalQty: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true
    },
    visiblePageCount: {
      type: Number,
      required: true,
      default: 5,
    },
    currentPageNumber: {
      type: Number,
      required: true,
    }
  },
  emits: ["changePageNumber"],
  data() {
    return {
      styled,
    }
  },
  computed: {
    hasNext() {
      return this.$props.currentPageNumber < this.totalPages;
    },
    hasPrev() {
      return this.$props.currentPageNumber > 1;
    },
    isFirstVisible() {
      return this.$props.currentPageNumber - 1 > this.leftButtonQty;
    },
    isLastVisible() {
      return this.$props.currentPageNumber + this.rightButtonQty !== this.totalPages;
    },
    totalPages() {
      const {totalQty, pageSize} = this.$props;
      return Math.ceil(totalQty / pageSize);
    },
    sideButtonCount() {
      if (this.$props.visiblePageCount > this.totalPages) {
        return Math.floor((this.totalPages - 1) / 2);
      }
      return Math.floor((this.$props.visiblePageCount - 1) / 2);
    },
    buttonCountOffset() {
      if (this.currentPageNumber <= this.sideButtonCount) {
        return this.sideButtonCount + 1 - this.currentPageNumber;
      }
      const stop = this.totalPages - this.sideButtonCount;
      if (this.currentPageNumber >= stop) {
        return stop - this.currentPageNumber;
      }
      return 0;
    },
    leftButtonQty() {
      return this.sideButtonCount - this.buttonCountOffset;
    },
    rightButtonQty() {
      return this.sideButtonCount + this.buttonCountOffset;
    },
    leftButtons() {
      return new Array(this.leftButtonQty)
          .fill(this.currentPageNumber)
          .map((pageNumber, i) => pageNumber - i - 1)
          .reverse();
    },
    rightButtons() {
      return new Array(this.rightButtonQty)
          .fill(this.currentPageNumber)
          .map((pageNumber, i) => i + 1 + pageNumber);
    }
  },
  methods: {
    changePage(page) {
      this.$emit("changePageNumber", page)
    },
  }
}

</script>
