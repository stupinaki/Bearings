<template>
  <div>
    <div
      v-for="product in productsChunk"
      :key="product.id_bearing"
    >
      <ProductCard v-bind="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../productCard/ProductCard.vue";
import styled from "../../productsPage.module.css";

export default {
  name: "ProductCards",
  components: {
    ProductCard,
  },
  props: {
    productsChunk: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
