<template>
  <div :class="styled.offerCard">
    <div :class="styled.title">
      {{city}}
    </div>
    <div :class="styled.subTitle">
      {{count}} {{correctWord}}
    </div>
  </div>
</template>

<script>
import styled from "./offerCard.module.css"

export default {
  name: "OfferCard",
  data() {
    return {
      styled,
    }
  },
  props: {
    city: {
      type: String,
      require: true,
      default: undefined,
    },
    count: {
      type: String,
      require: true,
      default: "0",
    }
  },
  computed: {
    correctWord(){
      const count = this.count;
      const lastDigit = +count[count.length - 1];
      if(lastDigit === 1){
        return "предложение";
      }
      if(lastDigit === 2 || lastDigit === 3 || lastDigit === 4){
        return "предложения";
      }
      return "предложений";
    },
  }
}
</script>
