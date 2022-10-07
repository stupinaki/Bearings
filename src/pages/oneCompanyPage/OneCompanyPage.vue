<template>
  <LoaderUI v-if="loading" />
  <div
    v-else
    :class="styled.container"
  >
    <h2 :class="styled.companyName">
      {{ targetCompany.name }}
    </h2>
    <CompanyDescriptionCard
      :description="targetCompany.description"
      :city="targetCompany.city"
      :address="targetCompany.address"
      :email="targetCompany.email"
      :phone="targetCompany.phone"
      :creation-date="targetCompany.creation_date"
    />
    <ButtonUI
      type-style="secondary"
      :class="styled.btn"
    >
      <router-link
        :to="{name: routerNames.products, query: {companiesFilter: [targetCompany.id_org]}}"
        :class="styled.btnText"
      >
        Перейти к предложениям компании
      </router-link>
    </ButtonUI>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {routerNames} from "../../router/router.js";
import CompanyDescriptionCard from "./components/companyDescriptionCard/CompanyDescriptionCard.vue";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import ButtonUI from "../../components/UI/button/ButtonUI.vue";
import styled from "./oneCompanyPage.module.css";

export default {
  name: "OneCompanyPage",
  components: {
    CompanyDescriptionCard,
    ButtonUI,
    LoaderUI,
  },
  data() {
    return {
      styled,
      routerNames,
    }
  },
  computed: {
    ...mapState("companies", ["loading", "companies"]),
    targetCompany() {
      return this.companies.filter(c => c.id_org === +this.$route.params.companyId)[0];
    }
  },
  async beforeMount() {
    await this.initCompanies()
  },
  methods: {
    ...mapActions("products", ["initProducts"]),
    ...mapActions("companies", ["initCompanies"]),
  }
}
</script>
