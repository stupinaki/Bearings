<template>
  <div :class="styled.container">
    <OfferCards />
    <FiltersComponent />
    <GroceryCard />
  </div>
</template>

<script>
import styled from "./groceryPage.module.css";
import GroceryCard from "../../components/groceryCard/GroceryCard.vue";
import OfferCards from "../../components/offerCards/OfferCards.vue";
import FiltersComponent from "../../components/filters/FiltersComponent.vue";

export default {
  name: "GroceryPage",
  components: {
    GroceryCard,
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

