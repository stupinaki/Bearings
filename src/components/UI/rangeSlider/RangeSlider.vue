<template>
  <div :class="styled.wrapper">
    <div :class="styled.range">
      <div :class="styled.description">
        <span :class="styled.text">
          min
        </span>
        <span :class="styled.number">
          {{ minValue }}
        </span>
      </div>

      <div :class="styled.inputs">
        <input
          v-model="fromMin"
          type="text"
          placeholder="от"
          :class="styled.input"
          @change="onMinChange"
        >
        <span :class="styled.hyphen">
          <b>—</b>
        </span>
        <input
          v-model="toMax"
          type="text"
          placeholder="до"
          :class="styled.input"
          @change="onMaxChange"
        >
      </div>

      <div :class="styled.description">
        <span :class="styled.text">
          max
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
  emits: ["sliderChange"],
  data(){
    return {
      styled,
      sliderValue: [this.minValue, this.maxValue],
      fromMin: undefined,
      toMax: undefined,
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
      if(+this.$data.toMax <= this.minValue) {
        this.$data.sliderValue[1] = this.minValue;
        this.$data.toMax = this.minValue;
      }
      if(!this.$data.fromMin) {
        this.$data.sliderValue[0] = this.$props.minValue;
      }
      this.$data.sliderValue[0] = +this.$data.fromMin;
    },
    onMaxChange() {
      if(+this.$data.toMax >= this.maxValue) {
        this.$data.sliderValue[1] = this.maxValue;
        this.$data.toMax = this.maxValue;
      }
      if(!this.$data.toMax) {
        this.$data.sliderValue[1] = this.maxValue;
      }
      this.$data.sliderValue[1] = +this.toMax;
    }
  },
}
</script>
