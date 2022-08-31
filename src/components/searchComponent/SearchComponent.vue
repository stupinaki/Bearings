<template>
  <div :class="styled.header">
    <div :class="styled.title">
      Сервис по поиску подшипников
    </div>
    <div :class="styled.subTitle">
      Мы не продаем подшипники, а помогаем найти лучшие предложения по низкой цене.
    </div>
  </div>
  <form
    :class="styled.wrapper"
  >
    <MainSearchInputs />
    <AdditionalSearchInputs
      @clear-form="clearForm"
    />
  </form>
</template>

<script>
import AdditionalSearchInputs from "../additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputs from "../mainSearchInputs/MainSearchInputs.vue";
import styled from "./searchComponent.module.css";

export default {
  name: "SearchComponent",
  components: {
    MainSearchInputs,
    AdditionalSearchInputs,
  },
  data() {
    return {
      styled,
    }
  },
  methods: {
    clearForm(){
      console.log('clearForm')
    }
  }
}
</script>
