<template>
  <div>
    <TypographyText
      size="header3"
      value="Частые вопросы"
    />

    <div :class="styled.question">
      <div
        v-for="question in visibleCards"
        :key="question.id"
      >
        <QuestionCard
          :text="question.question"
          :question-id="question.id"
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
import {questionCardValue} from "../../../../../data/questionCardValue";
import {routerNames} from "../../../../router/router.js";
import TypographyText from "../../../../components/typography/TypographyText.vue";
import QuestionCard from "../questionCard/QuestionCard.vue";
import ButtonUI from "../../../../components/UI/button/ButtonUI.vue";
import Arrow from "../../../../assets/arrow_downward.svg"
import styled from "./questionCards.module.css";

export default {
  name: "QuestionCards",
  components: {
    TypographyText,
    QuestionCard,
    ButtonUI,
    Arrow,
  },
  props: {
    visibleCardsCount: {
      type: Number,
      required: false,
      default: 5
    }
  },
  data(){
    return {
      styled,
      routerNames,
      questionCardValue,
    }
  },
  computed: {
    visibleCards() {
      return questionCardValue.slice(0, this.$props.visibleCardsCount);
    }
  }
}
</script>
