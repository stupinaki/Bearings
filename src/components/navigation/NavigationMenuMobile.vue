<template>
  <div :class="styled.btnWrapper">
    <div
      v-if="!isMenuOpen"
      :class="styled.becomePartnerBurgerWrapper"
    >
      <router-link
        :to="{name: routerNames.becomePartner}"
        :class="styled.becomePartnerBtn"
      >
        <ButtonUI
          size="m"
          type-style="secondary"
        >
          Стать партнером
        </ButtonUI>
      </router-link>

      <ButtonUI
        type-style="pseudo"
        :class="styled.btnIcon"
        @click="toggleMenu"
      >
        <MenuImg />
      </ButtonUI>
    </div>

    <ButtonUI
      v-else
      type-style="pseudo"
      :class="styled.btnIcon"
      @click="toggleMenu"
    >
      <CloseImg />
    </ButtonUI>
  </div>

  <SideBarUI
    :is-menu-open="isMenuOpen"
    @close-menu="toggleMenu"
  >
    <nav :class="styled.navigation">
      <div>
        <router-link
          :to="{name: routerNames.home}"
          :class="styled.itemLink"
        >
          <ButtonUI
            size="m"
            type-style="pseudo"
            :class="styled.btn"
            @click="toggleMenu"
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
            @click="toggleMenu"
          >
            Вопросы и ответы
          </ButtonUI>
        </router-link>
        <router-link
          :to="{name: routerNames.articles}"
          :class="styled.itemLink"
        >
          <ButtonUI
            size="m"
            type-style="pseudo"
            :class="styled.btn"
            @click="toggleMenu"
          >
            Статьи
          </ButtonUI>
        </router-link>
        <router-link
          :to="{name: routerNames.companies}"
          :class="styled.itemLink"
        >
          <ButtonUI
            size="m"
            type-style="pseudo"
            :class="styled.btn"
            @click="toggleMenu"
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
            @click="toggleMenu"
          >
            Контакты
          </ButtonUI>
        </router-link>
      </div>

      <div :class="styled.becomePartnerWrapper">
        <router-link
          :to="{name: routerNames.becomePartner}"
          :class="styled.becomePartnerBtn"
        >
          <ButtonUI
            size="m"
            type-style="secondary"
            @click="toggleMenu"
          >
            Стать партнером
          </ButtonUI>
        </router-link>
      </div>
    </nav>
  </SideBarUI>
</template>

<script>
import {routerNames} from "../../router/router.js";
import SideBarUI from "../UI/sidebar/SideBarUI.vue";
import ButtonUI from "../UI/button/ButtonUI.vue";
import CloseImg from "../../assets/close.svg"
import MenuImg from "../../assets/menu.svg";
import styled from "./navigationMenuMobile.module.css";

export default {
  name: "NavigationMenuMobile",
  components: {
    SideBarUI,
    ButtonUI,
    CloseImg,
    MenuImg,
  },
  data() {
    return {
      styled,
      isMenuOpen: false,
      routerNames,
    }
  },
  methods: {
    toggleMenu() {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
    },
  }
}
</script>