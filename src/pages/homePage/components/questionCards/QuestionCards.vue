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
          :text="question.question"
        />
      </div>
    </div>
    <div :class="styled.questionBtn">
      <router-link :to="{name: routerNames.FAQ}">
        <ButtonUI type-style="type-link">
          Все вопросы
          <Arrow />
        </ButtonUI>
      </router-link>
    </div>
  </div>
</template>

<script>
import {routerNames} from "../../../../router/router.js";
import {questionCardValue} from "../../../../../data/questionCardValue";
import QuestionCard from "../questionCard/QuestionCard.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import Arrow from "../../../../assets/arrow_downward.svg"
import styled from "./questionCards.module.css";

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
      routerNames,
      questionCardValue,
    }
  },
}
</script>
