<template>
  <slot :current-page-data="currentPageData" />

  <PaginationUI
    v-if="chunks.length"
    :current-page-number="currentPageNumber"
    :total-qty="data.length"
    :page-size="pageSize"
    :visible-page-count="visiblePageCount"
    @change-page-number="onChangePageNumber"
  />
</template>

<script>
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
  },
  data() {
    return {
      currentPageNumber: 1,
    }
  },
  computed: {
    chunks() {
      const {data, pageSize} = this.$props;
      return chunk(data, pageSize);
    },
    currentPageData() {
      return this.chunks[this.$data.currentPageNumber - 1]
    }
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
