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
          <router-link to="/home">
            <Arrow />
          </router-link>
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
      default:undefined,
    },
    subTitle: {
      type: String,
      require: true,
      default:undefined,
    },
    address: {
      type: String,
      require: true,
      default:undefined,
    },
    offersText: {
      type: String,
      require: true,
      default:undefined,
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
