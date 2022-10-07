<template>
  <div :class="styled.container">
    <h1 :class="styled.header">
      Компании
      <sup :class="styled.quantities">
        ({{ companiesQuantities }})
      </sup>
    </h1>

    <div>
      <SearchInput
        v-if="!loading"
        placeholder="Например, Авангард-подшипник"
        @start-search="onStartSearch"
      />
      <CompanyCards
        :search-company-name="searchText"
      />

      <div
        v-if="!loading"
        :class="styled.btnContainer"
      >
        <ButtonUI
          type-style="secondary"
        >
          Показать ещё <sup> ({{ companiesCount }}) </sup>
        </ButtonUI>
      </div>
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
    ...mapState("companies", ["companies", "loading"]),
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
