<template>
  <div :class="styled.wrapper">
    <router-link to="/home">
      <ButtonUI
          size="m"
          type="pseudo"
      >
        Найти подшипники
      </ButtonUI>
    </router-link>

    <router-link to="/empty">
      <ButtonUI
          size="m"
          type="pseudo"
      >
        Вопросы и ответы
      </ButtonUI>
    </router-link>

    <router-link to="/companies">
      <ButtonUI
          size="m"
          type="pseudo"
      >
        Компании
      </ButtonUI>
    </router-link>

    <router-link to="/empty">
      <ButtonUI
          size="m"
          type="pseudo"
      >
        Контакты
      </ButtonUI>
    </router-link>

    <router-link to="/empty">
      <ButtonUI
          size="m"
          type="secondary"
      >
        Стать партнером
      </ButtonUI>
    </router-link>

  </div>
</template>

<script>
import styled from "./navigationMenu.module.css";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  name: "NavigationMenu",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
