<template>
  <div :class="styled.container">
    <SearchComponent />
    <BenefitsCards :benefits-value="benefitsValue" />
    <BulkOrderForm />
    <QuestionCards />
  </div>
</template>

<script>
import {benefitsValue} from "../../../data/benefitsValue.js";
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
      benefitsValue,
    }
  }
}
</script>
