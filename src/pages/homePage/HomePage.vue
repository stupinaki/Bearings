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
    <BenefitsCards />
    <BulkOrderForm />
    <QuestionCards />
  </div>
</template>

<script>
import BenefitsCards from "./components/benefitsCards/BenefitsCards.vue";
import styled from "./homePage.module.css";
import QuestionCards from "./components/questionCards/QuestionCards.vue";
import BulkOrderForm from "./components/bulkOrderForm/BulkOrderForm.vue";

export default {
  name: "HomePage",
  components: {
    BenefitsCards,
    QuestionCards,
    BulkOrderForm,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
