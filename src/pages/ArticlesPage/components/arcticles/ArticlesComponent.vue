<template>
  <div>
    <div>
      <TypographyText
        size="header1"
        color="darkgray"
        :value="title"
      />
      <TypographyText
        :class="styled.subTitle"
        size="title2"
        color="darkgray"
        :value="text"
      />
    </div>

    <div :class="styled.articles">
      <ArticleBlock
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :publication-date="article.publicationDate"
      />
    </div>
  </div>
</template>

<script>
import TypographyText from "../../../../components/typography/TypographyText.vue";
import ArticleBlock from "../article/ArticleBlock.vue";
import styled from "./articlesComponent.module.css";

export default {
  name: "ArticlesComponent",
  components: {
    TypographyText,
    ArticleBlock
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
