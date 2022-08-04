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
