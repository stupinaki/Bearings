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
        v-model="sliderValue"
        :track-color="trackColor"
        :track-fill-color="trackFillColor"
        :track-size="trackSize"
        :thumb-color="thumbColor"
        :thumb-size="thumbSize"
        :max="maxValue"
        :min="minValue"
        @click="onSliderClick"
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
    },
    trackColor: {
      require: true,
      default: "#d8ddf9",
      type: String,
    },
    trackFillColor: {
      require: true,
      default: "#4a53f5",
      type: String,
    },
    trackSize: {
      require: true,
      default: 2,
      type: Number,
    },
    thumbColor: {
      require: true,
      default: "#4a53f5",
      type: String,
    },
    thumbSize: {
      require: true,
      default: 16,
      type: Number,
    },
  },
  data(){
    return {
      styled,
      sliderValue: null,
    }
  },
  emits: ["sliderChange"],
  methods: {
    onSliderClick() {
      const selectedValueMin = Math.round(this.$data.sliderValue[0]);
      const selectedValueMax = Math.round(this.$data.sliderValue[1]);
      this.$emit("sliderChange", [selectedValueMin, selectedValueMax]);
    }
  },
}
</script>
