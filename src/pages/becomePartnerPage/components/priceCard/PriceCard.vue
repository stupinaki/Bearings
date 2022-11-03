<template>
  <div :class="styled.wrapper">
    <div :class="topCardStyle">
      <div>
        <TypographyText
          size="header2"
          :value="title"
          :class="styled.title"
        />
        <p :class="styled.text">
          {{ text }}
        </p>
      </div>
      <TypographyText
        size="header3"
        :value="price"
      />
    </div>

    <div :class="styled.border" />

    <TypographyText
      value=""
      size="title1"
      :class="styled.bottomCard"
    >
      <div
        v-for="detail in details"
        :key="detail.id"
      >
        {{ detail.text }}
      </div>
    </TypographyText>
  </div>
</template>

<script>
import TypographyText from "../../../../components/typography/TypographyText.vue";
import styled from "./priceCard.module.css";

export default {
  name: "PriceCard",
  components: {
    TypographyText,
  },
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
