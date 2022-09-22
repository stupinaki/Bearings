<template>
  <div :class="styled.btnWrapper">
    <ButtonUI
      type-style="pseudo"
      :class="btnStyle"
      @click="showMenu"
    >
      <MenuImg />
    </ButtonUI>
  </div>
  <div :class="menuWrapperStyle">
    <div :class="styled.menuContainer">
      <aside :class="menuStyle">
        <nav>
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
              type-style="pseudo"
            >
              Стать партнером
            </ButtonUI>
          </router-link>
        </nav>
      </aside>
      <div
        :class="opacityBlockStyle"
        tabindex="0"
        @focus="onOpacityBlockFocus"
      />
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
      return this.$data.isMenuOpen
          ? [styled.menuMobile, styled.menuMobileOpen]
          : [styled.menuMobile, styled.menuMobileClose];
    },
    opacityBlockStyle() {
      return this.$data.isMenuOpen ? styled.opacityBlock : styled.opacityBlockHide;
    },
    btnStyle() {
      return this.$data.isMenuOpen
          ? [styled.btn, styled.btnMenuOpen]
          : [styled.btn, styled.btnMenuClose];
    },
    menuWrapperStyle() {
      return this.$data.isMenuOpen ? styled.menuWrapperOpen : styled.menuWrapperHide;
    }
  },
  methods: {
    showMenu() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
    },
    onOpacityBlockFocus() {
      this.$data.isMenuOpen = false;
    }
  }
}
</script>