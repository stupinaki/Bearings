<template>
  <div :class="styled.footer">
    <div :class="styled.wrapper">
      <div :class="styled.container">
        <div :class="styled.column">
          <router-link
            :to="{name: routerNames.home}"
            :class="styled.columnLogo"
          >
            PIC
          </router-link>
        </div>
        <div :class="styled.column">
          <div :class="styled.columnItem">
            <b>Покупателям</b>
          </div>

          <router-link
            :to="{name: routerNames.home}"
            :class="styled.columnItem"
          >
            Найти подшибники
          </router-link>
          <router-link
            :to="{name: routerNames.home}"
            :class="styled.columnItem"
          >
            Оптовый заказ
          </router-link>
          <router-link
            :to="{name: routerNames.empty}"
            :class="styled.columnItem"
          >
            Вопросы и ответы
          </router-link>
        </div>
        <div :class="styled.column">
          <div :class="styled.columnItem">
            <b>Продавцам</b>
          </div>
          <router-link
            :to="{name: routerNames.empty}"
            :class="styled.columnItem"
          >
            Стать партнером
          </router-link>

          <router-link
            :to="{name: routerNames.FAQ}"
            :class="styled.columnItem"
          >
            Вопросы и ответы
          </router-link>
        </div>
        <div :class="styled.column">
          <router-link
            :to="{name: routerNames.empty}"
            :class="styled.columnItem"
          >
            <b>Контакты</b>
          </router-link>

          <a
            :href="tel"
            :class="styled.columnItem"
          >
            {{ ourContacts.phone }}
          </a>

          <a
            :href="mailto"
            :class="styled.columnItem"
          >
            {{ ourContacts.email }}
          </a>


          <div :class="styled.columnItems">
            <a
              v-for="img in footerImgValue"
              :key="img.id"
              href="#"
              :class="styled.columnItem"
            >
              <component :is="imageMap[img.imgName]" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <router-link
          :to="{name: routerNames.privacyPolicy}"
          :class="styled.bottomItem"
        >
          Политика конфиденциальности
        </router-link>
        <router-link
          :to="{name: routerNames.contractOffer }"
          :class="styled.bottomItem"
        >
          Договор оферты
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {routerNames} from "../../router/router.js";
import {footerImgValue} from "../../../data/footerImgValue";
import { ourContacts } from "../../../data/ourContacts.js";
import { getMailto,getPhone } from "../../helpers/getOurContacts.js";
import imageMap from "./footerImages";
import styled from "./footerBlock.module.css";

export default {
  name: "FooterBlock",
  data() {
    return {
      styled,
      imageMap,
      ourContacts,
      footerImgValue,
      routerNames,
    };
  },
  computed: {
    mailto() {
      return getMailto(ourContacts.email);
    },
    tel() {
      return getPhone(ourContacts.phone);
    }
  },
};
</script>
