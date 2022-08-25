<template>
  <div :class="styled.wrapper">
    <div :class="styled.text">
      В наличии, шт
    </div>

    <div :class="styled.filters">
      <RangeSlider
        :min-value="minValue"
        :max-value="maxValue"
        @slider-change="filterProductsAvailability"
      />
      <div />
      <SelectUI
        :options="options"
        :clearable="true"
        :outlined="true"
        @select-option="sortSelect"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import RangeSlider from "../../../../components/UI/rangeSlider/RangeSlider.vue";
import SelectUI from "../../../../components/UI/select/SelectUI.vue";
import styled from "./filters.module.css";

export default {
  name: "FiltersComponent",
  components: {
    RangeSlider,
    SelectUI,
  },
  data() {
    return {
      styled,
      options: [{title: "Возрастанию цены", value: true }, {title: "Убыванию цены", value: false }],
      maxValue: 300,
      minValue: 10,
    }
  },
  computed: {
    ...mapState('products', ['products']),
  },
  methods: {
    ...mapActions("products", [
      "initProducts",
      "setSortDirection",
      "filterProductsAvailability"
    ]),
    sortSelect(direction) {
      this.setSortDirection(direction);
    },
  }
}
</script>
