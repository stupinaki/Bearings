<template>
  <div :class="styled.getInTouchCard">
    <div :class="styled.contactUs">
      <div :class="[styled.title, styled.row]">
        Для заказа свяжитесь с компанией
      </div>
      <div>
        <a
          :href="tel"
          :class="styled.phone"
        >
          {{ phone }}
        </a>
        <a
          :href="mailto"
          :class="styled.email"
        >
          {{ email }}
        </a>
      </div>
    </div>

    <div :class="styled.aboutCompany">
      <div>
        <div :class="[styled.name, styled.row]">
          {{ name }}
        </div>
        <div :class="styled.address">
          г. {{ city }}
        </div>
      </div>
      <div :class="styled.btns">
        <router-link
          :to="{name: routerNames.home}"
          :class="styled.row"
        >
          <ButtonUI
            size="s"
            type-style="type-link"
          >
            Оптовый заказ
          </ButtonUI>
        </router-link>
        <router-link
          :to="{name: routerNames.oneCompany, params: { companyId: companyId } }"
          :class="styled.btn"
        >
          <ButtonUI
            size="s"
            type-style="type-link"
          >
            О компании
          </ButtonUI>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {routerNames} from "../../../../router/router.js";
import {getMailto, getPhone} from "../../../../helpers/getOurContacts.js"
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import styled from "./getInTouchCard.module.css";

export default {
  name: "GetInTouchCard",
  components: {
    ButtonUI,
  },
  props: {
    name: {
      type: String,
      require: true,
      default: "название компании не указано",
    },
    city: {
      type: String,
      require: true,
      default: "город не указан",
    },
    phone: {
      type: String,
      require: true,
      default: "телефон отсутвует",
    },
    email: {
      type: String,
      require: true,
      default: "email отсутсвует",
    },
    companyId: {
      type: Number,
      require: true,
      default: null,
    }
  },
  data() {
    return {
      styled,
      routerNames,
    };
  },
  computed: {
    mailto() {
      return getMailto(this.email);
    },
    tel() {
      return getPhone(this.phone);
    }
  },
};
</script>
