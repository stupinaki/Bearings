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
        :visible-chips="visibleChips"
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
      <ButtonHintUI :hint-text="hintsValue.marking.description">
        <template #buttonContent>
          Как узнать маркировку?
        </template>
        <template #hintUIImg>
          <component :is="hintsValue.marking.img" />
        </template>
      </ButtonHintUI>
    </div>
  </div>
</template>

<script>
import { getCountVisibleChips } from "../../../../helpers/getCountVisibleChips.js";
import { hintsValue } from "../../../../../data/hintsValue.js"
import { mapState } from "vuex";
import FilterVariantImg from "../../../../assets/filter_variant.svg";
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import MarkingHintImg from "../../../../assets/markingHint.svg"
import ButtonHintUI from "../../../buttonHint/ButtonHintUI.vue";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import HintUI from "../../../UI/hint/HintUI.vue";
import styled from "./mainSearchInputs.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    HintUI,
    ButtonUI,
    ButtonHintUI,
    MarkingHintImg,
    AutocompleteUI,
    FilterVariantImg
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
      hintsValue,
    }
  },
  computed: {
    ...mapState("viewport", ["viewportWidth"]),
    visibleChips() {
      return getCountVisibleChips(this.viewportWidth);
    }
  }
}
</script>
