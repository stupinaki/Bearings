<template>
  <div :class="styled.additionalFormWrapper">
    <div :class="styled.label">
      Компании
    </div>
    <div :class="styled.autocompleteWrapper">
      <AutocompleteUI
        tabindex="3"
        icon="mdi-cogs"
        :value="companiesSelected"
        :transition="true"
        :multiple="true"
        :chips="true"
        :items="companiesNameAndId"
        :closable-chips="true"
        placeholder="ООО «АВАНГАРД-ПОДШИПНИК»"
        @autocomplete-change="$emit('onCompaniesSelectedChange', $event)"
      />
    </div>
    <div :class="styled.additionalForm">
      <div
        v-for="(input, i) in inputsData"
        :key="i"
      >
        <InputUI
          :type="input.type"
          :tabindex="input.tabindex"
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
            <ButtonHintUI
              :hint-text="input.hint.description"
            >
              <template #buttonContent>
                <HelpImg />
              </template>
              <template #hintUIImg>
                <component :is="input.hint.img" />
              </template>
            </ButtonHintUI>
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
import { hintsValue } from "../../../../../data/hintsValue.js"
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ButtonHintUI from "../../../buttonHint/ButtonHintUI.vue";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import HelpImg from "../../../../assets/help.svg"
import InputUI from "../../../UI/input/InputUI.vue";
import styled from "./additionalSearchInputs.module.css";


export default {
  name: "AdditionalSearchInputs",
  components: {
    AutocompleteUI,
    ButtonHintUI,
    ButtonUI,
    InputUI,
    HelpImg,
  },
  props: {
    formValues: {
      type: Object,
      required: true
    },
    companiesNameAndId: {
      type: Array,
      required: true,
    },
    companiesSelected: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["clearForm", "onInputChange", "onCompaniesSelectedChange"],
  data(){
    return {
      styled,
      hintsValue,
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
          hint: hintsValue.accuracyClass,
          name: "accuracyClass",
          tabindex: "4",
          type: "text",
        },
        {
          value: formValues.bearingType,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: hintsValue.bearingType,
          name: "bearingType",
          tabindex: "5",
          type: "text",
        },
        {
          value: formValues.bearingParameter,
          label: "Параметр",
          placeholder: "6302cg18",
          hint: hintsValue.bearingParameter,
          name: "bearingParameter",
          tabindex: "6",
          type: "text",
        },
        {
          value: formValues.outerDiameter,
          label: "Внешний диаметр",
          placeholder: "25 мм",
          name: "outerDiameter",
          tabindex: "7",
          type: "number",
        },
        {
          value: formValues.innerDiameter,
          label: "Внутренний диаметр",
          placeholder: "15 мм",
          name: "innerDiameter",
          tabindex: "8",
          type: "number",
        },
        {
          value: formValues.bearingWidth,
          label: "Ширина",
          placeholder: "30 мм",
          name: "bearingWidth",
          tabindex: "9",
          type: "number",
        }
      ]
    },
  },
}
</script>
