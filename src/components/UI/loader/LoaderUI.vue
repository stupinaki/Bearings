<template>
  <div :class="styled.wrapper">
    <div :class="styled.external">
      <div :class="styled.internal" />
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
  }
}
</script>
