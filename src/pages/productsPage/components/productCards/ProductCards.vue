<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import styled from "../../productsPage.module.css";
import ProductCard from "../productCard/ProductCard.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductCards",
  components: {
    ProductCard,
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    ...mapState("products", ["products"]),
  },
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
  },
}
</script>
