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
          v-model.number="fromMin"
          type="number"
          placeholder="от"
          :class="styled.input"
          @change="onMinChange"
        >
        <span :class="styled.hyphen">
          <b>—</b>
        </span>
        <input
          v-model.number="toMax"
          type="number"
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
  watch: {
    sliderValue() {
      const { sliderValue } = this.$data;
      this.$emit("sliderChange", sliderValue);
    },
    fromMin() {
      const { fromMin, toMax } = this.$data;
      this.$emit("sliderChange", [fromMin, toMax]);

    },
    toMax() {
      const { fromMin, toMax } = this.$data;
      this.$emit("sliderChange", [fromMin, toMax]);
    },
  },
  methods: {
    onSliderClick() {
      const selectedValueMin = Math.round(this.$data.sliderValue[0]);
      const selectedValueMax = Math.round(this.$data.sliderValue[1]);
      this.$data.fromMin = selectedValueMin;
      this.$data.toMax = selectedValueMax;
      // this.$emit("sliderChange", [selectedValueMin, selectedValueMax]);
    },
    onMinChange() {
      const { fromMin, toMax } = this.$data;
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
      // const b = [fromMin, sliderValue[1]]
      // console.log("range from MIN:", b)
      // this.$emit("sliderChange", [fromMin, sliderValue[1]]);
    },
    onMaxChange() {
      const { toMax, fromMin } = this.$data;
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
      // const a = [sliderValue[0], toMax]
      // console.log("range from MAX:", a)
      // this.$emit("sliderChange", [sliderValue[0], toMax]);
    }
  }
}
</script>
