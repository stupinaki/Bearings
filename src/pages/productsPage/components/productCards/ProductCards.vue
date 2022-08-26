<template>
  <div>
    <div
      v-for="product in orderedProducts"
      :key="product.id_bearing"
    >
      <ProductCard
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ProductCard from "../productCard/ProductCard.vue";
import styled from "../../productsPage.module.css";

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
    ...mapGetters("products", ["orderedProducts"]),
  },
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
  },
}
</script>
