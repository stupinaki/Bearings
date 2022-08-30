<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      По вашему запросу «{{ request }}» ничего не найдено
    </div>
    <div :class="styled.subTitle">
      Исправьте запрос или свяжитесь с нами. Мы попробуем вам помочь.
    </div>
  </div>
  <div :class="styled.contactsAndForm">
    <ContactUsForm />
    <div :class="styled.contacts">
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
import { getMailto,getPhone } from "../../helpers/getOurContacts.js";
import { ourContacts } from "../../../data/ourContacts.js";
import ContactUsForm from "../contactUsForm/ContactUsForm.vue";
import styled from "./nothingFoundForm.module.css";

export default {
  name: "NothingFoundForm",
  components: {
    ContactUsForm,
  },
  props: {
    request: {
      type: String,
      require: true,
      default: "какой-то запрос"
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
