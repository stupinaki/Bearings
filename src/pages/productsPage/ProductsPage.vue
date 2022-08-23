<template>
  <div :class="styled.container">
    <OfferCards />
    <FiltersComponent />
    <ProductCards />
    <PaginationUI
        :quantity-card="200"
        :chunk="7"
    />
    <NothingFoundForm />
  </div>
</template>

<script>
import OfferCards from "./components/offerCards/OfferCards.vue";
import ProductCards from "./components/productCards/ProductCards.vue";
import FiltersComponent from "./components/filters/FiltersComponent.vue";
import NothingFoundForm from "../../components/nothingFoundForm/NothingFoundForm.vue";
import PaginationUI from "../../components/UI/pagination/PaginationUI.vue";
import styled from "./productsPage.module.css";

export default {
  name: "ProductsPage",
  components: {
    ProductCards,
    OfferCards,
    FiltersComponent,
    NothingFoundForm,
    PaginationUI,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

