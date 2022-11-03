<template>
  <div>
    Вы можете позвонить по телефону
    <a :href="tel"> {{ ourContacts.phone }} </a>
    или обратитесь по адресу электронной почты
    <a :href="mailto"> {{ ourContacts.email }} </a>
    и мы с вами свяжемся.
  </div>
</template>

<script>
import {ourContacts} from "../../../../../data/ourContacts";
import {getMailto, getPhone} from "../../../../helpers/getContacts";

export default {
  name: "HowSaleQuestion",
  data() {
    return {
      ourContacts,
    }
  },
  computed: {
    mailto() {
      return getMailto(ourContacts.email);
    },
    tel() {
      return getPhone(ourContacts.phone);
    }
  }
}
</script>
