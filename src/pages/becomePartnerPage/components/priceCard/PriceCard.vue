<template>
  <div :class="styled.wrapper">
    <div :class="topCardStyle">
      <div>
        <h3 :class="styled.title">
          {{ title }}
        </h3>
        <p :class="styled.text">
          {{ text }}
        </p>
      </div>
      <span :class="styled.price"> {{ price }}</span>
    </div>

    <div :class="styled.border" />

    <div :class="styled.bottomCard">
      <div
        v-for="detail in details"
        :key="detail.id"
      >
        {{ detail.text }}
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./priceCard.module.css";

export default {
  name: "PriceCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    isDefaultColor: Boolean,
    text: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    details: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      styled
    }
  },
  computed: {
    topCardStyle() {
      return this.$props.isDefaultColor ? [styled.topCard, styled.defaultColor] : [styled.topCard, styled.specialColor];
    }
  }
}
</script>
