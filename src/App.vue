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
import {mapActions} from "vuex";
import throttle from "lodash/throttle";
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
  },
  computed: {
    getNewResizeThrottle() {
      return throttle(this.getNewResize, 1000);
    }
  },
  watch: {
    "$route.params": {
      handler: function changeParams() {
        this.initSearchParams();
      },
      deep: true,
      immediate: true
    }
  },
  beforeMount() {
    const initialWidth = window.innerWidth;
    const initialHeight = window.innerHeight;
    this.initViewportWidth(initialWidth);
    this.initViewportHeight(initialHeight);
    window.addEventListener('resize',this.getNewResizeThrottle);
  },
  unmounted() {
    window.removeEventListener('resize', this.getNewResizeThrottle);
  },
  methods: {
    ...mapActions("viewport", ["initViewportWidth", "initViewportHeight"]),
    ...mapActions("searchComponent", ["initSearchParams"]),
    getNewResize(e) {
      const width = e.target.innerWidth;
      const height = e.target.innerHeight;
      this.initViewportWidth(width);
      this.initViewportHeight(height);
    },
  },
}
</script>
