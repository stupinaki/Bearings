<template>
  <div :class="styled.container">
    <div :class="styled.headerWrapper">
      <div :class="styled.header">
        Компании
      </div>
      <div :class="styled.quantities">
        ({{ companiesQuantities }})
      </div>
    </div>
    <SearchInput
      placeholder="Например, Авангард-подшипник"
      @start-search="onStartSearch"
    />
    <CompanyCards
      :search-company-name="searchText"
    />

    <div :class="styled.btnContainer">
      <ButtonUI
        type="secondary"
      >
        <div :class="styled.btnContentWrapper">
          <div :class="styled.btnText">
            Показать еще
          </div>
          <div :class="styled.btnQuantities">
            ({{ companiesCount }})
          </div>
        </div>
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import SearchInput from "../../components/UI/searchInput/SearchInput.vue";
import ButtonUI from "../../components/UI/button/ButtonUI.vue";
import styled from "./companiesPage.module.css"

export default {
  name: "CompaniesPage",
  components: {
    CompanyCards,
    SearchInput,
    ButtonUI,
  },
  data() {
    return {
      searchText: '',
      styled,
    }
  },
  computed: {
    ...mapState("companies", ["companies"]),
    companiesQuantities() {
      return this.companies.length;
    },
    companiesCount() {
      const rest = this.companiesQuantities - 10;
      return rest < 0 ? 0 : rest;
    },
  },
  beforeMount() {
    this.initCompanies();
  },
  methods: {
    ...mapActions("companies", ["initCompanies"]),
    onStartSearch(string) {
      this.$data.searchText = string;
    },
  }
}
</script>
