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
        type="text"
        placeholder="Начните вводить"
        :class="[styled.input, styled.line]"
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
        label="Искать по всей России"
      />

      <ButtonUI
        type="secondary"
        @click.prevent="showAdditionalForm"
      >
        <FilterVariantImg />
      </ButtonUI>

      <ButtonUI @click.prevent>
        Найти
      </ButtonUI>
    </div>

    <div :class="styled.btnWrapper">
      <ButtonUI
          type="type-link"
          @click.prevent
      >
        Как узнать маркировку?
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AutocompleteUI from "../../../../components/UI/autocomplete/AutocompleteUI.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import FilterVariantImg from "../../../../assets/filter_variant.svg"
import PlaceImg from "../../../../assets/place.svg"
import styled from "./mainSearchInputs.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    ButtonUI,
    AutocompleteUI,
    FilterVariantImg,
    PlaceImg,
  },
  data() {
    return {
      styled,
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
    ...mapActions("mainSearchForm", ["toggleAdditionalForm"]),
    showAdditionalForm(){
      this.toggleAdditionalForm();
    }
  }
}
</script>
