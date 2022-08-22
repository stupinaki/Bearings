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
        ref="oderFormName"
        required
        type="text"
        placeholder="Имя"
        :class="styled.textInput"
      >
      <input
        ref="oderFormPhone"
        required
        type="text"
        placeholder="Телефон"
        :class="inputPhoneStyle"
        @change="checkPhone"
        @focus="onFocusInputPhone"
        @blur="checkPhone"
      >
      <input
        ref="oderFormEmail"
        required
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
          ref="oderFormCheckbox"
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
        <ButtonUI @click="onClick">
          Отправить
        </ButtonUI>
      </div>
    </form>
  </div>
</template>

<script>
import {isCorrectEmail} from "../../../../helpers/isCorrectEmail";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import FileInput from "../fileInput/FileInput.vue";
import styled from "./bulkOrderForm.module.css";
import {isCorrectPhone} from "../../../../helpers/isCorrectPhone";

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
      this.$data.isErrorEmail = !isCorrectEmail(value);
    },
    onFocusInputEmail() {
      this.$data.isErrorEmail = false;
    },
    checkPhone() {
      const value = this.$refs.oderFormPhone.value;
      if(!value) {
        return;
      }
      this.$data.isErrorPhone = !isCorrectPhone(value);
    },
    onFocusInputPhone() {
      this.$data.isErrorPhone = false;
    },
    onClick() {
      let name = this.$refs.oderFormName.value;
      let phone = this.$refs.oderFormPhone.value;
      let email = this.$refs.oderFormEmail.value;
      let checkbox = this.$refs.oderFormCheckbox.checked;

      if(name && phone && email && checkbox) {
        this.$refs.oderFormName.value = "";
        this.$refs.oderFormPhone.value = "";
        this.$refs.oderFormEmail.value = "";
        this.$refs.oderFormCheckbox.checked = false;
        this.$data.isFormSubmit = true;
      }
    }
  }
}
</script>
