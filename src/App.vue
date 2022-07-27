<template>
  <v-app>
    <v-main>
      <ButtonsExample />
    </v-main>
  </v-app>
</template>

<script>
import ButtonsExample from "./components/ButtonsExample.vue";

export default {
  name: "App",

  components: {
    ButtonsExample,
  },

  data: () => ({
    //
  }),
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
