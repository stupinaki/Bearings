<template>
  <div :class="styled.wrapper">
    <TypographyText
      size="header1"
      color="darkgray"
      :value="title"
    />
    <TypographyText
      size="title2"
      color="darkgray"
      :value="subTitle"
    />
  </div>
  <div :class="styled.contactsAndForm">
    <ContactUsForm />
    <div>
      <div :class="styled.phone">
        <a
          :href="tel"
          :class="styled.contactsData"
        >
          {{ ourContacts.phone }}
        </a>
        <span :class="styled.contactsSubTitle">
          По телефону
        </span>
      </div>
      <div>
        <a
          :href="mailto"
          :class="styled.contactsData"
        >
          {{ ourContacts.email }}
        </a>
        <span :class="styled.contactsSubTitle">
          По почте
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMailto,getPhone } from "../../helpers/getContacts.js";
import { ourContacts } from "../../../data/ourContacts.js";
import TypographyText from "../typography/TypographyText.vue";
import ContactUsForm from "../contactUsForm/ContactUsForm.vue";
import styled from "./nothingFoundForm.module.css";

export default {
  name: "NothingFoundForm",
  components: {
    TypographyText,
    ContactUsForm,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "По вашему запросу ничего не найдено"
    },
    subTitle: {
      type: String,
      required: false,
      default: "Исправьте запрос или свяжитесь с нами. Мы попробуем вам помочь."
    }

  },
  data() {
    return {
      styled,
      ourContacts,
      nothingFoundName: "",
      nothingFoundPhone: "",
      nothingFoundEmail: "",
      nothingFoundCheckbox: false,
    }
  },
  computed: {
    mailto() {
      return getMailto(ourContacts.email);
    },
    tel() {
      return getPhone(ourContacts.phone);
    }
  },
  methods: {
    onClick(){
      console.log("форма отправлена")
    }
  }
}
</script>
