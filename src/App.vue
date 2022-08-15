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
        <GlobalStyleExample />
        <router-view />
        <FooterBlock />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import styles from "./styles/app.module.css";
import reset from "../src/styles/reset.css"
import HeaderBlock from "@/components/header/HeaderBlock.vue";
import FooterBlock from "@/components/footer/FooterBlock.vue";
import GlobalStyleExample from "./components/globalStyleExample/GlobalStyleExample.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
    GlobalStyleExample,
  },
  data() {
    return {
      styles,
      reset,
    }
  }
}
</script>
