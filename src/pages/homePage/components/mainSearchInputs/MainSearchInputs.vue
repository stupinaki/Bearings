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
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AutocompleteComponent from "../../../../components/UI/autocomplete/AutocompleteComponent.vue";
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
      isAdditionalFormVisible: false,
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
    showAdditionalForm(){
      this.$data.isAdditionalFormVisible = !this.$data.isAdditionalFormVisible;
    }
  }
}
</script>
