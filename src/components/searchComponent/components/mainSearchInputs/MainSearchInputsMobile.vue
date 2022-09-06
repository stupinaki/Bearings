<template>
  <div :class="styled.mainFormMobile">
    <InputUI
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
      <div :class="styled.imgWrapper">
        <PlaceImg />
      </div>

      <AutocompleteUI
        :value="citiesFilter"
        :transition="true"
        :multiple="true"
        :chips="true"
        :items="citiesOptions"
        :closable-chips="true"
        :placeholder="autocompletePlaceholder"
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
import PlaceImg from "../../../../assets/place.svg"
import ArrowImg from "../../../../assets/iconForward.svg"
import styled from "./mainSearchInputsMobile.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    InputUI,
    PlaceImg,
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
    isVisibleAutocompletePlaceholder: Boolean,
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
    autocompletePlaceholder() {
      return this.$props.isVisibleAutocompletePlaceholder
          ? "Искать по всей России"
          : "";
    },
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
