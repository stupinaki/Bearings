<template>
  <div :class="styled.input"/>
</template>

<script>
import styled from "./inputUI.module.css";

export default {
  name: "InputUI",
  data() {
    return {
      styled,
    }
  }
}
</script>
