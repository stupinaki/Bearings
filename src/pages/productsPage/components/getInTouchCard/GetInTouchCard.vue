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
        <ButtonUI
          :class="styled.row"
          size="s"
          type-style="type-link"
        >
          Оптовый заказ
        </ButtonUI>
        <ButtonUI
          :class="styled.btn"
          size="s"
          type-style="type-link"
        >
          О компании
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import { getMailto,getPhone } from "../../../../helpers/getOurContacts.js"
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
  },
  data() {
    return {
      styled,
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
