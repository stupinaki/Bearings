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
      <ButtonHintUI :hint-text="hintsValue.marking.description">
        <template #buttonContent>
          Как узнать маркировку?
        </template>
        <template #hintUIImg>
          <component :is="hintsValue.marking.img" />
        </template>
      </ButtonHintUI>
    </div>
    <div :class="styled.names">
      География поиска
    </div>
    <div :class="styled.autocompleteWrapper">
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
import { getCountVisibleChips } from "../../../../helpers/getCountVisibleChips.js";
import { hintsValue } from "../../../../../data/hintsValue.js"
import { mapState } from "vuex";
import MarkingHintImg from "../../../../assets/markingHint.svg"
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ButtonHintUI from "../../../buttonHint/ButtonHintUI.vue";
import ArrowImg from "../../../../assets/iconForward.svg"
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import InputUI from "../../../UI/input/InputUI.vue";
import HintUI from "../../../UI/hint/HintUI.vue";
import styled from "./mainSearchInputsMobile.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    HintUI,
    InputUI,
    ArrowImg,
    ButtonUI,
    ButtonHintUI,
    AutocompleteUI,
    MarkingHintImg,
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
      hintsValue,
    }
  },
  computed: {
    ...mapState("viewport", ["viewportWidth"]),
    arrowStyle() {
      return this.$props.isToggleAdditionalForm ? styled.arrowUp : styled.arrowDown;
    },
    visibleChips() {
      return getCountVisibleChips(this.viewportWidth);
    }
  },
}
</script>
