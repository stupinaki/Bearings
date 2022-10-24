<template>
  <div :class="styled.container">
    <TypographyText
      size="header1"
      color="darkgray"
      value="Часто задаваемые вопросы"
    />
    <TypographyText
      size="header2"
      color="darkgray"
      value="Для покупателей"
    />
    <ExpansionPanelsUI
      :question-cards-value="questionCardValueClient"
      :multiple="true"
      :panel="panelClient"
      @on-question-card-click="onCardClientClick"
    />

    <TypographyText
      size="header2"
      color="darkgray"
      value="Для продавцов"
    />
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
import TypographyText from "../../components/typography/TypographyText.vue";
import styled from "./FAQPage.module.css"

export default {
  name: "FAQPage",
  components: {
    TypographyText,
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
      if(questionId){
        const target =  document.getElementById(questionId);
        target.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
      }
    },
    getQuestionId() {
      const hash = this.$router.currentRoute.value.hash;
      return hash.replace("#", "");
    }
  }
}
</script>
