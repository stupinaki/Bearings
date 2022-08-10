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
        v-if="getRestCompaniesQuantities() <= 0"
        type="secondary"
        disabled
      >
        <div :class="styled.btnContentWrapper">
          <div :class="styled.btnText">
            Показать еще
          </div>
          <div :class="styled.btnQuantities">
            ({{ getRestCompaniesQuantities() }})
          </div>
        </div>
      </ButtonUI>

      <ButtonUI
        v-else
        type="secondary"
      >
        <div
          :class="styled.btnContentWrapper"
        >
          <div :class="styled.btnText">
            Показать еще
          </div>
          <div :class="styled.btnQuantities">
            ({{ getRestCompaniesQuantities() }})
          </div>
        </div>
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import CompanyCards from "../../components/companyCards/CompanyCards.vue";
import styled from "./companiesPage.module.css"
import {cardsValue} from "../../../data/cardsValue";
import SearchInput from "../../components/searchInput/SearchInput.vue";

export default {
  name: "CompaniesPage",
  components: {
    CompanyCards,
    SearchInput,
  },
  data() {
    return {
      searchText: '',
      styled,
      cardsValue,
    }
  },
  computed: {
    companiesQuantities(){
      return this.cardsValue.length;
    },
  },
  methods: {
    onStartSearch(string) {
      this.$data.searchText = string;
    },
    getRestCompaniesQuantities(){
      const quantities = this.companiesQuantities;
      const rest = quantities - 10;
      return rest < 0 ? 0 : rest;
    },
    startSearch(value) {
      console.log(value)
    }
  }
}
</script>
