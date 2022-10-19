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

    <div>
      <router-link
        :to="{name: routerNames.oneCompany, params: { companyId: companyId } }"
        :class="[styled.name, styled.row]"
      >
        {{ name }}
      </router-link>

      <div :class="styled.address">
        г. {{ city }}
      </div>
    </div>
  </div>
</template>

<script>
import {getMailto, getPhone} from "../../../../helpers/getOurContacts.js"
import {routerNames} from "../../../../router/router.js";
import styled from "./getInTouchCard.module.css";

export default {
  name: "GetInTouchCard",
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
