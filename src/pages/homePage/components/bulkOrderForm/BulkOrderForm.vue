<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Для заказа оптом заполните форму
    </div>
    <div :class="styled.subTitle">
      Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей.
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
      <FileInput is-multiple />

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
          <router-link :to="{name: 'privacyPolicy'}">
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
  </div>
</template>

<script>
import { validateEmail } from "../../../../helpers/validateEmail.js";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import FileInput from "../fileInput/FileInput.vue";
import styled from "./bulkOrderForm.module.css";
import { validatePhone } from "../../../../helpers/validatePhone.js";

export default {
  name: "BulkOrderForm",
  components: {
    ButtonUI,
    FileInput,
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
    },
    checkPhone() {
      const value = this.$data.oderFormPhone;
      this.$data.isErrorPhone = !validatePhone(value);
    },
    onFocusInputPhone() {
      this.$data.isErrorPhone = false;
    },
    checkName() {
      const value = this.$data.oderFormName;
      this.$data.isErrorName = !value;
    },
    onFocusInputName() {
      this.$data.isErrorName = false;
    },
    checkCheckbox() {
      this.$data.isErrorCheckbox = !this.$data.oderFormCheckbox;
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
