<template>
  <div :class="styled.cards">
    <div
      v-for="card in companies"
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
  data() {
    return {
      styled,
    };
  },
  beforeMount() {
    this.initCompanies();
  },
  methods: {
    ...mapActions("companies", ["initCompanies"]),
  },
  computed: {
    ...mapState("companies", ["companies", "loading"]),
  }
};
</script>
