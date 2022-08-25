<template>
  <div :class="styled.wrapper">
    <router-link
      :to="{name: 'home'}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        name="pseudo"
      >
        Найти подшипники
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: 'products'}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        name="pseudo"
      >
        Вопросы и ответы
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: 'companies'}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        name="pseudo"
      >
        Компании
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: 'empty'}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        name="pseudo"
      >
        Контакты
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: 'empty'}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        name="secondary"
      >
        Стать партнером
      </ButtonUI>
    </router-link>
  </div>
</template>

<script>
import styled from "./navigationMenu.module.css";
import ButtonUI from "../UI/button/ButtonUI.vue";

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
