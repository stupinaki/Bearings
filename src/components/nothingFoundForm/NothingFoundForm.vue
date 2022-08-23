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
    <form
      action=""
      :class="styled.form"
    >
      <input
        v-model="nothingFoundName"
        required
        type="text"
        placeholder="Имя"
        :class="styled.textInput"
      >
      <input
        v-model="nothingFoundPhone"
        required
        type="text"
        placeholder="Телефон"
        :class="styled.textInput"
      >
      <input
        v-model="nothingFoundEmail"
        required
        type="text"
        placeholder="E-mail"
        :class="styled.textInput"
      >
      <div :class="styled.checkboxWrapper">
        <input
          id="nothingFoundCheckbox"
          v-model="nothingFoundCheckbox"
          required
          type="checkbox"
          :class="styled.checkbox"
        >
        <label for="nothingFoundCheckbox">
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
          @click="onClick"
        >
          Отправить
        </ButtonUI>
      </div>
    </form>
    <div :class="styled.contacts">
      <div :class="styled.phone">
        <a
          href="tel:79272772330"
          :class="styled.contactsData"
        >
          +7 927-277-23-30
        </a>
        <span :class="styled.contactsSubTitle">
          По телефону
        </span>
      </div>
      <div>
        <a
          href="mailto:skovalev74@yandex.ru"
          :class="styled.contactsData"
        >
          skovalev74@yandex.ru
        </a>
        <span :class="styled.contactsSubTitle">
          По почте
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./nothingFoundForm.module.css";

export default {
  name: "NothingFoundForm",
  components: {
    ButtonUI,
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
      nothingFoundName: "",
      nothingFoundPhone: "",
      nothingFoundEmail: "",
      nothingFoundCheckbox: false,
    }
  },
  methods: {
    onClick(){
      console.log("форма отправлена")
    }
  }
}
</script>
