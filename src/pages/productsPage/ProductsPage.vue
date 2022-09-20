<template>
  <div :class="styled.container">
    <SearchComponent />
    <LoaderUI v-if="loading" />
    <div v-else>
      <ErrorUI v-show="error" />

      <NothingFoundForm
        v-if="!products.length"
        :request="userRequest"
      />

      <OfferCards />
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
import {breakpoints} from "../../consts/breakpoints";
import {normaliseSearchParams} from "../../helpers/normaliseSearchParams";
import {getStrFromSearchParams} from "../../helpers/getStrFromSearchParams";
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
    visiblePageCount() {
      if(this.viewportWidth <= breakpoints.small) {
        return 3;
      }
      if(this.viewportWidth <= breakpoints.extraSmall) {
        return 5;
      }
      return 7;
    },
     userRequest(){
      const normalise = normaliseSearchParams(this.searchParams);
      return getStrFromSearchParams(normalise);
    },
  },
  async beforeMount() {
    const searchParams = await this.initSearchParams();
    this.initProducts(searchParams);
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    ...mapActions("searchComponent", ["initSearchParams"]),
  },

}
</script>

