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
      >
        <template #hint-options>
          <option
            value=""
            disabled
            selected
          >
            Сортировать по
          </option>
        </template>
      </SelectInput>
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
      options: [
        {
          id: 1,
          name: "Возрастанию цены",
        },
        {
          id: 2,
          name: "Убыванию цены",
        },
      ]
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
