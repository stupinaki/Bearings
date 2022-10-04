<template>
  <div :class="styled.mainFormMobile">
    <InputUI
      tabindex="1"
      :value="marking"
      label="Маркировка подшипника"
      placeholder="Начните вводить"
      name="marking"
      :class="[styled.input, styled.line]"
      @input="$emit('onInputChange', { name: 'marking', value: $event })"
    />
    <div :class="styled.btnHintWrapper">
      <div :class="styled.btnWrapper">
        <ButtonUI
          type-style="type-link"
          @focus="showHint"
          @blur="hideHint"
        >
          Как узнать маркировку?
        </ButtonUI>
      </div>
      <div :class="hintStyle">
        <MarkingHint />
      </div>
    </div>

    <div :class="styled.names">
      География поиска
    </div>
    <div :class="styled.autocompleteWrapper">
      <AutocompleteUI
        tabindex="2"
        icon="$customPlaceSvg"
        :value="citiesFilter"
        :transition="true"
        :multiple="true"
        :chips="true"
        :items="citiesOptions"
        :closable-chips="true"
        placeholder="Искать по всей России"
        @autocomplete-change="$emit('onCitiesFilterChange', $event)"
      />
    </div>
    <div :class="styled.btnSearchWrapper">
      <ButtonUI type="submit">
        Найти
      </ButtonUI>
    </div>
    <div :class="styled.btnsWrapper">
      <ButtonUI
        type-style="type-link"
        :class="styled.moreSearch"
        @click.prevent="$emit('toggleAdditionalFormVisible')"
      >
        Расширенный поиск
        <ArrowImg :class="arrowStyle" />
      </ButtonUI>

      <ButtonUI
        type-style="type-link"
        :class="styled.resetBtn"
        @click.prevent="$emit('clearForm')"
      >
        Сбросить
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import InputUI from "../../../UI/input/InputUI.vue";
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import MarkingHint from "../../../markingHint/MarkingHint.vue";
import ArrowImg from "../../../../assets/iconForward.svg"
import styled from "./mainSearchInputsMobile.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    InputUI,
    ArrowImg,
    ButtonUI,
    MarkingHint,
    AutocompleteUI,
  },
  props: {
    marking: {
      type: String,
      default: '',
    },
    citiesOptions: {
      type: Array,
      default: () => []
    },
    citiesFilter: {
      type: Array,
      default: () => [],
    },
    isToggleAdditionalForm: Boolean,
  },
  emits: [
    "clearForm",
    "onInputChange",
    "onMarkingChange",
    "onCitiesFilterChange",
    "toggleAdditionalFormVisible",
  ],
  data() {
    return {
      styled,
      isHintVisible: false,
    }
  },
  computed: {
    hintStyle() {
      if (this.$data.isHintVisible) {
        return styled.hintVisible;
      }
      return styled.hintHide;
    },
    arrowStyle() {
      return this.$props.isToggleAdditionalForm ? styled.arrowUp : styled.arrowDown;
    }
  },
  methods: {
    showHint() {
      this.$data.isHintVisible = true;
    },
    hideHint() {
      this.$data.isHintVisible = false;
    }
  }
}
</script>
