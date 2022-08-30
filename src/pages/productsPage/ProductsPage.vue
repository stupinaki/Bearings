<template>
  <div :class="styled.container">
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
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    OfferCards,
    ProductCards,
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
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"])
  }
}
</script>

