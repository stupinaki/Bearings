<template>
  <div :class="styled.container">
    <div :class="styled.header">
      <div :class="styled.title">
        Сервис по поиску подшипников
      </div>
      <div :class="styled.subTitle">
        Мы не продаем подшипники, а помогаем найти лучшие предложения по низкой цене.
      </div>
    </div>
    <SearchComponent />
    <BenefitsCards />
    <BulkOrderForm />
    <QuestionCards />
  </div>
</template>

<script>
import BenefitsCards from "../../components/benefitsCards/BenefitsCards.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import styled from "./homePage.module.css"
import BulkOrderForm from "../../components/bulkOrderForm/BulkOrderForm.vue";
import QuestionCards from "../../components/questionCards/QuestionCards.vue";
export default {
  name: "HomePage",
  components: {
    BenefitsCards,
    QuestionCards,
    BulkOrderForm,
    SearchComponent,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
