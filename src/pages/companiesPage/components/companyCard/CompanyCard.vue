<template>
  <div :class="styled.companyCard">
    <h2 :class="styled.title">
      {{ name }}
    </h2>
    <div :class="styled.subTitle">
      {{ description }}
    </div>
    <div :class="styled.wrapper">
      <div :class="styled.address">
        г. {{ city }}
      </div>
      <div :class="styled.offers">
        <div :class="styled.text">
          {{ offersText }}
        </div>
        <div>
          <router-link :to="{name: 'empty'}">
            <Arrow />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./companyCard.module.css";
import Arrow from "../../../../assets/arrow_downward.svg";

export default {
  name: "CompanyCard",
  components: {
    Arrow
  },
  props: {
    name: {
      type: String,
      require: true,
      default: "название комапании отсутвует",
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
      default: "количество предложений отсутвует",
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
