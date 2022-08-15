<template>
  <div :class="styled.wrapper">
    <div :class="styled.title">
      Частые вопросы
    </div>
    <div :class="styled.question">
      <div
        v-for="question in questionCardValue"
        :key="question.id"
      >
        <QuestionCard
          :text="question.text"
        />
      </div>
    </div>
    <div :class="styled.questionBtn">
      <router-link :to="{name: 'empty'}">
        <ButtonUI type="type-link">
          Все вопросы
          <Arrow />
        </ButtonUI>
      </router-link>
    </div>
  </div>
</template>

<script>
import QuestionCard from "../questionCard/QuestionCard.vue";
import styled from "./questionCards.module.css";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import Arrow from "../../../../assets/arrow_downward.svg"
import {questionCardValue} from "../../../../../data/questionCardValue";

export default {
  name: "QuestionCards",
  components: {
    QuestionCard,
    ButtonUI,
    Arrow,
  },
  data(){
    return {
      styled,
      questionCardValue,
    }
  },
}
</script>
