<template>
  <v-app>
    <v-main>
      <GroceryCard />
      <CompanyCards />
      <FooterBlock />
    </v-main>
  </v-app>
</template>

<script>
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import globalStyled from "./styles/globalStyle.module.css";
import FooterBlock from "./components/footer/FooterBlock.vue";

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
    FooterBlock,
  },
};
</script>

