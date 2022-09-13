<template>
  <div :class="styled.container">
    <SearchComponent />
    <BenefitsCards />
    <BulkOrderForm />
    <QuestionCards />
  </div>
</template>

<script>
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import BenefitsCards from "./components/benefitsCards/BenefitsCards.vue";
import BulkOrderForm from "./components/bulkOrderForm/BulkOrderForm.vue";
import QuestionCards from "./components/questionCards/QuestionCards.vue";
import styled from "./homePage.module.css"

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
