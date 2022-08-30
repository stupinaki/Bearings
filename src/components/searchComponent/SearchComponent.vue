<template>
  <div :class="styled.wrapper">
    <MainSearchInputs />
    <AdditionalSearchInputs />
  </div>
</template>

<script>
import AdditionalSearchInputs from "../additionalSearchInputs/AdditionalSearchInputs.vue";
import MainSearchInputs from "../mainSearchInputs/MainSearchInputs.vue";
import styled from "./searchComponent.module.css";

export default {
  name: "SearchComponent",
  components: {
    MainSearchInputs,
    AdditionalSearchInputs,
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
