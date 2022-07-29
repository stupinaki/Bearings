<template>
  <v-app>
    <v-main>
      <GroceryCard />
    </v-main>
  </v-app>
</template>

<script>
import GroceryCard from "./components/groceryCard/GroceryCard.vue";

export default {
  name: "App",
  components: {
    GroceryCard,
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
}
</style>
