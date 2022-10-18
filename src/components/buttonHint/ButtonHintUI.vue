<template>
  <div :class="styled.hintContainer">
    <ButtonUI
      type-style="type-link"
      @focus="showHint"
      @blur="hideHint"
    >
      <slot name="buttonContent" />
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
import HintUI from "../UI/hint/HintUI.vue";
import styled from "./buttonHint.module.css";

export default {
  name: "ButtonHintUI",
  components: {
    ButtonUI,
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

      // return styled.hintVisible;

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
