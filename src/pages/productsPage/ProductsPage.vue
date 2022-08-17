<template>
  <div :class="styled.container">
    <OfferCards />
    <ProductCards />
  </div>
</template>

<script>
import styled from "./productsPage.module.css";
import OfferCards from "./components/offerCards/OfferCards.vue";
import ProductCards from "./components/productCards/ProductCards.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductCards,
    OfferCards,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

