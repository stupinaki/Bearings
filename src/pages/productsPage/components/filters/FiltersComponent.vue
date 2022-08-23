<template>
  <div :class="styled.wrapper">
    <div :class="styled.text">
      В наличии, шт
    </div>

    <div :class="styled.filters">
      <RangeSlider
        :min-value="1"
        :max-value="maxValue"
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
  data(){
    return {
      styled,
      options: ["Возрастанию цены", "Убыванию цены"],
    }
  },
  computed: {
    ...mapState('products', ['products']),
    maxValue() {
      const available = this.products.map(card => card.availability);
      return Math.max(...available);
    }
  },
  methods: {
    ...mapActions("products", [
        "initProducts",
        "sortAscendingPrice",
        "sortDescendingPrice"
    ]),
    sortSelect(newSelected){
      return newSelected === "Возрастанию цены" ?
          this.sortAscendingPrice() :
          this.sortDescendingPrice();
    }
  }
}
</script>
