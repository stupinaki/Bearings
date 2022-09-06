<template>
  <div :class="styled.additionalFormWrapper">
    <div :class="styled.additionalForm">
      <div
        v-for="(input, i) in inputsData"
        :key="i"
      >
        <InputUI
          :value="input.value"
          :label="input.label"
          :placeholder="input.placeholder"
          :name="input.name"
          @input="$emit('onInputChange', { name: input.name, value: $event })"
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
          @click.prevent="$emit('clearForm')"
        >
          Сбросить фильтры
        </ButtonUI>
      </div>
    </div>
  </div>
</template>

<script>
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
  props: {
    formValues: {
      type: Object,
      required: true
    }
  },
  emits: ["clearForm", "onInputChange"],
  data(){
    return {
      styled,
    }
  },
  computed: {
    inputsData() {
      const { formValues } = this.$props;
      return [
        {
          value: formValues.accuracyClass,
          label: "Класс точности",
          placeholder: "6302cg18",
          hint: "test",
          name: "accuracyClass",
        },
        {
          value: formValues.bearingType,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: "test",
          name: "bearingType",
        },
        {
          value: formValues.bearingParameter,
          label: "Параметр подшипника",
          placeholder: "6302cg18",
          name: "bearingParameter",
        },
        {
          value: formValues.outerDiameter,
          label: "Внешний диаметр",
          placeholder: "25 мм",
          name: "outerDiameter",
        },
        {
          value: formValues.innerDiameter,
          label: "Внутренний диаметр",
          placeholder: "15 мм",
          name: "innerDiameter",
        },
        {
          value: formValues.bearingWidth,
          label: "Ширина",
          placeholder: "30 мм",
          name: "bearingWidth",
        }
      ]
    },
  }
}
</script>
