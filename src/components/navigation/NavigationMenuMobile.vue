<template>
  <div :class="styled.btnWrapper">
    <ButtonUI
      type-style="pseudo"
      :class="styled.btn"
      @click="showMenu"
    >
      <MenuImg />
    </ButtonUI>
  </div>

  <div :class="menuStyle">
    <div>
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
  </div>
</template>

<script>
import ButtonUI from "../UI/button/ButtonUI.vue";
import MenuImg from "../../assets/menu.svg";
import styled from "./navigationMenuMobile.module.css";

export default {
  name: "NavigationMenuMobile",
  components: {
    ButtonUI,
    MenuImg,
  },
  data() {
    return {
      styled,
      isMenuOpen: false,
    }
  },
  computed: {
    menuStyle() {
      return this.$data.isMenuOpen ? styled.menuMobile : styled.menuMobileHide;
    }
  },
  methods: {
    showMenu() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
      console.log("покажи меню")
    }
  }
}
</script>