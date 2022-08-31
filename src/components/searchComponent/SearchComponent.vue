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
    {{searchParams}}
    <MainSearchInputs
      :marking="searchParams.marking"
      :cities-options="citiesOptions"
      :cities-filter="searchParams.citiesFilter"
      @toggle-additional-form-visible="toggleAdditionalForm"
      @on-marking-change="setInputValue({name: 'marking', value: $event})"
      @on-cities-filter-change="setInputValue({name: 'citiesFilter', value: $event})"
    />
    <AdditionalSearchInputs
      v-if="isAdditionalFormVisible"
      :form-values="searchParams"
      @on-input-change="setInputValue({name: $event.name, value: $event.value})"
      @clear-form="clearSearchParams"
    />
  </form>
</template>

<script>
import AdditionalSearchInputs from "./components/additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputs from "./components/mainSearchInputs/MainSearchInputs.vue";
import styled from "./searchComponent.module.css";
import {mapActions, mapState} from "vuex";

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
      return this.cities.map(c => ({label: c.name, value: c.id}))
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
    }
  }
}
</script>
