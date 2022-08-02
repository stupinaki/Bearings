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
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import FooterBlock from "./components/footer/FooterBlock.vue";
import ChipLabel from "./components/chip/ChipLabel.vue";
import BenefitsCards from "./components/benefitsCards/BenefitsCards.vue";
import globalStyled from "./styles/globalStyle.module.css";
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";

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
    BenefitsCards,
  },
};
</script>
