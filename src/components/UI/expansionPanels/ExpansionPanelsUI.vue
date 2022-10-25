<template>
  <div :class="styled.panels">
    <v-expansion-panels
      v-model="localPanel"
      :multiple="multiple"
      @update:model-value="onChange"
    >
      <v-expansion-panel
        v-for="questionCard in questionCardsValue"
        :id="questionCard.id"
        :key="questionCard.id"
        :value="questionCard.id"
      >
        <v-expansion-panel-title>
          {{ questionCard.question }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>

          <div v-if="questionCard.special === specialTypes.contacts">
            <HowSaleQuestion />
          </div>

          <div v-else-if="questionCard.special === specialTypes.list">
            <RequiredDataQuestion />
          </div>

          <div v-else>
            {{ questionCard.answer }}
          </div>

        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { specialTypes } from "../../../../data/questionCardValue";
import RequiredDataQuestion from "../../../pages/FAQPage/components/requiredDataQuestion/RequiredDataQuestion.vue";
import HowSaleQuestion from "../../../pages/FAQPage/components/howSaleQuestion/HowSaleQuestion.vue";
import styled from "./expansionPanels.module.css";

export default {
  name: "ExpansionPanelsUI",
  components: {
    HowSaleQuestion,
    RequiredDataQuestion,
  },
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
      specialTypes,
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
      this.$emit("onQuestionCardClick", e);
    }
  }
}
</script>
