<template>
  <router-link
    :to="{name: 'oneCompany', params: { companyId: companyId } }"
    :class="styled.companyCard"
  >
    <h2 :class="styled.title">
      {{ name }}
    </h2>
    <span :class="styled.subTitle">{{ description }}</span>
    <div :class="styled.wrapper">
      <span :class="styled.address"> г. {{ city }}</span>
      <div :class="styled.offers">
        <span :class="styled.text">
          {{ offersText }}
        </span>
        <Arrow />
      </div>
    </div>
  </router-link>
</template>

<script>
import Arrow from "../../../../assets/arrow_downward.svg";
import styled from "./companyCard.module.css";

export default {
  name: "CompanyCard",
  components: {
    Arrow,
  },
  props: {
    companyId: {
      type: Number,
      require:true,
      default: null,
    },
    name: {
      type: String,
      require: true,
      default: "название компании отсутвует",
    },
    description: {
      type: String,
      require: true,
      default: "описание компании отсутвует",
    },
    city: {
      type: String,
      require: true,
      default: "отсвутвует",
    },
    offersText: {
      type: String,
      require: true,
      default: "кол-во предложений отсутвует",
    },
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
