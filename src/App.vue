<template>
  <v-app>
    <v-main>
      <NavigationMenu />
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from "./components/navigation/NavigationMenu.vue";

export default {
  name: "App",
  components: {
    NavigationMenu,
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
