<template>
  <div :class="styled.container">
    <h2 :class="styled.title">
      Частые вопросы
    </h2>
    <ExpansionPanelsUI
      :question-cards-value="questionCardValue"
      :multiple="true"
      :panel="panel"
      @on-question-card-click="onClick"
    />
  </div>
</template>

<script>
import {questionCardValue} from "../../../data/questionCardValue";
import ExpansionPanelsUI from "../../components/UI/expansionPanels/ExpansionPanelsUI.vue";
import styled from "./FAQPage.module.css"

export default {
  name: "FAQPage",
  components: {
    ExpansionPanelsUI,
  },
  data() {
    return {
      styled,
      questionCardValue,
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
