<template>
  <ArticlesComponent
    :articles="articlesData"
    title="Статьи о заводах-изготовителях"
    text="В этом разделе вы можете найти полезную информацию о заводах-изготовителях"
    :class="styled.container"
  />
</template>

<script>
import {articlesData} from "../../../data/articlesData";
import ArticlesComponent from "./components/arcticles/ArticlesComponent.vue";
import styled from "./articlesPage.module.css";

export default {
  name: "CompaniesArticlesPage",
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