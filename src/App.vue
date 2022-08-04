<template>
  <v-app>
    <v-main>
      <div :class="styles.app">
        <HeaderBlock />
        <router-view />
        <FooterBlock />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import styles from "./styles/globalStyle.module.css";
import reset from "../src/styles/reset.css"
import HeaderBlock from "@/components/header/HeaderBlock.vue";
import FooterBlock from "@/components/footer/FooterBlock.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
  },
  data() {
    return {
      styles,
      reset,
    }
  }
}
</script>
