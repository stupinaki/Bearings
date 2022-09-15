<template>
  <div :class="styled.oopsWrapper">
    <h2 :class="styled.header">
      {{ header }}
    </h2>
    <span :class="styled.hint">
      {{ hint }}
    </span>
  </div>
</template>

<script>
import styled from "./erroeUI.module.css";

export default {
  name: "ErrorUI",
  props: {
    header: {
      type: String,
      required: false,
      default: "Упс, что-то пошло не так.."
    },
    hint: {
      type: String,
      required: false,
      default: "Попробуйте обновить страницу и отправить запрос повторно.."
    }
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
