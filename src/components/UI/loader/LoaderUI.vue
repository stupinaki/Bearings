<template>
  <div :class="styled.stepWrapper">
    <div :class="[styled.step, styled.step1]" />
    <div :class="[styled.step, styled.step2]" />
    <div :class="[styled.step, styled.step3]" />
    <div :class="[styled.step, styled.step4]" />
    <div :class="[styled.step, styled.step5]" />
  </div>
</template>

<script>
import styled from "./loader.module.css";

export default {
  name: "LoaderUI",
  data() {
    return {
      styled,
    }
  }
}
</script>
