<template>
  <div :class="styled.container">
    <h1 :class="styled.notice">
      Указан рекорректный URL страницы
    </h1>
  </div>
</template>

<script>
import styled from "./notFoundPage.module.css";

export default {
  name: "NotFoundPage",
  data() {
    return {
      styled,
    }
  }
}
</script>
