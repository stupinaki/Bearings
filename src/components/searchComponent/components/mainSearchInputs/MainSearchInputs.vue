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
        v-model="markingInput"
        type="text"
        placeholder="Начните вводить"
        :class="[styled.input, styled.line]"
        @change="onMarkingInputChange"
      >
      <div :class="styled.imgWrapper">
        <PlaceImg />
      </div>
      <AutocompleteUI
        :transition="true"
        :multiple="true"
        :chips="true"
        :items="citiesName"
        :closable-chips="true"
        placeholder="Искать по всей России"
        @autocomplete-change="getAutocompleteValue"
      />

      <ButtonUI
        type-style="secondary"
        @click.prevent="showAdditionalForm"
      >
        <FilterVariantImg />
      </ButtonUI>

      <ButtonUI @click.prevent="startSearch">
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
import {mapActions, mapState} from "vuex";
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
  emits: ["search"],
  data() {
    return {
      styled,
      markingInput: undefined,
    }
  },
  computed: {
    ...mapState("cities", ["cities"]),
    citiesName() {
      return this.cities.map(city => city.name);
    }
  },
  beforeMount() {
    this.initCities();
  },
  methods: {
    ...mapActions("cities", ["initCities"]),
    ...mapActions("searchComponent", ["toggleAdditionalForm", "initSearchParams"]),
    showAdditionalForm(){
      this.toggleAdditionalForm();
    },
    startSearch() {
      this.$emit("search");
    },
    getAutocompleteValue(citiesAutocomplete) {
      this.initSearchParams(["citiesFilter", citiesAutocomplete]);
    },
    onMarkingInputChange() {
      this.initSearchParams(["marking", this.$data.markingInput]);
    }
  }
}
</script>
