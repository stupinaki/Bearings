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
      <input
        type="text"
        placeholder="Имя"
        :class="styled.textInput"
      >
      <input
        type="text"
        placeholder="Телефон"
        :class="styled.textInput"
      >
      <input
        type="text"
        placeholder="E-mail"
        :class="styled.textInput"
      >
      <FileInput is-multiple />
      <div :class="styled.checkboxWrapper">
        <input
          id="checkboxForm"
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
        <ButtonUI>
          Отправить
        </ButtonUI>
      </div>
    </form>
  </div>
</template>

<script>
import styled from "./bulkOrderForm.module.css";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import FileInput from "../../../../components/fileInput/FileInput.vue";

export default {
  name: "BulkOrderForm",
  components: {
    ButtonUI,
    FileInput,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
