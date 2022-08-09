<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Для заказа оптом заполните форму
    </div>
    <div :class="styled.subTitle">
      Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей.
    </div>
    <form action="" :class="styled.form">
      <input type="text" placeholder="Имя" :class="styled.textInput">
      <input type="text" placeholder="Телефон" :class="styled.textInput">
      <input type="text" placeholder="E-mail" :class="styled.textInput">
      <DragAndDrop />
      <div :class="styled.checkboxWrapper">
        <input
            type="checkbox"
            id="checkboxForm"
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
import DragAndDrop from "../dragAndDrop/DragAndDrop.vue";

export default {
  name: "BulkOrderForm",
  data() {
    return {
      styled,
    }
  },
  components: {
    ButtonUI,
    DragAndDrop,
  }
}
</script>
