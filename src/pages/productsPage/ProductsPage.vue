<template>
  <div :class="styled.container">
    <OfferCards />
    <FiltersComponent />
    <PaginationComponent />
  </div>
</template>

<script>
import OfferCards from "./components/offerCards/OfferCards.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    OfferCards,
    FiltersComponent,
    PaginationComponent,
  },
  data() {
    return {
      styled,
    }
  },
}
</script>

