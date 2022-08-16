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
      <SelectInput />
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import RangeSlider from "../../../../components/UI/inputs/RangeSlider.vue";
import SelectInput from "../../../../components/UI/inputs/SelectInput.vue";
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
