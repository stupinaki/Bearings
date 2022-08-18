<template>
  <div>
    <div :class="styled.additionalFormTextWrapper">
      <div :class="[styled.additionalFormText, styled.textPaddingRight]">
        {{ label }}
      </div>
      <div :class="[styled.btnWrapper, styled.additionalFormText]">
        <slot name="hint" />
      </div>
    </div>
    <input
      type="text"
      :class="styled.additionalFormInput"
      :placeholder="placeholder"
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
      require: true,
      default: '',
    },
    placeholder: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
