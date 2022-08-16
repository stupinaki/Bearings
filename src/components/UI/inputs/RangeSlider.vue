<template>
  <div :class="styled.wrapper">
    <div :class="styled.range">
      <div :class="styled.description">
        <span :class="styled.text">
          от
        </span>
        <span :class="styled.number">
          {{ minValue }}
        </span>
      </div>

      <div :class="styled.description">
        <span :class="styled.text">
          до
        </span>
        <span :class="styled.number">
          {{ maxValue }}
        </span>
      </div>
    </div>
    <div :class="styled.slider">
      <v-range-slider
        track-color="#d8ddf9"
        track-fill-color="#4a53f5"
        track-size="2"
        thumb-color="#4a53f5"
        thumb-size="16"
      />
    </div>
  </div>
</template>

<script>
import styled from "./rangeSlider.module.css";

export default {
  name: "RangeSlider",
  props: {
    maxValue: {
      require: true,
      default: null,
      type: Number,
    },
    minValue: {
      require: true,
      default: null,
      type: Number,
    }
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
