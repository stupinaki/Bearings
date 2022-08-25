<template>
  <div :class="styled.wrapper">
    <div :class="styled.range">
      <div :class="styled.rangeValue">
        <span :class="styled.text">
          от
        </span>
        <input
          v-model.number="fromMin"
          type="number"
          :class="styled.input"
          @change="onMinChange"
        >
      </div>
      <div :class="styled.rangeValue">
        <span :class="styled.text">
          до
        </span>
        <input
          v-model.number="toMax"
          type="number"
          :class="styled.input"
          @change="onMaxChange"
        >
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
  emits: ["sliderChange"],
  data(){
    return {
      styled,
      sliderValue: [this.minValue, this.maxValue],
      fromMin: this.minValue,
      toMax: this.maxValue,
    }
  },
  methods: {
    onSliderClick() {
      const selectedValueMin = Math.round(this.$data.sliderValue[0]);
      const selectedValueMax = Math.round(this.$data.sliderValue[1]);
      this.$data.fromMin = selectedValueMin;
      this.$data.toMax = selectedValueMax;
      this.$emit("sliderChange", [selectedValueMin, selectedValueMax]);
    },
    onMinChange() {
      const { fromMin, toMax, sliderValue } = this.$data;
      const { minValue, maxValue } = this.$props;

      if( fromMin > toMax ) {
        this.$data.toMax = maxValue;
        this.$data.sliderValue = [fromMin, maxValue];
      }
      if ( fromMin > maxValue ) {
        this.$data.fromMin = maxValue;
        this.$data.sliderValue = [maxValue, maxValue];
      }
      if( fromMin < minValue ) {
        this.$data.fromMin =  minValue;
        this.$data.sliderValue[0] = minValue;
      }
      if( !fromMin ) {
        this.$data.fromMin = minValue;
        this.$data.sliderValue = [minValue, toMax];
      } else {
        this.$data.sliderValue[0] = fromMin;
      }
      this.$emit("sliderChange", [fromMin, sliderValue[1]]);
    },
    onMaxChange() {
      const { toMax, fromMin, sliderValue } = this.$data;
      const { minValue, maxValue } = this.$props;

      if( toMax > maxValue ) {
        this.$data.toMax = maxValue;
        this.$data.sliderValue[1] = maxValue;
      }
      if( toMax < minValue ) {
        this.$data.toMax = minValue;
        this.$data.sliderValue = [minValue, minValue];
      }
      if( toMax < fromMin ) {
        this.$data.fromMin = minValue;
        this.$data.sliderValue = [minValue, toMax];
      }
      if( !toMax ) {
        this.$data.toMax = maxValue;
        this.$data.sliderValue = [fromMin, maxValue];
      } else {
        this.$data.sliderValue[1] = toMax;
      }
      this.$emit("sliderChange", [sliderValue[0], toMax]);
    }
  }
}
</script>
