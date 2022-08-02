<template>
  <div :class="styled.wrapper">
    <ButtonUI size="m" type="pseudo"> Найти подшипники </ButtonUI>
    <ButtonUI size="m" type="pseudo"> Вопросы и ответы </ButtonUI>
    <ButtonUI size="m" type="pseudo"> Компании </ButtonUI>
    <ButtonUI size="m" type="pseudo"> Контакты </ButtonUI>
    <ButtonUI size="m" type="secondary"> Стать партнером </ButtonUI>
  </div>
</template>

<script>
import styled from "./navigationMenu.module.css";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  name: "NavigationMenu",
  data() {
    return {
      styled,
    };
  },
  components: {
    ButtonUI,
  },
};
</script>
