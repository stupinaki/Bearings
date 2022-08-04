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
    <GroceryCard />
  </div>
</template>

<script>
import styled from "./groceryPage.module.css";
import GroceryCard from "../../components/groceryCard/GroceryCard.vue";

export default {
  name: "GroceryPage",
  components: {
    GroceryCard,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>

