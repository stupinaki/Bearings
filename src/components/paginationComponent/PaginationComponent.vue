<template>
  <ProductCards :products-chunk="orderedProducts" />
  <PaginationUI
    :total-qty="products.length"
    :page-size="chunk"
    :visible-page-count="7"
    @change-page-number="onChangePageNumber"
  />
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
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
    }
  },
  computed: {
    ...mapGetters("products", ["orderedProducts"]),
    ...mapState("products", ["products"])
  },
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    onChangePageNumber(pageNumber) {
      console.log("page:", pageNumber)
    }
  },
}
</script>
