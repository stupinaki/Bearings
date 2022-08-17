<template>
  <div :class="styled.container">
    <OfferCards />
    <FiltersComponent />
    <ProductCards />
  </div>
</template>

<script>
import OfferCards from "./components/offerCards/OfferCards.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    ProductCards,
    OfferCards,
    FiltersComponent,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

