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
    <router-link :to="{name: 'products'}">
      <ButtonUI
        type-style="secondary"
        :class="styled.btn"
      >
        Перейти к предложениям компании
      </ButtonUI>
    </router-link>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CompanyDescriptionCard from "./components/companyDescriptionCard/CompanyDescriptionCard.vue";
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";
import ButtonUI from "../../components/UI/button/ButtonUI.vue";
import styled from "./oneCompanyPage.module.css";

export default {
  //todo не добавился id выбранного города в роутинг params: { companiesFilter: [targetCompany.id_org] }
  name: "OneCompanyPage",
  components: {
    CompanyDescriptionCard,
    ButtonUI,
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
