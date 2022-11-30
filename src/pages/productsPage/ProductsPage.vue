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
      >
        <template #default="props">
          <ProductCards :products-chunk="props.currentPageData" />
        </template>
      </PaginationComponent>

      <AdvertisementComponent />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import ErrorUI from "../../components/UI/error/ErrorUI.vue";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import OfferCards from "./components/offerCards/OfferCards.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import NothingFoundForm from "../../components/nothingFoundForm/NothingFoundForm.vue";
import PaginationComponent from "../../components/paginationComponent/PaginationComponent.vue";
import AdvertisementComponent from "../../components/advertisement/AdvertisementComponent.vue";
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
    AdvertisementComponent,
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
  },
  watch: {
    "$route.params": {
      handler: async function changeParams() {
        const searchParams = await this.initSearchParams();
        await this.initProducts(searchParams);
      },
      deep: true,
      immediate: true
    },
    ...mapState("products", ["products"]),
    ...mapState("offers", ["offers"]),
  },
  async beforeMount() {
    const searchParams = await this.initSearchParams();
    await this.initProducts(searchParams);
    this.initOffers();
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    ...mapActions("searchComponent", ["initSearchParams"]),
    ...mapActions("offers", ["initOffers"]),
  },
}
</script>

