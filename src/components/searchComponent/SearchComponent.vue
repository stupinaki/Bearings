<template>
  <div :class="styled.wrapper">
    <div :class="styled.mainForm">
      <div :class="styled.names">
        <div>
          Маркировка подшипника
        </div>
        <div>
          География поиска
        </div>
      </div>
      <form
        action=""
        :class="styled.form"
      >
        <input
          type="text"
          :class="[styled.input, styled.line]"
        >
        <AutocompleteComponent
          :transition="true"
          :multiple="true"
          :chips="true"
          :items="citiesName"
          :class="styled.input"
        />

        <ButtonUI
            type="secondary"
            @click.prevent="showAdditionalForm"
        >
          <FilterVariant />
        </ButtonUI>

        <ButtonUI>
          Найти
        </ButtonUI>
      </form>

      <div :class="styled.btnWrapper">
        <ButtonUI type="type-link">
          Как узнать маркировку?
        </ButtonUI>
      </div>

      <div :class="styled.help" />
    </div>
    <div />

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

  </div>
</template>

<script>
import styled from "./searchComponent.module.css";
import ButtonUI from "../button/ButtonUI.vue";
import FilterVariant from "../../assets/filter_variant.svg"
import AutocompleteComponent from "../autocomplete/AutocompleteComponent.vue";
import {cities} from "../../../data/cities";
import Help from "../../assets/help.svg"

export default {
  name: "SearchComponent",
  components: {
    ButtonUI,
    FilterVariant,
    AutocompleteComponent,
    Help,
  },
  data() {
    return {
      styled,
      cities,
      isAdditionalFormVisible: false,
    }
  },
  computed: {
    additionalFormClass(){
      if(this.$data.isAdditionalFormVisible) {
        return [styled.additionalFormWrapper];
      }
      return [styled.additionalFormWrapperHide];
    },
    citiesName() {
      return this.$data.cities.map(city => city.name);
    }
  },
  methods: {
    showAdditionalForm(){
      this.$data.isAdditionalFormVisible = !this.$data.isAdditionalFormVisible;
    }
  }
}
</script>
