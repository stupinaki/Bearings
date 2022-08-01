<template>
  <v-app>
    <v-main>
      <ChipLabel value="Самое дешевое предложение"/>
      <ChipLabel value="VIP размещение"/>
    </v-main>
  </v-app>
</template>

<script>
import ChipLabel from "./components/chip/ChipLabel.vue";

export default {
  name: "App",
  components: {
    ChipLabel,
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
