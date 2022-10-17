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
            <div :class="styled.hintContainer">
              <ButtonUI
                type-style="type-link"
                @click.prevent="onHintClick"
              >
                <HelpImg />
              </ButtonUI>

              <HintUI
                text="Параметр это суффикс. Он находится справа от типа."
                :class="styled.hintHide"
              >
                <template #hintImg>
                  <ParameterImg />
                </template>
              </HintUI>
            </div>
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
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ParameterImg from "../../../../assets/bearingParameter.svg"
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import InputUI from "../../../UI/input/InputUI.vue";
import HelpImg from "../../../../assets/help.svg";
import HintUI from "../../../UI/hint/HintUI.vue";
import styled from "./additionalSearchInputs.module.css";

//todo нужно передавать разные картинки в разные подсказки, возможно в пропсу хинт передавать название картинки
//todo в отдельный компонент вынески кнопку с подсказкой

export default {
  name: "AdditionalSearchInputs",
  components: {
    AutocompleteUI,
    ParameterImg,
    ButtonUI,
    InputUI,
    HelpImg,
    HintUI,
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
          tabindex: "4",
          type: "text",
        },
        {
          value: formValues.bearingType,
          label: "Тип подшипника",
          placeholder: "6302cg18",
          hint: "test",
          name: "bearingType",
          tabindex: "5",
          type: "text",
        },
        {
          value: formValues.bearingParameter,
          label: "Параметр подшипника",
          placeholder: "6302cg18",
          hint: "test",
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
  methods: {
    onHintClick() {
      console.log("нажали по подсказке")
    }
  }
}
</script>
