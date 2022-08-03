<template>
  <v-app>
    <v-main>
      <CompaniesPage />
    </v-main>
  </v-app>
</template>

<script>
import CompaniesPage from "./pages/CompaniesPage.vue";
import styles from "../src/styles/globalStyle.module.css";

const routes = {
  '/companies': CompaniesPage
}

export default {
  name: "App",
  components: {
    CompaniesPage,
  },
  data() {
    return {
      styles,
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || "NotFound";
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
};
</script>
