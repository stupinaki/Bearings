<template>
  <div>
    <template>
      <div
        v-for="product in orderedProducts"
        :key="product.id_bearing"
      >
        <ProductCard v-bind="product" />
      </div>
    </template>
    <PaginationUI
      :total-qty="products.length"
      :page-size="chunk"
      :visible-page-count="7"
      @changePageNumber="onChangePageNumber"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import ProductCard from "../productCard/ProductCard.vue";
import PaginationUI from "../../../../components/UI/pagination/PaginationUI.vue";
import styled from "../../productsPage.module.css";

export default {
  name: "ProductCards",
  components: {
    ProductCard,
    PaginationUI,

  },
  data() {
    return {
      styled,
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
