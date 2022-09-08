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

  <div
    :class="opacityBlockStyle"
    tabindex="0"
    @focus="onOpacityFocus"
  />
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

  viewportHeight: {{ viewportHeight }}
  viewportWidth: {{ viewportWidth }}
</template>

<script>
import ButtonUI from "../UI/button/ButtonUI.vue";
import MenuImg from "../../assets/menu.svg";
import styled from "./navigationMenuMobile.module.css";
import {mapState} from "vuex";

export default {
  name: "NavigationMenuMobile",
  components: {
    ButtonUI,
    MenuImg,
  },
  data() {
    return {
      styled,
      isMenuOpen: undefined,
    }
  },
  computed: {
    ...mapState("viewport", ["viewportHeight", "viewportWidth"]),
    menuStyle() {
      if (this.$data.isMenuOpen === undefined) {
        return styled.menuMobileHide;
      }
      return this.$data.isMenuOpen ? styled.menuMobileOpen : styled.menuMobileClose;
    },
    opacityBlockStyle() {
      return this.$data.isMenuOpen ? styled.opacityBlock : styled.opacityBlockHide;
    },
    menuHeight() {
      return "height: " + this.viewportHeight + "px;"
    }
  },
  methods: {
    showMenu() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
    },
    onOpacityFocus() {
      this.$data.isMenuOpen = false;
    }
  }
}
</script>