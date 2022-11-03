<template>
  <div :class="styled.description">
    <h3 :class="styled.title">
      О компании:
    </h3>
    <span :class="styled.subTitle">
      {{ description || "Данные отсутвуют" }}
    </span>
    <h3 :class="styled.title">
      Город:
    </h3>
    <span :class="styled.subTitle">
      {{ city }}
    </span>
    <h3 :class="styled.title">
      Адрес:
    </h3>
    <span :class="styled.subTitle">
      {{ address }}
    </span>
    <h3 :class="styled.title">
      Email:
    </h3>
    <a
      :href="mailto"
      :class="styled.subTitle"
    >
      {{ email }}
    </a>
    <h3 :class="styled.title">
      Телефон:
    </h3>
    <div
      v-for="phoneNumber in allNumbers"
      :key="phoneNumber.tel"
    >
      <a
        :href="phone.tel"
        :class="styled.subTitle"
      >
        {{ phoneNumber.number }}
      </a>
    </div>

    <h3 :class="styled.title">
      Дата обновления ассортимента:
    </h3>
    <span :class="styled.subTitle">
      {{ creationDate }}
    </span>
  </div>
</template>

<script>
import { allNumbers, getMailto } from "../../../../helpers/getContacts";
import styled from "./companyDescriptionCard.module.css";

export default {
  name: "CompanyDescriptionCard",
  props: {
    description: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    },
    city: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    },
    address: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    },
    email: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    },
    phone: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    },
    creationDate: {
      type: String,
      required: false,
      default: "Данные отсутвуют"
    }
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    mailto() {
      return getMailto(this.$props.email);
    },
    allNumbers () {
      return allNumbers(this.$props.phone);
    }
  },
}
</script>