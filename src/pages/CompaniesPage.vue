<template>
  <div :class="styled.page">
    <HeaderBlock />

    <div :class="styled.header">
      Компании
    </div>

    <CompanyCards />

    <div :class="styled.btn">
      <ButtonUI type="secondary">
        Показать еще
      </ButtonUI>
    </div>

    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "../components/header/HeaderBlock.vue";
import FooterBlock from "../components/footer/FooterBlock.vue";
import CompanyCards from "../components/companyCards/CompanyCards.vue";
import styled from "./companiesPage.module.css"
import ButtonUI from "../components/button/ButtonUI.vue";

export default {
  name: "CompaniesPage",
  components: {
    HeaderBlock,
    FooterBlock,
    CompanyCards,
    ButtonUI,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
