<template>
  <div :class="styled.article">
    <h2 :class="styled.title">
      {{ title }}
    </h2>


    <div :class="styled.description">
      <div :class="styled.publicationDate">
        Дата публикации: {{ publicationDate }}
      </div>
      <div :class="styled.wrapper">
        <div>
          Прочитать статью
        </div>
        <Arrow/>
      </div>
    </div>

  </div>
</template>

<script>
import styled from "./articleBlock.module.css";
import Arrow from "../../../../assets/arrow_downward.svg";

export default {
  name: "ArticleBlock",
  components: {
    Arrow,
  },
  data() {
    return {
      styled,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Заголовок отсутствует'
    },
    publicationDate: {
      type: String,
      required: true,
      default: 'Дата публикации отсутствует'
    }
  }
}
</script>
