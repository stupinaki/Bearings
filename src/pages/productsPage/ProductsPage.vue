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
import {mapGetters, mapState} from "vuex";

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
  computed: {
    ...mapGetters("products", ["orderedProducts"]),
    ...mapState("products", ["products"])
  },
}
</script>

