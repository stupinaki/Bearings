<template>
  <div :class="styled.dotWrapper">
    <div
      v-for="dotNumber in 5"
      :key="dotNumber"
    >
      <div :class="[styled.dot, styled['dot' + dotNumber]]" />
    </div>
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
