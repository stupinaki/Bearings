<template>
  <div
    v-if="width <= 900"
    :class="styled.mobileWrapper"
    >
    <div
      v-if="isMenuOpen"
      :class="styled.menu"
    >
      <router-link
        :to="{name: 'home'}"
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
        :to="{name: 'products'}"
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
        :to="{name: 'companies'}"
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
        :to="{name: 'empty'}"
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
        :to="{name: 'empty'}"
        :class="styled.itemLink"
      >
        <ButtonUI
          size="m"
          type-style="secondary"

        >
          Стать партнером
        </ButtonUI>
      </router-link>
    </div>

    <ButtonUI
      type-style="pseudo"
      :class="styled.menuBtn"
      @click="onMenuClick"
    >
      <MenuImg />
    </ButtonUI>
  </div>

  <div
    v-else
    :class="styled.wrapper"
  >
    <router-link
      :to="{name: 'home'}"
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
      :to="{name: 'empty'}"
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
      :to="{name: 'companies'}"
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
      :to="{name: 'empty'}"
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
      :to="{name: 'empty'}"
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
import ButtonUI from "../UI/button/ButtonUI.vue";
import MenuImg from "../../assets/menu.svg";
import styled from "./navigationMenu.module.css";

export default {
  name: "NavigationMenu",
  components: {
    ButtonUI,
    MenuImg,
  },
  data() {
    return {
      styled,
      isMenuOpen: false,
      width: undefined,
    };
  },
  beforeMount() {
    this.$data.width = window.innerWidth;
  },
  methods: {
    onMenuClick() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
    },
  }
};
</script>
