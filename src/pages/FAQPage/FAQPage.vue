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
      :panel="panel"
      @on-question-card-click="onClick"
    />

    <h2 :class="styled.subTitle">
      Для продавцов
    </h2>
    <ExpansionPanelsUI
      :question-cards-value="questionCardValueCompany"
      :multiple="true"
      :panel="panel"
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
import {questionCardValueClient, questionCardValueCompany} from "../../../data/questionCardValue";
import ExpansionPanelsUI from "../../components/UI/expansionPanels/ExpansionPanelsUI.vue";
import QuestionFormSmall from "../../components/questionFormSmall/QuestionFormSmall.vue";
import styled from "./FAQPage.module.css"

//todo в идеале чтобы по нажатию тебя кидала на нужный ответ, мб сделать их коллапсами
export default {
  name: "FAQPage",
  components: {
    ExpansionPanelsUI,
    QuestionFormSmall,
  },
  data() {
    return {
      styled,
      questionCardValueClient,
      questionCardValueCompany,
      panel: [],
    }
  },
  methods: {
    onClick(index) {
      console.log("до",{ index, panel})

      const {panel} = this.$data;
      // let isAbsent = panel.find(item => item === index) === -1;

        this.$data.panel.push(index);
        // this.$data.panel = this.$data.panel.filter(item => item !== index);
      console.log({ index, panel})

    }
  }
}
</script>
