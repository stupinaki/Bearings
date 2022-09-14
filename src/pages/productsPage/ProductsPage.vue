<template>
  <div :class="styled.container">
    <SearchComponent />
    <OfferCards v-show="isVisible" />
    <FiltersComponent v-show="isVisible" />
    <ErrorUI v-show="error" />
    <LoaderUI v-if="loading" />
    <PaginationComponent
      :data="orderedProducts"
      :page-size="2"
      :visible-page-count="visiblePageCount"
    >
      <template #default="props">
        <ProductCards :products-chunk="props.currentPageData" />
      </template>
    </PaginationComponent>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {breakpoints} from "../../consts/breakpoints";
import OfferCards from "./components/offerCards/OfferCards.vue";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import ErrorUI from "../../components/UI/error/ErrorUI.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    ErrorUI,
    LoaderUI,
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
    ...mapState("products", ["products", "loading", "error"]),
    ...mapState("viewport", ["viewportWidth"]),
    visiblePageCount() {
      if(this.viewportWidth <= breakpoints.small) {
        return 3;
      }
      if(this.viewportWidth <= breakpoints.extraSmall) {
        return 5;
      }
      return 7;
    },
    isVisible() {
      return !this.loading && !this.error;
    },
  },
  beforeMount() {
    this.initProducts();
  },
  methods: {
    ...mapActions("products", ["initProducts"])
  }
}
</script>

