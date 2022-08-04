<template>
  <div :class="styled.container">
    <BenefitsCards />
    <SearchComponent />
  </div>
</template>

<script>
import BenefitsCards from "../../components/benefitsCards/BenefitsCards.vue";
import SearchComponent from "../../components/searchComponent/SearchComponent.vue";
import styled from "./homePage.module.css"

export default {
  name: "HomePage",
  components: {
    BenefitsCards,
    SearchComponent,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
