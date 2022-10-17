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
      @on-question-card-click="onClick"
    />

    <h2 :class="styled.subTitle">
      Для продавцов
    </h2>
    <ExpansionPanelsUI
      :question-cards-value="questionCardValueCompany"
      :multiple="true"
      :panel="panelCompany"
      @on-question-card-click="onClick"
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
import router from "../../router/router";
import styled from "./FAQPage.module.css"


//как ведет себя панель с вопросами при переходе с конкретной карточки вопроса?
// 1. по нажатию на конкретную карточку мы передаем значения в роутер ✅
// 2. на общей странице с вопросами мы получаем id открытой карточки ✅
// 3. мы запрашиваем все карточки вопросов, потом по id из роутера находим ту, что должна быть открыта ✅
// 4. передаем значения в нужную панель ✅
//имея id мы в самой карточке посмотрим к какой панели она относится и передадим значения в нее


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
  methods: {
    onClick(panel) {
      console.log("мы получили новые данные panel:", panel)
      this.$data.panelClient = panel;
    },
    getHashParamsFromRout() {
      //todo получать как инстанс в компоненте..
      const hash = router.currentRoute.value.hash;
      const questionId = hash.replace("#", "");
      if(questionId) {
        const targetQuestion = questionCardValue.find(card => card.id === +questionId);

        if(targetQuestion.type === types.company) {
          this.$data.panelCompany = [+questionId];
        }
        if(targetQuestion.type === types.customer) {
          this.$data.panelClient = [+questionId];
        }
      }
    }
  }
}
</script>
