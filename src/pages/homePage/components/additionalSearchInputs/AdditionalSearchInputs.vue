<template>
  <div :class="additionalFormClass">
    <div :class="styled.additionalForm">
      <div>
        <div :class="styled.additionalFormTextWrapper">
          <div :class="[styled.additionalFormText, styled.textPaddingRight]">
            Класс точности
          </div>
          <div :class="[styled.btnWrapper, styled.additionalFormText]">
            <ButtonUI type="type-link">
              <Help />
            </ButtonUI>
          </div>
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>

      <div>
        <div :class="styled.additionalFormTextWrapper">
          <div :class="[styled.additionalFormText, styled.textPaddingRight]">
            Тип подшипника
          </div>
          <div :class="[styled.btnWrapper, styled.additionalFormText]">
            <ButtonUI type="type-link">
              <Help />
            </ButtonUI>
          </div>
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>

      <div>
        <div :class="styled.additionalFormText">
          Параметр подшипника
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>

      <div>
        <div :class="styled.additionalFormText">
          Внешний диаметр
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>

      <div>
        <div :class="styled.additionalFormText">
          Внутренний диаметр
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>

      <div>
        <div :class="styled.additionalFormText">
          Ширина
        </div>
        <input
          type="text"
          :class="styled.additionalFormInput"
        >
      </div>
    </div>
    <div :class="styled.helpReset">
      <div :class="styled.btnWrapper">
        <ButtonUI type="type-link">
          Помощь в измерении
        </ButtonUI>
      </div>
      <div :class="styled.btnWrapper">
        <ButtonUI
          type="type-link"
          :class="styled.resetBtn"
        >
          Сбросить фильтры
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import Help from "../../../../assets/help.svg"
import styled from "./additionalSearchInputs.module.css";

export default {
  name: "AdditionalSearchInputs",
  components: {
    Help,
    ButtonUI,
  },
  data(){
    return {
      styled,
    }
  },
  computed: {
    ...mapState('mainSearchForm', ['isAdditionalFormVisible']),
    additionalFormClass() {
      if(this.isAdditionalFormVisible) {
        return [styled.additionalFormWrapper];
      }
      return [styled.additionalFormWrapperHide];
    },
  }
}
</script>
