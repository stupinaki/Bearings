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
import HeaderBlock from "@/components/header/HeaderBlock.vue";
import FooterBlock from "@/components/footer/FooterBlock.vue";
import styles from "./styles/app.module.css";
import reset from "../src/styles/reset.css"

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
