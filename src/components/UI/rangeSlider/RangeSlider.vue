<template>
  <div :class="styled.wrapper">
    <div :class="styled.range">
      <div :class="styled.rangeValue">
        <span :class="styled.text">
          от
        </span>
        <input
          v-model.number="range[0]"
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
          v-model.number="range[1]"
          type="number"
          :class="styled.input"
          @change="onMaxChange"
        >
      </div>
    </div>

    <div :class="styled.slider">
      <v-range-slider
        v-model="range"
        :track-color="trackColor"
        :track-fill-color="trackFillColor"
        :track-size="trackSize"
        :thumb-color="thumbColor"
        :thumb-size="thumbSize"
        :max="maxLimit"
        :min="minLimit"
        @update:model-value="onSliderClick"
      />
    </div>
  </div>
</template>

<script>
import styled from "./rangeSlider.module.css";

export default {
  name: "RangeSlider",
  props: {
    inputValue: {
      type: Array,
      require: true,
      validator(value) {
        return Array.isArray(value) && value.every(v => !Number.isNaN(v)) && value.length === 2;
      },
      default: undefined,
    },
    minLimit: {
      require: true,
      default: null,
      type: Number,
    },
    maxLimit: {
      require: true,
      default: null,
      type: Number,
    },
    trackColor: {
      require: false,
      default: "#d8ddf9",
      type: String,
    },
    trackFillColor: {
      require: false,
      default: "#4a53f5",
      type: String,
    },
    trackSize: {
      require: false,
      default: 2,
      type: Number,
    },
    thumbColor: {
      require: false,
      default: "#4a53f5",
      type: String,
    },
    thumbSize: {
      require: false,
      default: 16,
      type: Number,
    },
  },
  emits: ["sliderChange"],
  data() {
    return {
      range: [0,0],
      styled,
    }
  },
  watch: {
    inputValue() {
      this.range = [...this.inputValue];
    }
  },
  beforeMount() {
    this.range = [...this.inputValue];
  },
  methods: {
    onSliderClick(newValue) {
      this.$emit("sliderChange", [
        Math.round(newValue[0]),
        Math.round(newValue[1])
      ]);
    },
    onMinChange(e) {
      const inputValue = +e.target.value;
      const {minLimit, maxLimit} = this;
      const [maxValue] = this.$props.inputValue;
      if(!inputValue || Number.isNaN(inputValue) || inputValue < minLimit) {
        this.$emit("sliderChange", [minLimit, maxValue]);
        return;
      }
      if(inputValue > maxLimit) {
        this.$emit("sliderChange", [maxValue, maxLimit]);
        return;
      }
      if(inputValue > maxValue) {
        this.$emit("sliderChange", [maxValue, inputValue]);
        return;
      }
      this.$emit("sliderChange", [inputValue, maxValue]);
    },

    onMaxChange(e) {
      const inputValue = +e.target.value;
      const {minLimit, maxLimit} = this;
      const [minValue] = this.$props.inputValue;
      if(!inputValue || Number.isNaN(inputValue) || inputValue > maxLimit) {
        this.$emit("sliderChange", [minValue, maxLimit]);
        return;
      }
      if(inputValue < minLimit) {
        this.$emit("sliderChange", [minLimit, minValue]);
        return;
      }
      if(inputValue < minValue) {
        this.$emit("sliderChange", [inputValue, minValue]);
        return;
      }
      this.$emit("sliderChange", [minValue, inputValue]);
    }
  }
}
</script>
