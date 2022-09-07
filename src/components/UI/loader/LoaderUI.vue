<template>
  <div :class="styled.wrapper">
    <div :class="styled.external">
      <div :class="styled.internal">
        <div :class="styled.center" />
      </div>
    </div>
  </div>

  <div :class="styled.round">
    <div :class="styled.move"></div>
  </div>

  <div :class="styled.stepWrapper">
    <div :class="[styled.step, styled.step1]"/>
    <div :class="[styled.step, styled.step2]"/>
    <div :class="[styled.step, styled.step3]"/>
    <div :class="[styled.step, styled.step4]"/>
    <div :class="[styled.step, styled.step5]"/>
  </div>

  <div :class="styled.stickWrapper">
    <div :class="[styled.stick, styled.stick1]"/>
    <div :class="[styled.stick, styled.stick2]"/>
    <div :class="[styled.stick, styled.stick3]"/>
    <div :class="[styled.stick, styled.stick4]"/>
    <div :class="[styled.stick, styled.stick5]"/>
    <div :class="[styled.stick, styled.stick6]"/>
    <div :class="styled.middle"/>
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
