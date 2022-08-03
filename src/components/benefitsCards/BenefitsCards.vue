<template>
  <div :class="styled.wrapper">
    <div
      v-for="benefit in benefitsValue"
      :key="benefit.id"
    >
      <BenefitsCard
        :title="benefit.title"
        :sub-title="benefit.subTitle"
        :way="benefit.way"
      >
        <Search />
        <Chat />
        <Cart />
      </BenefitsCard>
    </div>
  </div>
</template>

<script>
import BenefitsCard from "../benefitsCard/BenefitsCard.vue";
import { benefitsValue } from "../../../data/benefitsValue";
import styled from "./benefitsCards.module.css";

import Search from "../../assets/search.svg";
import Chat from "../../assets/chat.svg";
import Cart from "../../assets/cart.svg";

export default {
  name: "BenefitsCards",
  components: {
    BenefitsCard,
    Search,
    Chat,
    Cart,
  },
  data() {
    return {
      benefitsValue,
      styled,
    };
  },
};
</script>
