<template>
  panel: {{ panel }}
  <v-expansion-panels
    :model-value="panel"
    :multiple="multiple"
    @update:model-value="onChange"
  >
    <v-expansion-panel
      v-for="questionCard in questionCardsValue"
      :key="questionCard.id"
    >
      <v-expansion-panel-title>
        {{ questionCard.question }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ questionCard.answer }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
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
    // panel: {
    //   type: Array,
    //   required: true,
    // }

  },
  emits: ["onQuestionCardClick"],
  data() {
    return {
      styled,
      panel: [2],
    }
  },
  methods: {
    onChange(e) {
      console.log("мы изменили v-expansion-panel:", e)
      this.$emit("onQuestionCardClick", e)
    }
  }
}
</script>
