<template>
  <v-app>
    <v-main>
      <GroceryCard />
    </v-main>
  </v-app>
</template>

<script>
import GroceryCard from "./components/groceryCard/GroceryCard.vue";
import globalStyled from "./styles/globalStyle.module.css";

export default {
  name: "App",
  data() {
    return {
      globalStyled,
    };
  },
  components: {
    GroceryCard,
  },
};
</script>
