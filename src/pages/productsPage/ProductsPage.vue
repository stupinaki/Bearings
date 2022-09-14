<template>
  <div :class="styled.container">
    <SearchComponent />
    <OfferCards />
    <FiltersComponent />
    <PaginationComponent
      :data="orderedProducts"
      :page-size="2"
      :visible-page-count="7"
    >
      <template #default="props">
        <ProductCards :products-chunk="props.currentPageData" />
      </template>
    </PaginationComponent>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import OfferCards from "./components/offerCards/OfferCards.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    OfferCards,
    ProductCards,
    SearchComponent,
    FiltersComponent,
    PaginationComponent,
  },
  data() {
    return {
      styled,
      isNothingFound: false,
    }
  },
  computed: {
    ...mapGetters("products", ["orderedProducts"]),
    ...mapState("products", ["products"]),
    ...mapState("offers", ["offers"]),
  },
  beforeMount() {
    this.initProducts();
    this.initOffers();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    ...mapActions("offers", ["initOffers"]),

  }
}
</script>

