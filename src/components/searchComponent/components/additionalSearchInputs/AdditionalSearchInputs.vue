<template>
  <div :class="additionalFormClass">
    <div :class="styled.additionalForm">
      <div
        v-for="input in inputsData"
        :key="input.id"
      >
        <InputUI
          :label="input.label"
          :placeholder="input.placeholder"
          :name="input.name"
          @input-value-change="getInputValue"
        >
          <template
            v-if="input.hint"
            #hint
          >
            <ButtonUI
              type-style="type-link"
              @click.prevent
            >
              <HelpImg />
            </ButtonUI>
          </template>
        </InputUI>
      </div>
    </div>
    <div :class="styled.helpReset">
      <div :class="styled.btnWrapper">
        <ButtonUI
          type-style="type-link"
          @click.prevent
        >
          Помощь в измерении
        </ButtonUI>
      </div>
      <div :class="styled.btnWrapper">
        <ButtonUI
          type-style="type-link"
          :class="styled.resetBtn"
          @click.prevent="onClearForm"
        >
          Сбросить фильтры
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import InputUI from "../../../UI/input/InputUI.vue";
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
      inputsData: [
        {
          id: 333,
          label: "Класс точности",
          placeholder: "6302cg18",
          hint: "test",
          name: "accuracyClass",
        },
        {
          id: 3333,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: "test",
          name: "bearingType",
        },
        {
          id: 33333,
          label: "Параметр подшипника",
          placeholder: "6302cg18",
          name: "bearingParameter",
        },
        {
          id: 333333,
          label: "Внешний диаметр",
          placeholder: "25 мм",
          name: "outerDiameter",
        },
        {
          id: 3333333,
          label: "Внутренний диаметр",
          placeholder: "15 мм",
          name: "innerDiameter",
        },
        {
          id: 33333333,
          label: "Ширина",
          placeholder: "30 мм",
          name: "bearingWidth",
        }
      ],
    }
  },
  computed: {
    ...mapState("searchComponent", ["isAdditionalFormVisible", "searchParams"]),
    additionalFormClass() {
      if(this.isAdditionalFormVisible) {
        return [styled.additionalFormWrapper];
      }
      return [styled.additionalFormWrapperHide];
    },
  },
  methods: {
    ...mapActions("searchComponent", ["initSearchParams", "clearForm"]),
    onClearForm() {
      this.clearForm()
      //todo нужно удалять значения из инпутов после
    },
    getInputValue(value) {
      this.initSearchParams(value);
    },
  }
}
</script>
