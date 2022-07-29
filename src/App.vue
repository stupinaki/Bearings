<template>
  <v-app>
    <v-main>
      <div v-for="card in getInTouchCardsValue" :key="card.id">
        <GetInTouchCard v-bind="card" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import GetInTouchCard from "./components/getInTouchCard/GetInTouchCard.vue";
import { getInTouchCardsValue } from "../data/getInTouchCardsValue";

export default {
  name: "App",
  data() {
    return {
      getInTouchCardsValue,
    };
  },
  components: {
    GetInTouchCard,
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
