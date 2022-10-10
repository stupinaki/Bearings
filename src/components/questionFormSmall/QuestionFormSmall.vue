<template>
  <div>
    <h2 :class="styled.title">
      {{ title }}
    </h2>
    <div :class="styled.subTitle">
      {{ subTitle }}
    </div>
  </div>

  <form
    :class="styled.form"
    @submit.prevent
  >
    <input
      v-model.trim="oderFormEmail"
      type="text"
      tabindex="1"
      placeholder="E-mail"
      inputmode="email"
      :class="inputEmailStyle"
      @focus="onFocusInputEmail"
      @blur="checkEmail"
    >
    <textarea
      tabindex="2"
      type="text"
      placeholder="Текст вопроса"
      :class="[styled.input, styled.inputQuestion]"
    />
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
          :to="{name: routerNames.privacyPolicy}"
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
import {validateEmail} from "../../helpers/validateEmail.js";
import {routerNames} from "../../router/router.js";
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./questionFormSmall.module.css";

export default {
  name: "QuestionFormSmall",
  components: {
    ButtonUI,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    subTitle: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      styled,
      routerNames,
      isErrorCheckbox: false,
      oderFormCheckbox: false,
      isFormSubmit: false,
      isErrorEmail: false,
      oderFormEmail: "",
    }
  },
  computed: {
    inputCheckboxStyle(){
      if(this.$data.isErrorCheckbox){
        return [styled.checkboxWrapper, styled.error]
      }
      return styled.checkboxWrapper;
    },
    inputEmailStyle() {
      if(this.$data.isErrorEmail) {
        return [styled.input, styled.error];
      }
      return styled.input;
    },
  },
  methods: {
    checkEmail() {
      const value = this.$data.oderFormEmail;
      this.$data.isErrorEmail = !validateEmail(value);
    },
    checkCheckbox() {
      this.$data.isErrorCheckbox = !this.$data.oderFormCheckbox;
      this.$data.isFormSubmit = false;
    },
    onFocusInputEmail() {
      this.$data.isErrorEmail = false;
      this.$data.isFormSubmit = false;
    },
    onClick() {
      this.checkEmail();
      this.checkCheckbox()

      const { oderFormEmail, oderFormCheckbox} = this.$data;
      const {isErrorEmail, isErrorCheckbox} = this.$data;

      const isAllFilled = oderFormEmail && oderFormCheckbox;
      const isCorrectFilled = !isErrorEmail && !isErrorCheckbox;

      if(isAllFilled && isCorrectFilled) {
        this.$data.oderFormEmail = "";
        this.$data.oderFormCheckbox = false;
        this.$data.isFormSubmit = true;
      }
    }
  }
}
</script>
