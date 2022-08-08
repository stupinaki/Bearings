<template>
  <div :class="styled.container">
    <OfferCards />
    <FiltersComponent />
    <GroceryCards />
  </div>
</template>

<script>
import styled from "./groceryPage.module.css";
import GroceryCards from "../../components/groceryCards/GroceryCards.vue";
import OfferCards from "../../components/offerCards/OfferCards.vue";
import FiltersComponent from "../../components/filters/FiltersComponent.vue";

export default {
  name: "GroceryPage",
  components: {
    GroceryCards,
    OfferCards,
    FiltersComponent,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

