<template>
  <v-app>
    <v-main>
      <HeaderBlock />
      <GroceryCard />
      <CompanyCards />
      <FooterBlock />
      <ChipLabel value="Самое дешевое предложение" />
      <ChipLabel value="VIP размещение" />
    </v-main>
  </v-app>
</template>

<script>
import HeaderBlock from "./components/header/HeaderBlock.vue";
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import globalStyled from "./styles/globalStyle.module.css";
import FooterBlock from "./components/footer/FooterBlock.vue";
import ChipLabel from "./components/chip/ChipLabel.vue";

export default {
  name: "App",
  data() {
    return {
      globalStyled,
      getInTouchCardsValue,
    };
  },
  components: {
    HeaderBlock,
    CompanyCards,
    GroceryCard,
    FooterBlock,
    ChipLabel,
  },
};
</script>
