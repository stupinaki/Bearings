<template>
  <div :class="styled.wrapper">
    <div :class="styled.text">
      В наличии, шт
    </div>

    <div :class="styled.filters">
      <RangeSlider
        :input-value="rangeValue"
        :min-limit="minMax[0]"
        :max-limit="minMax[1]"
        @slider-change="onRangeChange"
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
      rangeValue: [],
      options: [
        {title: "Возрастанию цены", value: true},
        {title: "Убыванию цены", value: false}],
    }
  },
  computed: {
    ...mapState('products', ['products']),
    minMax() {
      const counts = this.products.map(product => product.count);
      const maxValue = Math.max(...counts);
      const minValue = Math.min(...counts);
      return [minValue, maxValue];
    }
  },
  watch: {
    minMax() {
      this.rangeValue = [...this.minMax];
    }
  },
  beforeMount() {
    this.rangeValue = [...this.minMax];
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
    onRangeChange(rangeValue) {
      this.rangeValue = rangeValue;
      this.filterProductsAvailability(rangeValue)
    }
  }
}
</script>
