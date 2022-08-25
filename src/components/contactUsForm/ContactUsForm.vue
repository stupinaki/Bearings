<template>
  <div :class="styled.title">
    {{ title }}
  </div>
  <div :class="styled.subTitle">
    {{ subTitle }}
  </div>

  <form
    :class="styled.form"
    @submit.prevent
  >
    <span v-if="isFormSubmit">
      <b>Ваша заявка успешно отправлена</b>
    </span>
    <input
      v-model.trim.lazy="oderFormName"
      type="text"
      placeholder="Имя"
      :class="inputNameStyle"
      @blur="checkName"
      @focus="onFocusInputName"
    >
    <input
      v-model.trim="oderFormPhone"
      type="text"
      placeholder="Телефон"
      :class="inputPhoneStyle"
      @focus="onFocusInputPhone"
      @blur="checkPhone"
    >
    <input
      v-model.trim="oderFormEmail"
      type="text"
      placeholder="E-mail"
      :class="inputEmailStyle"
      @focus="onFocusInputEmail"
      @blur="checkEmail"
    >

    <slot />

    <div :class="inputCheckboxStyle">
      <input
        id="checkboxForm"
        v-model="oderFormCheckbox"
        type="checkbox"
        :class="styled.checkbox"
        @change="checkCheckbox"
      >
      <label for="checkboxForm">
        Я согласен с
        <router-link
          :to="{name: 'privacyPolicy'}"
          :class="styled.link"
        >
          политикой конфиденциальности
        </router-link>
        и даю согласие на обработку моих персональных данных
      </label>
    </div>
    <div :class="styled.formBtn">
      <ButtonUI
        type="submit"
        @click="onClick"
      >
        Отправить
      </ButtonUI>
    </div>
  </form>
</template>

<script>
import { validateEmail } from "../../helpers/validateEmail.js";
import { validatePhone } from "../../helpers/validatePhone.js";
import ButtonUI from "../UI/button/ButtonUI.vue"
import styled from "./contactUsForm.module.css";

export default {
  name: "ContactUsForm",
  components: {
    ButtonUI,
  },
  props: {
    title: {
      type:String,
      required: false,
      default: "",
    },
    subTitle: {
      type:String,
      required: false,
      default: "",
    }
  },
  data() {
    return {
      styled,
      isErrorName: false,
      isErrorEmail: false,
      isErrorPhone: false,
      isFormSubmit: false,
      isErrorCheckbox: false,
      oderFormCheckbox: false,
      oderFormName: "",
      oderFormPhone: "",
      oderFormEmail: "",
    }
  },
  computed: {
    inputEmailStyle() {
      if(this.$data.isErrorEmail) {
        return [styled.textInput, styled.error];
      }
      return styled.textInput;
    },
    inputPhoneStyle() {
      if(this.$data.isErrorPhone) {
        return [styled.textInput, styled.error];
      }
      return styled.textInput;
    },
    inputNameStyle() {
      if(this.$data.isErrorName) {
        return [styled.textInput, styled.error];
      }
      return styled.textInput;
    },
    inputCheckboxStyle(){
      if(this.$data.isErrorCheckbox){
        return [styled.checkboxWrapper, styled.error]
      }
      return styled.checkboxWrapper;
    },
  },
  methods: {
    checkEmail() {
      const value = this.$data.oderFormEmail;
      this.$data.isErrorEmail = !validateEmail(value);
    },
    onFocusInputEmail() {
      this.$data.isErrorEmail = false;
      this.$data.isFormSubmit = false;
    },
    checkPhone() {
      const value = this.$data.oderFormPhone;
      this.$data.isErrorPhone = !validatePhone(value);
    },
    onFocusInputPhone() {
      this.$data.isErrorPhone = false;
      this.$data.isFormSubmit = false;
    },
    checkName() {
      const value = this.$data.oderFormName;
      this.$data.isErrorName = !value;
    },
    onFocusInputName() {
      this.$data.isErrorName = false;
      this.$data.isFormSubmit = false;
    },
    checkCheckbox() {
      this.$data.isErrorCheckbox = !this.$data.oderFormCheckbox;
      this.$data.isFormSubmit = false;
    },

    onClick() {
      this.checkEmail();
      this.checkPhone();
      this.checkName();
      this.checkCheckbox()

      const {oderFormName, oderFormPhone, oderFormEmail, oderFormCheckbox} = this.$data;
      const {isErrorName, isErrorEmail, isErrorPhone, isErrorCheckbox} = this.$data;

      const order = {
        name: oderFormName,
        phone: oderFormPhone,
        email: oderFormEmail,
        checkbox: oderFormCheckbox,
      }

      const isAllFilled = oderFormName && oderFormPhone && oderFormEmail && oderFormCheckbox;
      const isCorrectFilled = !isErrorName && !isErrorEmail && !isErrorPhone && !isErrorCheckbox;

      if(isAllFilled && isCorrectFilled) {
        console.log("click on button!", order)

        this.$data.oderFormName = "";
        this.$data.oderFormPhone = "";
        this.$data.oderFormEmail = "";
        this.$data.oderFormCheckbox = false;
        this.$data.isFormSubmit = true;
      }
    }
  }
}

</script>
