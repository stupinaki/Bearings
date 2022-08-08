<template>
  <div
    v-for="card in groceryCardsValue"
    :key="card.id"
  >
    <GroceryCard
      v-bind="card"
    />
  </div>
</template>

<script>
import GroceryCard from "../groceryCard/GroceryCard.vue";
import {groceryCardsValue} from "../../../data/groceryCardValue";

export default {
  name: "GroceryCards",
  components: {
    GroceryCard,
  },
  data() {
    return {
      groceryCardsValue,
    }
  }
}
</script>

