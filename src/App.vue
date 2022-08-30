<template>
  <v-app>
    <v-main>
      <div
        :class="styles.app"
        @drop.prevent
        @dragenter.prevent
        @dragover.prevent
        @dragleave.prevent
      >
        <HeaderBlock />
        <router-view />
        <FooterBlock />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBlock from "/src/components/header/HeaderBlock.vue";
import FooterBlock from "/src/components/footer/FooterBlock.vue";
import reset from "../src/styles/reset.css"
import styles from "./styles/app.module.css";

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
