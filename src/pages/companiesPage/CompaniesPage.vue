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

    <div :class="styled.input">
      <img
        src="../../assets/searchInput.svg"
        alt=""
      >
      <input
        placeholder="Например, Авангард-подшипник"
      >
    </div>

    <CompanyCards />

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
import CompanyCards from "./components/companyCards/CompanyCards.vue";
import styled from "./companiesPage.module.css"
import ButtonUI from "../../components/UI/button/ButtonUI.vue";

export default {
  name: "CompaniesPage",
  components: {
    CompanyCards,
    ButtonUI,
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    companiesQuantities(){
      return this.$store.state.cardsValue.length;
    },
  },
  methods: {
    getRestCompaniesQuantities(){
      const quantities = this.companiesQuantities;
      const rest = quantities - 10;
      return rest < 0 ? 0 : rest;
    },
  }
}
</script>
