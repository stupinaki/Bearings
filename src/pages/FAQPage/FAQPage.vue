<template>
  <div :class="styled.container">
    <h1 :class="styled.title">
      Часто задаваемые вопросы
    </h1>

    <h2 :class="styled.subTitle">
      Для покупателей
    </h2>
    <ExpansionPanelsUI
      :question-cards-value="questionCardValueClient"
      :multiple="true"
      :panel="panelClient"
      @on-question-card-click="onCardClientClick"
    />

    <h2 :class="styled.subTitle">
      Для продавцов
    </h2>
    <ExpansionPanelsUI
      :question-cards-value="questionCardValueCompany"
      :multiple="true"
      :panel="panelCompany"
      @on-question-card-click="onCardCompanyClick"
    />

    <div :class="styled.form">
      <QuestionFormSmall
        title="Не нашли ответ на Ваш вопрос?"
        sub-title="Свяжитесь с нами. Мы попробуем вам помочь."
      />
    </div>
  </div>
</template>

<script>
import {questionCardValue, types} from "../../../data/questionCardValue.js";
import ExpansionPanelsUI from "../../components/UI/expansionPanels/ExpansionPanelsUI.vue";
import QuestionFormSmall from "../../components/questionFormSmall/QuestionFormSmall.vue";
import styled from "./FAQPage.module.css"

export default {
  name: "FAQPage",
  components: {
    ExpansionPanelsUI,
    QuestionFormSmall,
  },
  data() {
    return {
      styled,
      questionCardValue,
      panelClient: [],
      panelCompany: [],
    }
  },
  computed: {
    questionCardValueClient() {
      return questionCardValue.filter(card => card.type === types.customer);
    },
    questionCardValueCompany() {
      return questionCardValue.filter(card => card.type === types.company);
    }
  },
  beforeMount() {
    this.getHashParamsFromRout();
  },
  mounted() {
    const questionId = this.getQuestionId();
    this.scrollToElement(questionId);
  },
  methods: {
    onCardClientClick(panel) {
      this.$data.panelClient = panel;
    },
    onCardCompanyClick(panel) {
      this.$data.panelCompany = panel;
    },
    getHashParamsFromRout() {
      const questionId = this.getQuestionId();

      if (questionId) {
        const targetQuestion = questionCardValue.find(card => card.id === +questionId);

        if (targetQuestion.type === types.company) {
          this.$data.panelCompany = [+questionId];
        }
        if (targetQuestion.type === types.customer) {
          this.$data.panelClient = [+questionId];
        }
      }
    },
    scrollToElement(questionId) {
      const target =  document.getElementById(questionId);
      target.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
    },
    getQuestionId() {
      const hash = this.$router.currentRoute.value.hash;
      return hash.replace("#", "");
    }
  }
}
</script>
