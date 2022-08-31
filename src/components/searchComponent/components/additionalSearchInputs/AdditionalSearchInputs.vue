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
          @input="$emit('onInputChange', { name: input.eventName, value: $event })"
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
import {mapState} from "vuex";
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
    ...mapState("searchComponent", ["isAdditionalFormVisible", "searchParams"]),
    inputsData() {
      const { formValues } = this.$props;
      return [
        {
          value: formValues.accuracyClass,
          label: "Класс точности",
          placeholder: "6302cg18",
          hint: "test",
          name: "accuracyClass",
          eventName: "onAccuracyClassChange"
        },
        {
          value: formValues.bearingType,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: "test",
          name: "bearingType",
          eventName: "onBearingTypeChange"
        },
        {
          value: formValues.bearingParameter,
          label: "Параметр подшипника",
          placeholder: "6302cg18",
          name: "bearingParameter",
          eventName: "onBearingParameterChange"
        },
        {
          value: formValues.outerDiameter,
          label: "Внешний диаметр",
          placeholder: "25 мм",
          name: "outerDiameter",
          eventName: "onOuterDiameterChange"
        },
        {
          value: formValues.innerDiameter,
          label: "Внутренний диаметр",
          placeholder: "15 мм",
          name: "innerDiameter",
          eventName: "onInnerDiameterChange"
        },
        {
          value: formValues.bearingWidth,
          label: "Ширина",
          placeholder: "30 мм",
          name: "bearingWidth",
          eventName: "onBearingWidthChange"
        }
      ]
    },
  }
}
</script>
