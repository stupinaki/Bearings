<template>
  <div :class="styled.container">
    <BenefitsCards />
  </div>
</template>

<script>
import BenefitsCards from "../../components/benefitsCards/BenefitsCards.vue";
import styled from "./homePage.module.css"

export default {
  name: "HomePage",
  components: {
    BenefitsCards,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
