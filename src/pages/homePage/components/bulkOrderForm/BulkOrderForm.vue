<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Для заказа оптом заполните форму
    </div>
    <div :class="styled.subTitle">
      Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей.
    </div>

    <form
      action=""
      :class="styled.form"
      @submit.prevent
    >
      <span v-if="isFormSubmit">
        <b>Ваша заявка успешно отправлена</b>
      </span>
      <input
          required
          v-model.trim.lazy="oderFormName"
        type="text"
        placeholder="Имя"
        :class="styled.textInput"
      >
      <input
          required
          v-model.trim="oderFormPhone"
        type="text"
        placeholder="Телефон"
        :class="inputPhoneStyle"
        @change="checkPhone"
        @focus="onFocusInputPhone"
        @blur="checkPhone"
      >
      <input
          required
          v-model.trim="oderFormEmail"
        type="text"
        placeholder="E-mail"
        :class="inputEmailStyle"
        @change="checkEmail"
        @focus="onFocusInputEmail"
        @blur="checkEmail"
      >
      <FileInput is-multiple />
      <div :class="styled.checkboxWrapper">
        <input
          id="checkboxForm"
          v-model="oderFormCheckbox"
          required
          type="checkbox"
          :class="styled.checkbox"
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
      isErrorEmail: false,
      isErrorPhone: false,
      isFormSubmit: false,
      oderFormName: "",
      oderFormPhone: "",
      oderFormEmail: "",
      oderFormCheckbox: false,
    }
  },
  computed: {
    inputEmailStyle() {
      if(this.$data.isErrorEmail) {
        return [styled.textInput, styled.error];
      }
      return [styled.textInput];
    },
    inputPhoneStyle() {
      if(this.$data.isErrorPhone) {
        return [styled.textInput, styled.error];
      }
      return [styled.textInput];
    }
  },
  methods: {
    checkEmail() {
      const value = this.$refs.oderFormEmail.value;
      if(!value) {
        return;
      }
      this.$data.isErrorEmail = !validateEmail(value);
    },
    onFocusInputEmail() {
      this.$data.isErrorEmail = false;
    },
    checkPhone() {
      const value = this.$refs.oderFormPhone.value;
      if(!value) {
        return;
      }
      this.$data.isErrorPhone = !validatePhone(value);
    },
    onFocusInputPhone() {
      this.$data.isErrorPhone = false;
    },
    onClick() {
      const name = this.$data.oderFormName;
      const phone = this.$data.oderFormPhone;
      const email = this.$data.oderFormEmail;
      const checkbox = this.$data.oderFormCheckbox;

      if(name && phone && email && checkbox) {
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
