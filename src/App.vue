<template>
  <v-app>
    <v-main>
      <div :class="styles.app">
        <HeaderBlock/>
        <router-view></router-view>
        <FooterBlock/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import styles from "../src/styles/globalStyle.module.css";
import HeaderBlock from "@/components/header/HeaderBlock.vue";
import FooterBlock from "@/components/footer/FooterBlock.vue";

export default {
  name: "App",
  data() {
    return {
      styles,
    }
  },
  components: {
    HeaderBlock,
    FooterBlock,
  }
}
</script>
