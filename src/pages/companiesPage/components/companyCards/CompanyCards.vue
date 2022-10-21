<template>
  <ErrorUI v-if="error" />
  <LoaderUI v-if="loading" />

  <NothingFound v-if="isNothingFound" />

  <div
    v-else
    :class="styled.cards"
  >
    <div
      v-for="card in searchCards"
      :key="card.id"
      :class="styled.card"
    >
      <CompanyCard
        v-bind="card"
        :company-id="card.id_org"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import NothingFound from "../../../../components/nothingFound/NothingFound.vue";
import CompanyCard from "../companyCard/CompanyCard.vue";
import LoaderUI from "../../../../components/UI/loader/LoaderUI.vue";
import ErrorUI from "../../../../components/UI/error/ErrorUI.vue";
import styled from "./companyCards.module.css";

export default {
  name: "CompanyCards",
  components: {
    NothingFound,
    CompanyCard,
    LoaderUI,
    ErrorUI,
  },
  props: {
    searchCompanyName: {
      type: String,
      require: false,
      default: undefined,
    }
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    ...mapState("companies", ["companies", "loading", "error"]),
    searchCards() {
      const { searchCompanyName } = this.$props;
      if (!searchCompanyName) {
        return this.companies;
      }
      return this.companies.filter(company =>
          company.name.toLowerCase().includes(searchCompanyName)
      );
    },
    isNothingFound(){
      return this.searchCards.length <= 0 && !this.loading;
    }
  },
  beforeMount() {
    this.initCompanies();
  },
  methods: {
    ...mapActions("companies", ["initCompanies"]),
  }
};
</script>
