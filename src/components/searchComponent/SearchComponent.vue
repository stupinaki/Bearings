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
    <MainSearchInputs @search="initSearch" />
    <AdditionalSearchInputs />
  </form>
</template>

<script>
import AdditionalSearchInputs from "./components/additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputs from "./components/mainSearchInputs/MainSearchInputs.vue";
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
    initSearch() {
      console.log("поиск начался!")
    },
  }
}
</script>
