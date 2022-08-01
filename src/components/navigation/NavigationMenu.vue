<template>
  <div :class="styled.wrapper">
    <ButtonUI
      :class="styled.item"
    >
      Найти подшипники
    </ButtonUI>
    <ButtonUI
        :class="styled.item"
    >
      Вопросы и ответы
    </ButtonUI>
    <ButtonUI
        :class="styled.item"
    >
      Компании
    </ButtonUI>
    <ButtonUI
        :class="styled.item"
    >
      Контакты
    </ButtonUI>
    <ButtonUI
        :class="styled.item"
    >
      Стать партнером
    </ButtonUI>
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
