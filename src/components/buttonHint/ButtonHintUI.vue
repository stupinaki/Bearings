<template>
  <div :class="styled.hintContainer">
    <ButtonUI
      type-style="type-link"
      @focus="showHint"
      @blur="hideHint"
    >
      <HelpImg />
    </ButtonUI>
    <HintUI
      :text="hintText"
      :class="hintStyle"
    >
      <template #hintImg>
        <slot name="hintUIImg" />
      </template>
    </HintUI>
  </div>
</template>


<script>
import ButtonUI from "../UI/button/ButtonUI.vue";
import HelpImg from "../../assets/help.svg"
import HintUI from "../UI/hint/HintUI.vue";
import styled from "./buttonHintUI.module.css";

export default {
  name: "ButtonHintUI",
  components: {
    ButtonUI,
    HelpImg,
    HintUI,
  },
  props: {
    hintText: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      styled,
      isHintVisible: false,
    }
  },
  computed: {
    hintStyle() {
      if (this.$data.isHintVisible) {
        return styled.hintVisible;
      }
      return styled.hintHide;
    }
  },
  methods: {
    showHint() {
      this.$data.isHintVisible = true;
    },
    hideHint() {
      this.$data.isHintVisible = false;
    }
  }
}
</script>
