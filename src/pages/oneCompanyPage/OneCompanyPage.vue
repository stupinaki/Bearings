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
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import CompanyDescriptionCard from "./components/companyDescriptionCard/CompanyDescriptionCard.vue";
import styled from "./oneCompanyPage.module.css";

export default {
  name: "OneCompanyPage",
  components: {
    CompanyDescriptionCard,
    LoaderUI,
  },
  data() {
    return {
      styled,
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
