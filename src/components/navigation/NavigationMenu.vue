<template>
  <div
    :class="styled.wrapper"
  >
    <router-link
      :to="{name: routerNames.home}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
      >
        Найти подшипники
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: routerNames.FAQ}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
      >
        Вопросы и ответы
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: routerNames.companies}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
      >
        Компании
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: routerNames.empty}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
      >
        Контакты
      </ButtonUI>
    </router-link>

    <router-link
      :to="{name: routerNames.becomePartner}"
      :class="[styled.itemLink, styled.itemLinkSecondaryBtn]"
    >
      <ButtonUI
        size="m"
        type-style="secondary"
      >
        Стать партнером
      </ButtonUI>
    </router-link>
  </div>
</template>

<script>
import {routerNames} from "../../router/router.js";
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./navigationMenu.module.css";

export default {
  name: "NavigationMenu",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
      routerNames,
    };
  },
};
</script>
