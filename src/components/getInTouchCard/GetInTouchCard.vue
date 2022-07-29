<template>
  <div :class="styled.getInTouchCard">
    <div :class="styled.contactUs">
      <div :class="styled.title">
        {{ contactUsTitle }}
      </div>
      <div>
        <a :href="`tel:${correctPhoneNumber}`" :class="styled.phone">
          {{ contactsPhone }}
        </a>
        <a :href="`mailto:${contactsEmail}`" :class="styled.email">
          {{ contactsEmail }}
        </a>
      </div>
    </div>

    <div :class="styled.aboutCompany">
      <div>
        <div :class="styled.name">
          {{ aboutCompanyName }}
        </div>
        <div :class="styled.address">
          {{ aboutCompanyAddress }}
        </div>
      </div>
      <div :class="styled.btns">
        <ButtonUI :class="styled.order" size="s" type="typeLink">
          Оптовый заказ
        </ButtonUI>
        <ButtonUI :class="styled.btn" size="s" type="typeLink">
          О компании
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "../button/ButtonUI.vue";
import styled from "./getInTouchCard.module.css";

export default {
  name: "GetInTouchCard",
  data() {
    return {
      styled,
    };
  },
  components: {
    ButtonUI,
  },
  props: {
    contactUsTitle: {
      type: String,
      require: true,
    },
    aboutCompanyName: {
      type: String,
      require: true,
    },
    aboutCompanyAddress: {
      type: String,
      require: true,
    },
    contactsPhone: {
      type: String,
      require: true,
    },
    contactsEmail: {
      type: String,
      require: true,
    },
  },
  computed: {
    correctPhoneNumber() {
      return this.$props.contactsPhone.match(/[0-9]+/g).join("");
    },
  },
};
</script>

<style scoped>
/*.get-in-touch-card{*/
/*  padding: 20px;*/
/*  background: #F4F6F8;*/
/*  border-radius: 8px;*/
/*  max-width: 484px;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  flex-direction: column;*/
/*}*/
/*.contact-us{*/
/*  margin-bottom: 32px;*/
/*}*/
/*.contact-us__title,*/
/*.about-company__name,*/
/*.about-company__opt-order {*/
/*  padding-bottom: 12px;*/
/*}*/
/*.contact-us__title,*/
/*.about-company__address{*/
/*  font-family: 'Inter';*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  font-size: 14px;*/
/*  line-height: 17px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  color: #898989;*/
/*}*/
/*.contacts__phone,*/
/*.contacts__email{*/
/*  font-family: 'Inter';*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  font-size: 18px;*/
/*  line-height: 22px;*/
/*  color: #3A3D4B;*/
/*  text-decoration: none;*/
/*  display: inline-block;*/
/*}*/
/*.contacts__phone{*/
/*  padding-right: 32px;*/
/*}*/
/*.about-company{*/
/*  display: grid;*/
/*  grid-template-columns: 70% 30%;*/
/*}*/
/*.about-company__name{*/
/*  font-family: 'Inter';*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  font-size: 14px;*/
/*  line-height: 17px;*/
/*  color: #3A3D4B;*/
/*}*/
/*.about-company__btn{*/
/*  color: #B7B7B7;*/
/*}*/
/*.about-company__btns{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: end;*/
/*}*/
</style>
