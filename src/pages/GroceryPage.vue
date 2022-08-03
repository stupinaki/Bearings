<template>
  <div :class="styled.container">
    <GroceryCard />
  </div>
</template>

<script>
import styled from "./groceryPage.module.css";
import GroceryCard from "../components/groceryCard/GroceryCard.vue";

export default {
  name: "GroceryPage",
  components: {
    GroceryCard,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

