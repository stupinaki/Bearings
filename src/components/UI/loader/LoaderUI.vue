<template>
  <div :class="styled.dotWrapper">
    <div :class="[styled.dot, styled.dot1]" />
    <div :class="[styled.dot, styled.dot2]" />
    <div :class="[styled.dot, styled.dot3]" />
    <div :class="[styled.dot, styled.dot4]" />
    <div :class="[styled.dot, styled.dot5]" />
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
  },
}
</script>
