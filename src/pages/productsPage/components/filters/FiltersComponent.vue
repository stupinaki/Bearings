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
      <SelectInput
        :options="options"
        :clearable="true"
        :outlined="true"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import RangeSlider from "../../../../components/UI/rangeSlider/RangeSlider.vue";
import SelectInput from "../../../../components/UI/select/SelectUI.vue";
import styled from "./filters.module.css";

export default {
  name: "FiltersComponent",
  components: {
    RangeSlider,
    SelectInput,
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
  }
}
</script>
