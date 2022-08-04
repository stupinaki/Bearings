<template>
  <div :class="styled.container">
    <OfferCards />
    <GroceryCard />
  </div>
</template>

<script>
import styled from "./groceryPage.module.css";
import GroceryCard from "../../components/groceryCard/GroceryCard.vue";
import OfferCards from "../../components/offerCards/OfferCards.vue";

export default {
  name: "GroceryPage",
  components: {
    GroceryCard,
    OfferCards,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

