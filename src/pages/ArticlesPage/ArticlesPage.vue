<template>
  <div :class="styled.container">
    <div>
      <TypographyText
        size="header1"
        color="darkgray"
        value="Статьи о подшибниках и заводах-изготовителях"
      />
      <TypographyText
        :class="styled.subTitle"
        size="title2"
        color="darkgray"
        value="В этом разделе вы можете найти полезную информацию о подшипниках и  о заводах-изготовителях подшипников"
      />
    </div>

    <div :class="styled.articles">
      <ArticleBlock
        v-for="article in articlesData"
        :key="article.id"
        :title="article.title"
        :publication-date="article.publicationDate"
      />
    </div>
  </div>
</template>

<script>
import styled from "./articlesPage.module.css";
import TypographyText from "../../components/typography/TypographyText.vue";
import ArticleBlock from "./components/article/ArticleBlock.vue";
import { articlesData } from "../../../data/articlesData.js";

export default {
  name: "ArticlesPage",
  components: {
    TypographyText,
    ArticleBlock
  },
  data() {
    return {
      styled,
      articlesData,
    }
  }
}
</script>
