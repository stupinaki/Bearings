<template>
  <div>
    <div :class="styled.textWrapper">
      <div :class="[styled.text, styled.textPaddingRight]">
        {{ label }}
      </div>
      <div :class="[styled.btnWrapper, styled.text]">
        <slot name="hint" />
      </div>
    </div>
    <input
      :type="type"
      :tabindex="tabindex"
      :value="value"
      :class="styled.input"
      :placeholder="placeholder"
      @input="onInput"
    >
  </div>
</template>

<script>
import styled from "./inputUI.module.css";

export default {
  name: "InputUI",
  props: {
    label: {
      type: String,
      require: false,
      default: '',
    },
    placeholder: {
      type: String,
      require: false,
      default: '',
    },
    name: {
      type: String,
      require: false,
      default: '',
    },
    value: {
      type: String,
      require: false,
      default: undefined,
    },
    tabindex: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    }
  },
  emits: ["input"],
  data() {
    return {
      styled,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>
