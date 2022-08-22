<template>
  <div :class="styled.getInTouchCard">
    <div :class="styled.contactUs">
      <div :class="[styled.title, styled.row]">
        {{ contactUsTitle }}
      </div>
      <div>
        <a
          :href="`tel:${correctPhoneNumber}`"
          :class="styled.phone"
        >
          {{ contactsPhone }}
        </a>
        <a
          :href="`mailto:${contactsEmail}`"
          :class="styled.email"
        >
          {{ contactsEmail }}
        </a>
      </div>
    </div>

    <div :class="styled.aboutCompany">
      <div>
        <div :class="[styled.name, styled.row]">
          {{ aboutCompanyName }}
        </div>
        <div :class="styled.address">
          {{ aboutCompanyAddress }}
        </div>
      </div>
      <div :class="styled.btns">
        <ButtonUI
          :class="styled.row"
          size="s"
          type="type-link"
        >
          Оптовый заказ
        </ButtonUI>
        <ButtonUI
          :class="styled.btn"
          size="s"
          type="type-link"
        >
          О компании
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import styled from "./getInTouchCard.module.css";

export default {
  name: "GetInTouchCard",
  components: {
    ButtonUI,
  },
  props: {
    contactUsTitle: {
      type: String,
      require: true,
      default:undefined,
    },
    aboutCompanyName: {
      type: String,
      require: true,
      default:undefined,
    },
    aboutCompanyAddress: {
      type: String,
      require: true,
      default:undefined,
    },
    contactsPhone: {
      type: String,
      require: true,
      default:undefined,
    },
    contactsEmail: {
      type: String,
      require: true,
      default:undefined,
    },
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    correctPhoneNumber() {
      const mobileNumber = this.$props.contactsPhone;
      if(mobileNumber) {
        return mobileNumber.match(/[0-9]+/g).join("");
      }
      return  "Номер отсутствует";
    },
  },
};
</script>
