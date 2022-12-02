<template>
  <div :class="styled.wrapper">
    <router-link
      :to="{name: routerNames.home}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
        :class="styled.btn"
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
        :class="styled.btn"
      >
        FAQ
      </ButtonUI>
    </router-link>
    <div :class="styled.article">
      <ButtonUI
        size="m"
        type-style="pseudo"
        :class="styled.btn"
      >
        Статьи
      </ButtonUI>
      <ArticlesMenu :class="styled.options" />
    </div>
    <router-link
      :to="{name: routerNames.companies}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
        :class="styled.btn"
      >
        Компании
      </ButtonUI>
    </router-link>
    <router-link
      :to="{name: routerNames.contacts}"
      :class="styled.itemLink"
    >
      <ButtonUI
        size="m"
        type-style="pseudo"
        :class="styled.btn"
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
import ArticlesMenu from "../../pages/ArticlesPage/components/articlesMenu/ArticlesMenu.vue";
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./navigationMenu.module.css";

export default {
  name: "NavigationMenu",
  components: {
    ArticlesMenu,
    ButtonUI
  },
  data() {
    return {
      styled,
      routerNames,
    };
  },

};
</script>
