<template>
  <div :class="additionalFormClass">
    <div :class="styled.additionalForm">
      <div
        v-for="input in inputsValue"
        :key="input.id"
      >
        <InputUI
          :label="input.label"
          :placeholder="input.placeholder"
        >
          <template
            v-if="input.hint"
            #hint
          >
            <ButtonUI type="type-link">
              <HelpImg />
            </ButtonUI>
          </template>
        </InputUI>
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
import InputUI from "../../../../components/UI/input/InputUI.vue";
import HelpImg from "../../../../assets/help.svg";
import styled from "./additionalSearchInputs.module.css";

export default {
  name: "AdditionalSearchInputs",
  components: {
    ButtonUI,
    InputUI,
    HelpImg,
  },
  data(){
    return {
      styled,
      inputsValue: [
        {
          id: 333,
          label: "Класс точности",
          placeholder: "6302cg18",
          hint: "test",
        },
        {
          id: 3333,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: "test",
        },
        {
          id: 33333,
          label: "Параметр подшипника",
          placeholder: "6302cg18",
        },
        {
          id: 333333,
          label: "Внешний диаметр",
          placeholder: "25 мм",
        },
        {
          id: 3333333,
          label: "Внутренний диаметр",
          placeholder: "15 мм",
        },
        {
          id: 33333333,
          label: "Ширина",
          placeholder: "30 мм",
        }
      ],
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
