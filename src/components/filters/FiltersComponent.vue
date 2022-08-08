<template>
  <div :class="styled.wrapper">
    <div :class="styled.text">
      В наличии, шт
    </div>
    <div :class="styled.filters">
      <RangeSlider :max-value="maxValue" />
      <SelectInput />
    </div>
  </div>
</template>

<script>
import styled from "./filters.module.css";
import RangeSlider from "../inputs/RangeSlider.vue";
import SelectInput from "../inputs/SelectInput.vue";
import {groceryCardsValue} from "../../../data/groceryCardValue";

export default {
  name: "FiltersComponent",
  components: {
    RangeSlider,
    SelectInput,
  },
  data(){
    return {
      styled,
      groceryCardsValue,
    }
  },
  computed: {
    maxValue() {
      const available = groceryCardsValue.map(card => card.availability);
      return Math.max(...available);
    }
  }
}
</script>
