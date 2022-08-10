<template>
  <form
      action=""
      @submit.prevent
  >
    <div :class="className">

      <ButtonUI
          type="pseudo"
          @click="onStartSearch"
      >
        <SearchInputImg/>
      </ButtonUI>
      <input
          ref="searchQuery"
          :placeholder="placeholder"
      >
    </div>
  </form>

</template>

<script>
import ButtonUI from "../../components/button/ButtonUI.vue";
import SearchInputImg from "../../assets/searchInput.svg";
import styled from "./searchInput.module.css"

export default {
  name: "SearchInput",
  components: {
    ButtonUI,
    SearchInputImg,
  },
  props: {
    placeholder: {
      type: String,
      require: true,
      default: '',
    },
  },
  emits: ["startSearch"],
  data() {
    return {
      styled,
      isEmptySearchQuery: false,
      value: undefined,
    }
  },
  computed: {
    className() {
      if (this.$data.isEmptySearchQuery) {
        return [styled.emptySearchQuery];
      }
      return [styled.input]
    }
  },
  methods: {
    onStartSearch() {
      const searchQuery = this.$refs.searchQuery.value;
      this.$data.isEmptySearchQuery = !searchQuery;
      this.$emit('startSearch', searchQuery.toLowerCase())
    }
  }
}
</script>
