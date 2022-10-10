<template>
  <router-link :to="{name: routerNames.FAQ }">
    <div :class="styled.wrapper">
      <div>
        {{ text }}
      </div>
      <Arrow />
    </div>
  </router-link>
</template>

<script>
import {routerNames} from "../../../../router/router.js";
import Arrow from "../../../../assets/arrow_downward.svg"
import styled from "./questionCard.module.css";

export default {
  name: "QuestionCard",
  components: {
    Arrow,
  },
  props: {
    text: {
      type: String,
      require: true,
      default: undefined,
    },
    path: {
      type: String,
      require: true,
      default: "empty",
    }
  },
  data() {
    return {
      styled,
      routerNames,
    }
  }
}
</script>
