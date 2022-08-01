<template>
  <v-app>
    <v-main>
      <FooterBlock />
    </v-main>
  </v-app>
</template>

<script>
import FooterBlock from "./components/footer/FooterBlock.vue";

export default {
  name: "App",
  components: {
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
}
</style>
