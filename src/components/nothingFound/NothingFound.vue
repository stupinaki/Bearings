<template>
  <div :class="styled.wrapper">
    <h2>
      {{ title }}
    </h2>
    <span>
      {{ subTitle }}
    </span>
  </div>
</template>

<script>
import styled from "./nothingFound.module.css";

export default {
  name: "NothingFound",
  props: {
    title: {
      type: String,
      required: false,
      default: "По вашему запросу компании не были найдены ¯\\_(ツ)_/¯"
    },
    subTitle: {
      type: String,
      required: false,
      default: "Попробуйте изменить поисковый запрос"
    }
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
