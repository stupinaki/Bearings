<template>
  <div :class="styled.wrapper">
    <div>
      {{ text }}
    </div>
    <router-link :to="{name: path }">
      <Arrow />
    </router-link>
  </div>
</template>

<script>
import styled from "./questionCard.module.css";
import Arrow from "../../assets/arrow_downward.svg"

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
    }
  }
}
</script>
