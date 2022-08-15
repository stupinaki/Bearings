<template>
  <div :class="styled.container">
    <OfferCards />
    <GroceryCard />
  </div>
</template>

<script>
import styled from "./productsPage.module.css";
import GroceryCard from "./components/productCard/ProductCard.vue";
import OfferCards from "./components/offerCards/OfferCards.vue";

export default {
  name: "ProductsPage",
  components: {
    GroceryCard,
    OfferCards,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

