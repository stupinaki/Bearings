<template>
  <div :class="styled.container">
    <SearchComponent />
    <LoaderUI v-if="loading" />
    <div v-else>
      <ErrorUI v-if="error" />

      <NothingFoundForm
        v-if="!products.length"
      />

      <OfferCards v-if="products.length > 0" />
      <FiltersComponent v-if="products.length > 1" />
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
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {screenSize} from "../../consts/breakpoints";
import ErrorUI from "../../components/UI/error/ErrorUI.vue";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import OfferCards from "./components/offerCards/OfferCards.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import NothingFoundForm from "../../components/nothingFoundForm/NothingFoundForm.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
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
    NothingFoundForm,
    PaginationComponent,
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    ...mapGetters("products", ["orderedProducts"]),
    ...mapState("products", ["products", "loading", "error"]),
    ...mapState("viewport", ["viewportWidth"]),
    ...mapState("searchComponent", ["searchParams"]),
    ...mapGetters("viewport", ["breakPoint"]),
    visiblePageCount() {

      if(this.breakPoint === screenSize.Mobile) {
        return 3;
      }
      if(this.breakPoint === screenSize.Tablet) {
        return 5;
      }
      if(this.breakPoint === screenSize.Laptop) {
        return 6;
      }
      return 7;
    },
  },
  watch: {
    "$route.params": {
      handler: async function changeParams() {
        const searchParams = await this.initSearchParams();
        await this.initProducts(searchParams);
      },
      deep: true,
      immediate: true
    }
  },
  async beforeMount() {
    const searchParams = await this.initSearchParams();
    await this.initProducts(searchParams);
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    ...mapActions("searchComponent", ["initSearchParams"]),
  },

}
</script>

