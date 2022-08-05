<template>
  <div :class="styled.wrapper">
    <div :class="styled.text">
      В наличии, шт
    </div>
    <div :class="styled.filters">
      <RangeSlider />
      <SelectInput />
    </div>
  </div>
</template>

<script>
import styled from "./filters.module.css";
import RangeSlider from "../inputs/RangeSlider.vue";
import SelectInput from "../inputs/SelectInput.vue";

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
  }
}
</script>
