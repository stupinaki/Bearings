<template>
  <div :class="styled.container">
    <SearchComponent />
    <LoaderUI />
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
import LoaderUI from "../../components/UI/loader/LoaderUI.vue";

export default {
  name: "HomePage",
  components: {
    BenefitsCards,
    QuestionCards,
    BulkOrderForm,
    SearchComponent,
    LoaderUI
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
