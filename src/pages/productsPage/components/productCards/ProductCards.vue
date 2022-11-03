<template>
  <div>
    <div
      v-for="product in productsChunk"
      :key="product.id_bearing"
    >
      <ProductCard
        :name="product.name"
        :price="product.price"
        :pr-class="product.pr_class"
        :type="product.type"
        :bearing-parameters="product.bearing_parameters"
        :manufacturer="product.manufacturer"
        :width="product.width"
        :weight="product.weight"
        :inner-d="product.inner_d"
        :outer-d="product.outer_d"
        :id-organization="product.id_organization"
      />
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
      default: () => [],
    }
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
