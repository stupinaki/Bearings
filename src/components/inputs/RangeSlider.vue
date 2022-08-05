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
          1000
        </div>
      </div>
    </div>
    <div :class="styled.slider">
      <v-range-slider
        min="1"
        max="1000"
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
  data(){
    return {
      styled,
    }
  }
}
</script>
