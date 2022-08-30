<template>
  <ProductCards :products-chunk="productsChunk" />
  <PaginationUI
    :total-qty="orderedProducts.length"
    :page-size="chunk"
    :visible-page-count="7"
    @change-page-number="onChangePageNumber"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PaginationUI from "../UI/pagination/PaginationUI.vue";
import ProductCards from "../../pages/productsPage/components/productCards/ProductCards.vue";

export default {
  name: "PaginationComponent",
  components: {
    PaginationUI,
    ProductCards,
  },
  data() {
    return {
      chunk: 2,
      currentPageNumber: 1,
    }
  },
  computed: {
    ...mapGetters("products", ["orderedProducts"]),
    chunks() {
      const arr = this.orderedProducts.slice();
      const res = [];

      for(let i = 0; i < arr.length; i+= this.$data.chunk) {
        const piece = arr.slice(i, i + this.$data.chunk);
        res.push(piece);
      }
      return res;
    },
    productsChunk() {
      return this.chunks[this.$data.currentPageNumber - 1];
    }
  },
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    onChangePageNumber(pageNumber) {
      this.$data.currentPageNumber = pageNumber;
    }
  },
}
</script>
