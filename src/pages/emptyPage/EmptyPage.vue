<template>
    <div :class="styled.notice">
      Эта страница еще не была нарисована ¯\_(ツ)_/¯
    </div>
</template>

<script>
import styled from "./emptyPage.module.css"

export default {
  name: "EmptyPage",
  data(){
    return {
      styled,
    }
  },
}
</script>
