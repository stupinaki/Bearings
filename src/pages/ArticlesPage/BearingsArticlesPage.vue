<template>
  <ArticlesComponent
    :articles="articlesData"
    title="Статьи о подшибниках"
    text="В этом разделе вы можете найти полезную информацию о подшипниках"
    :class="styled.container"
  />
</template>

<script>
import {articlesData} from "../../../data/articlesData";
import ArticlesComponent from "./components/arcticles/ArticlesComponent.vue";
import styled from "./articlesPage.module.css";

export default {
  name: "BearingsArticlesPage",
  components: {
    ArticlesComponent,
  },
  data() {
    return {
      styled,
      articlesData,
    }
  }

}
</script>
