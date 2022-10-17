<template>
  <div :class="styled.panels">
    <v-expansion-panels
      v-model="localPanel"
      :multiple="multiple"
      @update:model-value="onChange"
    >
      <v-expansion-panel
        v-for="questionCard in questionCardsValue"
        :key="questionCard.id"
        :value="questionCard.id"
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
      default: () => [],
    }

  },
  emits: ["onQuestionCardClick"],
  data() {
    return {
      styled,
      localPanel: [],
    }
  },
  watch: {
    panel: {
      immediate: true,
      handler () {
        this.$data.localPanel = this.$props.panel;
      }
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
