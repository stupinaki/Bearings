<template>
  <div :class="styled.header">
    <div :class="styled.title">
      Сервис по поиску подшипников
    </div>
    <div :class="styled.subTitle">
      Мы не продаем подшипники, а помогаем найти лучшие предложения по низкой цене.
    </div>
  </div>
  <form
    :class="styled.wrapper"
    @submit.prevent="initSearch"
  >
    <MainSearchInputs
      :marking="searchParams.marking"
      :cities-options="citiesOptions"
      :cities-filter="searchParams.citiesFilter"
      :is-visible-autocomplete-placeholder="isVisibleAutocompletePlaceholder"
      @clear-form="clearSearchParams"
      @toggle-additional-form-visible="toggleAdditionalForm"
      @on-marking-change="setInputValue({name: 'marking', value: $event})"
      @on-cities-filter-change="setInputValue({name: 'citiesFilter', value: $event})"
      @on-input-change="setInputValue($event)"
    />
    <AdditionalSearchInputs
      v-if="isAdditionalFormVisible"
      :form-values="searchParams"
      @on-input-change="additionalInputsChange"
      @clear-form="clearSearchParams"
    />
  </form>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AdditionalSearchInputs from "./components/additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputs from "./components/mainSearchInputs/MainSearchInputs.vue";
import styled from "./searchComponent.module.css";

export default {
  name: "SearchComponent",
  components: {
    MainSearchInputs,
    AdditionalSearchInputs,
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    ...mapState("cities", ["cities"]),
    ...mapState("searchComponent", ["searchParams", "isAdditionalFormVisible"]),
    citiesOptions() {
      return this.cities.map(c => ({title: c.name, value: c.id}))
    },
    isVisibleAutocompletePlaceholder() {
      return !this.searchParams.citiesFilter.length;
    }
  },
  beforeMount() {
    this.initCities();
  },
  methods: {
    ...mapActions("cities", ["initCities"]),
    ...mapActions("searchComponent", [
      "toggleAdditionalForm",
      "setInputValue",
      "clearSearchParams"
    ]),
    initSearch() {
      console.log("поиск начался!")
    },
    additionalInputsChange(obj) {
      this.setInputValue(obj);
    },
  }
}
</script>
