<template>
  <v-app>
    <v-main>
      <BenefitsCards/>
      <GroceryCard/>
      <CompanyCards/>
      <FooterBlock/>
      <ChipLabel value="Самое дешевое предложение"/>
      <ChipLabel value="VIP размещение"/>
    </v-main>
  </v-app>
</template>

<script>
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import globalStyled from "./styles/globalStyle.module.css";
import BenefitsCards from "./components/benefitsCards/BenefitsCards.vue";
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
    BenefitsCards,
    CompanyCards,
    GroceryCard,
    FooterBlock,
    ChipLabel,
  },
};
</script>
