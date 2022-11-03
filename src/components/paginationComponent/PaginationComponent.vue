<template>
  <slot :current-page-data="currentPageData" />
  <PaginationUI
    v-if="chunks.length"
    :current-page-number="currentPageNumber"
    :total-qty="data.length"
    :page-size="pageSize"
    :visible-page-count="visiblePageCount"
    :is-direction-text-visible="isDirectionTextVisible"
    @change-page-number="onChangePageNumber"
  />
</template>

<script>
import {screenSize} from "../../consts/breakpoints";
import {mapGetters, mapState} from "vuex";
import chunk from "lodash/chunk";
import PaginationUI from "../UI/pagination/PaginationUI.vue";

export default {
  name: "PaginationComponent",
  components: {
    PaginationUI,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    pageSize: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      currentPageNumber: 1,
    }
  },
  computed: {
    ...mapGetters("viewport", ["breakPoint"]),
    ...mapState("viewport", ["viewportWidth"]),
    chunks() {
      const {data, pageSize} = this.$props;
      return chunk(data, pageSize);
    },
    currentPageData() {
      return this.chunks[this.$data.currentPageNumber - 1]
    },
    isDirectionTextVisible() {
      return this.breakPoint !== screenSize.Tablet && this.breakPoint !== screenSize.Mobile
    },
    visiblePageCount() {

      if(this.breakPoint === screenSize.Mobile) {
        return 1;
      }
      if(this.breakPoint === screenSize.Tablet) {
        return 3;
      }
      if(this.breakPoint === screenSize.Laptop) {
        return 3;
      }
      if(this.breakPoint === screenSize.Desktop) {
        return 7;
      }
      return 9;
    },
  },
  watch: {
    data() {
      this.currentPageNumber = 1;
    }
  },
  methods: {
    onChangePageNumber(pageNumber) {
      this.$data.currentPageNumber = pageNumber;
    }
  },
}
</script>
