<template>
  <div :class="styled.cards">
    <div
      v-for="card in searchCards"
      :key="card.id"
      :class="styled.card"
    >
      <CompanyCard v-bind="card" />
    </div>
  </div>
</template>

<script>
import CompanyCard from "../companyCard/CompanyCard.vue";
import styled from "./companyCards.module.css";
import {mapActions, mapState} from "vuex";

export default {
  name: "CompanyCards",
  components: {
    CompanyCard,
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
    ...mapState("companies", ["companies", "loading"]),
    searchCards() {
      const { searchCompanyName } = this.$props;
      if (!searchCompanyName) {
        return this.companies;
      }
      return this.companies.filter(company =>
          company.title.toLowerCase().includes(searchCompanyName)
      );
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
