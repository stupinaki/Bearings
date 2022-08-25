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
      />

      <ButtonUI
        name="secondary"
        @click.prevent="showAdditionalForm"
      >
        <FilterVariant />
      </ButtonUI>

      <ButtonUI>
        Найти
      </ButtonUI>
    </form>

    <div :class="styled.btnWrapper">
      <ButtonUI name="type-link">
        Как узнать маркировку?
      </ButtonUI>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AutocompleteComponent from "../../../../components/UI/autocomplete/AutocompleteUI.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import FilterVariant from "../../../../assets/filter_variant.svg"
import styled from "./mainSearchInputs.module.css";

export default {
  name: "MainSearchInputs",
  components: {
    ButtonUI,
    AutocompleteComponent,
    FilterVariant,
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
