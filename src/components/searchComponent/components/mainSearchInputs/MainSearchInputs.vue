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
        :value="marking"
        type="text"
        placeholder="Начните вводить"
        :class="[styled.input, styled.line]"
        @input="$emit('onMarkingChange', $event.target.value)"
      >
      <div :class="styled.imgWrapper">
        <PlaceImg />
      </div>
      <AutocompleteUI
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
        @click.prevent="$emit('toggleAdditionalFormVisible')"
      >
        <FilterVariantImg />
      </ButtonUI>

      <ButtonUI type="submit">
        Найти
      </ButtonUI>
    </div>

    <div :class="styled.btnWrapper">
      <ButtonUI
        type-style="type-link"
        @click.prevent
      >
        Как узнать маркировку?
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import AutocompleteUI from "../../../UI/autocomplete/AutocompleteUI.vue";
import ButtonUI from "../../../UI/button/ButtonUI.vue";
import FilterVariantImg from "../../../../assets/filter_variant.svg";
import PlaceImg from "../../../../assets/place.svg"
import styled from "./mainSearchInputs.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    PlaceImg,
    ButtonUI,
    AutocompleteUI,
    FilterVariantImg,
  },
  props: {
    marking: {
      type: String,
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
      "onMarkingChange",
      "onCitiesFilterChange",
      "toggleAdditionalFormVisible",
  ],
  data() {
    return {
      styled,
    }
  }
}
</script>
