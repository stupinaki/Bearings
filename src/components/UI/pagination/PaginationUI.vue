<template>
  <div :class="styled.pagination">
    <div
      v-if="hasPrev"
      :class="styled.morePages"
    >
      <ButtonUI
        type-style="pseudo"
        @click="prevPage"
      >
        <ArrowForwardImg :class="styled.arrow" />
        Назад
      </ButtonUI>
      <ButtonUI
        v-if="isFirstVisible"
        type-style="pseudo"
        @click="getFirstPage"
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
      {{ pageNumber }}
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
        @click="getLastPage"
      >
        {{ totalPages }}
      </ButtonUI>
      <ButtonUI
        type-style="pseudo"
        @click="nextPage"
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
    }
  },
  emits: ["changePageNumber"],
  data() {
    return {
      styled,
      pageNumber: 1,
    }
  },
  computed: {
    hasNext() {
      return this.$data.pageNumber < this.totalPages;
    },
    hasPrev() {
      return this.$data.pageNumber > 1;
    },
    isFirstVisible() {
      return this.$data.pageNumber - 1 > this.leftButtonQty;
    },
    isLastVisible() {
      return this.$data.pageNumber + this.rightButtonQty !== this.totalPages;
    },
    totalPages() {
      const {totalQty, pageSize} = this.$props;
      return Math.ceil(totalQty / pageSize);
    },
    sideButtonCount() {
      if( this.$data.pageNumber > this.totalPages) {
        this.getFirstPage();
      }
      if (this.$props.visiblePageCount > this.totalPages) {
        return Math.floor((this.totalPages - 1) / 2);
      }
      return Math.floor((this.$props.visiblePageCount - 1) / 2);
    },
    buttonCountOffset() {
      if (this.pageNumber <= this.sideButtonCount) {
        return this.sideButtonCount + 1 - this.pageNumber;
      }
      const stop = this.totalPages - this.sideButtonCount;
      if (this.pageNumber >= stop) {
        return stop - this.pageNumber;
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
          .fill(this.pageNumber)
          .map((pageNumber, i) => pageNumber - i - 1)
          .reverse();
    },
    rightButtons() {
      return new Array(this.rightButtonQty)
          .fill(this.pageNumber)
          .map((pageNumber, i) => i + 1 + pageNumber);
    }
  },
  methods: {
    changePage(page) {
      this.$data.pageNumber = page;
      this.$emit("changePageNumber", this.$data.pageNumber)
    },
    getLastPage() {
      this.$data.pageNumber = this.totalPages;
      this.$emit("changePageNumber", this.$data.pageNumber)
    },
    getFirstPage() {
      this.$data.pageNumber = 1;
      this.$emit("changePageNumber", this.$data.pageNumber);
    },
    nextPage() {
      if (this.$data.pageNumber < this.totalPages) {
        this.$data.pageNumber = this.$data.pageNumber + 1;
        this.$emit("changePageNumber", this.$data.pageNumber);
      }
    },
    prevPage() {
      if (this.$data.pageNumber > 1) {
        this.$data.pageNumber = this.$data.pageNumber - 1;
        this.$emit("changePageNumber", this.$data.pageNumber);
      }
    },
  }
}

</script>
