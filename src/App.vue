<template>
  <v-app>
    <v-main>
      <HeaderBlock />
      <BenefitsCards />
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
import BenefitsCards from "./components/benefitsCards/BenefitsCards.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    BenefitsCards,
    CompanyCards,
    GroceryCard,
    FooterBlock,
    ChipLabel,
  },
  data() {
    return {
      globalStyled,
      getInTouchCardsValue,
    };
  },
};
</script>
