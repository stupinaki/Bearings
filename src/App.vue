<template>
  <v-app>
    <v-main>
      <GroceryCard />
      <div v-for="card in getInTouchCardsValue" :key="card.id">
        <GetInTouchCard v-bind="card" />
      </div>
      <CompanyCards />
      <FooterBlock />
    </v-main>
  </v-app>
</template>

<script>
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import GetInTouchCard from "./components/getInTouchCard/GetInTouchCard.vue";
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import FooterBlock from "./components/footer/FooterBlock.vue";

export default {
  name: "App",
  data() {
    return {
      getInTouchCardsValue,
    };
  },
  components: {
    GetInTouchCard,
    CompanyCards,
    GroceryCard,
    FooterBlock,
  },
};
</script>

<style>
:root {
  --primary-color: #4a53f5;
  --primary-hover-color: #3840e6;
  --pseudo-hover-color: #edeeff;
  --secondary-color: #f3f5ff;
  --secondary-hover-color: #d8ddf9;
  --secondary-gray-color: #3a3d4b;
  --white-color: #f4f6f8;
}
</style>
