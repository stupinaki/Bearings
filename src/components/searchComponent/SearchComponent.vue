<template>
  <div>
    <div>
      <TypographyText
        size="header1"
        color="darkgray"
        value="Сервис по поиску подшипников"
      />
      <TypographyText
        :class="styled.subTitle"
        size="title2"
        color="darkgray"
        value="Мы не продаем подшипники, а помогаем найти лучшие предложения по низкой цене."
      />
    </div>
    <form
      :class="styled.wrapper"
      @submit.prevent="initSearch"
    >
      <MainSearchInputsMobile
        v-if="isMobile"
        :marking="searchParams.marking"
        :cities-options="citiesNameAndId"
        :cities-filter="searchParams.citiesFilter"
        :is-toggle-additional-form="isAdditionalFormVisible"
        :is-visible-autocomplete-placeholder="isVisibleAutocompletePlaceholder"
        @clear-form="clearForm"
        @toggle-additional-form-visible="toggleAdditionalForm"
        @on-cities-filter-change="setInputValue({name: 'citiesFilter', value: $event})"
        @on-input-change="setInputValue($event)"
      />
      <MainSearchInputs
        v-else
        :marking="searchParams.marking"
        :cities-options="citiesNameAndId"
        :cities-filter="searchParams.citiesFilter"
        :is-visible-autocomplete-placeholder="isVisibleAutocompletePlaceholder"
        @toggle-additional-form-visible="toggleAdditionalForm"
        @on-marking-change="setInputValue({name: 'marking', value: $event})"
        @on-cities-filter-change="setInputValue({name: 'citiesFilter', value: $event})"
      />
      <AdditionalSearchInputs
        v-if="isAdditionalFormVisible"
        :form-values="searchParams"
        :companies-name-and-id="companiesNameAndId"
        :companies-selected="searchParams.companiesFilter"
        @on-input-change="additionalInputsChange"
        @on-companies-selected-change="setInputValue({name: 'companiesFilter', value: $event})"
        @clear-form="clearForm"
      />
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {breakpoints} from "../../consts/breakpoints";
import AdditionalSearchInputs from "./components/additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputsMobile from "./components/mainSearchInputs/MainSearchInputsMobile.vue";
import MainSearchInputs from "./components/mainSearchInputs/MainSearchInputs.vue";
import TypographyText from "../typography/TypographyText.vue";
import styled from "./searchComponent.module.css";

export default {
  name: "SearchComponent",
  components: {
    TypographyText,
    MainSearchInputs,
    AdditionalSearchInputs,
    MainSearchInputsMobile,
  },
  data() {
    return {
      styled,
    }
  },
  computed: {
    ...mapState("cities", ["cities"]),
    ...mapState("viewport", ["viewportWidth"]),
    ...mapState("searchComponent", ["searchParams", "isAdditionalFormVisible"]),
    ...mapGetters("companies", ["companiesNameAndId"]),
    ...mapGetters("cities", ["citiesNameAndId"]),
    isVisibleAutocompletePlaceholder() {
      return !this.searchParams.citiesFilter.length;
    },
    isMobile() {
      return this.viewportWidth <= breakpoints.large;
    }
  },
  beforeMount() {
    this.initCities();
    this.initCompanies();
  },
  methods: {
    ...mapActions("cities", ["initCities"]),
    ...mapActions("companies", ["initCompanies"]),
    ...mapActions("products", ["initProducts"]),
    ...mapActions("searchComponent", [
      "toggleAdditionalForm",
      "clearSearchParams",
      "setInputValue",
    ]),
    initSearch() {
      this.initProducts(this.searchParams);
    },
    additionalInputsChange(obj) {
      this.setInputValue(obj);
    },
    clearForm() {
      this.clearSearchParams();
      this.initProducts(this.searchParams);
    }
  }
}
</script>
