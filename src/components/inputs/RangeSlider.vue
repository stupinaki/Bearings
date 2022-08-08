<template>
  <div :class="styled.wrapper">
    <div :class="styled.range">
      <div :class="styled.description">
        <div :class="styled.text">
          от
        </div>
        <div :class="styled.number">
          1
        </div>
      </div>

      <div :class="styled.description">
        <div :class="styled.text">
          до
        </div>
        <div :class="styled.number">
          {{ maxValue }}
        </div>
      </div>
    </div>
    <div :class="styled.slider">
      <v-range-slider
        track-color="#d8ddf9"
        track-fill-color="#4a53f5"
        track-size="2"
        thumb-color="#4A53F5"
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
    }
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
