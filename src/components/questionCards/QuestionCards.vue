<template>
  <div :class="styled.wrapper">
    <div
      v-for="question in questionCardValue"
      :key="question.id"
    >
      <QuestionCard
        :text="question.text"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from "../questionCard/QuestionCard.vue";
import {questionCardValue} from "../../../data/questionCardValue";
import styled from "./questionCards.module.css";

export default {
  name: "QuestionCards",
  components: {
    QuestionCard,
  },
  data(){
    return {
      questionCardValue,
      styled,
    }
  }
}
</script>
