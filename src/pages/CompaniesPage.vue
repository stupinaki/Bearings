<template>
  <div :class="styled.container">

    <div :class="styled.header">
      Компании
    </div>

    <CompanyCards/>

    <div :class="styled.btn">
      <ButtonUI type="secondary">
        Показать еще
      </ButtonUI>
    </div>

  </div>
</template>

<script>
import CompanyCards from "../components/companyCards/CompanyCards.vue";
import styled from "./companiesPage.module.css"
import ButtonUI from "../components/button/ButtonUI.vue";

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
  }
}
</script>
