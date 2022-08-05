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

    <CompanyCards />

    <div :class="styled.btnContainer">
      <ButtonUI type="secondary">
        <div :class="styled.btnContentWrapper">
          <div :class="styled.btnText">
            Показать еще
          </div>
          <div :class="styled.btnQuantities">
            ({{getRestCompaniesQuantities()}})
          </div>
        </div>
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import CompanyCards from "../../components/companyCards/CompanyCards.vue";
import styled from "./companiesPage.module.css"
import ButtonUI from "../../components/button/ButtonUI.vue";
import {cardsValue} from "../../../data/cardsValue";

export default {
  name: "CompaniesPage",
  components: {
    CompanyCards,
    ButtonUI,
  },
  data() {
    return {
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
    getRestCompaniesQuantities(){
      const quantities = this.companiesQuantities;
      const rest = quantities - 10;
      return rest < 0 ? 0 : rest;
    }
  }
}
</script>
