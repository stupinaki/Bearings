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
      <div>
        <div :class="styled.dropText">
          Загрузить список документов
        </div>
        <div :class="styled.dropZone"> 
          <div>
            <div :class="styled.instruction">
              <div>Перетащите файлы или</div>
              <ButtonUI type="type-link">
                загрузите
              </ButtonUI>
            </div>
            <div :class="styled.supportedFormats">
              Подерживаемый формат: .doc, .docx, .excel
            </div>
          </div>
        </div>
      </div>
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
import ButtonUI from "../button/ButtonUI.vue";

export default {
  name: "BulkOrderForm",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
