<template>
  <v-app>
    <v-main>
      <HeaderBlock />
    </v-main>
  </v-app>
</template>

<script>
import HeaderBlock from "./components/header/HeaderBlock.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
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
