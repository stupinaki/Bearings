<template>
  <div :class="styled.mainForm">
    <div :class="styled.names">
      <div>
        Маркировка подшипника
      </div>
      <div>
        География поиска
      </div>
    </div>
    <div
      :class="styled.wrapper"
    >
      <input
        tabindex="1"
        :value="marking"
        type="text"
        placeholder="Начните вводить"
        :class="[styled.input, styled.line]"
        @input="$emit('onMarkingChange', $event.target.value)"
      >
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

      <ButtonUI
        type-style="secondary"
        @click="$emit('toggleAdditionalFormVisible')"
      >
        <FilterVariantImg />
      </ButtonUI>
      <div :class="styled.btnSearchWrapper">
        <ButtonUI type="submit">
          Найти
        </ButtonUI>
      </div>
    </div>

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
  </div>
</template>

<script>
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import FilterVariantImg from "../../../../assets/filter_variant.svg";
import MarkingHint from "../../../markingHint/MarkingHint.vue";
import styled from "./mainSearchInputs.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    ButtonUI,
    MarkingHint,
    AutocompleteUI,
    FilterVariantImg,
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
  },
  emits: [
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
