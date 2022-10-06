<template>
  <div>
    <v-expansion-panels
      :model-value="panel"
      :multiple="multiple"
      @on-question-card-click="$emit('onQuestionCardClick', index )"
    >
      <v-expansion-panel
        v-for="questionCard in questionCardsValue"
        :key="questionCard.id"
        @click="$emit('onQuestionCardClick', questionCard.index )"
      >
        <v-expansion-panel-title>
          {{ questionCard.question }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ questionCard.answer }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import styled from "./expansionPanels.module.css";

export default {
  name: "ExpansionPanelsUI",
  props: {
    questionCardsValue: {
      type: Array,
      required: true,
    },
    hover: {
      type: Boolean,
      required: false,
      default: true,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: true,
    },
    panel: {
      type: Array,
      required: true,
    }

  },
  emits: ["onQuestionCardClick"],
  data() {
    return {
      styled,
    }
  },
  methods: {

  }
}
</script>
