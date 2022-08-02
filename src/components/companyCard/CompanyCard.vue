<template>
  <div :class="styled.companyCard">
    <h2 :class="styled.title">
      {{ title }}
    </h2>
    <div :class="styled.subTitle">
      {{ subTitle }}
    </div>
    <div :class="styled.wrapper">
      <div :class="styled.address">
        {{ address }}
      </div>
      <div :class="styled.offers">
        <div :class="styled.text">
          {{ offersText }}
        </div>
        <div>
          <Arrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./companyCard.module.css";
import Arrow from "../../assets/arrow_downward.svg";

export default {
  name: "CompanyCard",
  components: {
    Arrow
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    subTitle: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    offersText: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      styled,
      Arrow,
    };
  },
};
</script>
