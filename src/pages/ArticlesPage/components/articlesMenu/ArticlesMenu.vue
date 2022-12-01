<template>
  <div :class="styled.wrapper">
    <router-link
      :to="{name: routerNames.bearingsArticles}"
      :class="styled.option"
    >
      О подшибниках
    </router-link>
    <router-link
      :to="{name: routerNames.companiesArticles}"
      :class="styled.option"
    >
      О заводах-изготовителях
    </router-link>
  </div>
</template>

<script>
import {routerNames} from "../../../../router/router";
import styled from "./articlesMenu.module.css";

export default {
  name: "ArticlesMenu",
  data() {
    return {
      styled,
      routerNames,
      options: ["О подшибниках", "О заводах-изготовителях"]
    }
  },
}
</script>
