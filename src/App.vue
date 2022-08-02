<template>
  <v-app>
    <v-main>
      <GroceryCard />
      <CompanyCards />
    </v-main>
  </v-app>
</template>

<script>
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import globalStyled from "./styles/globalStyle.module.css";

export default {
  name: "App",
  data() {
    return {
      globalStyled,
      getInTouchCardsValue,
    };
  },
  components: {
    CompanyCards,
    GroceryCard,
  },
};
</script>

