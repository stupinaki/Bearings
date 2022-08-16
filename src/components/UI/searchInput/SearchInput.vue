<template>
  <form
    action=""
    @submit.prevent
  >
    <div :class="className">
      <div :class="styled.searchBtnWrapper">
        <ButtonUI
          type="pseudo"
          @click="onStartSearch"
        >
          <SearchInputImg />
        </ButtonUI>
      </div>
      <input
        ref="searchQuery"
        :placeholder="placeholder"
        :class="styled.input"
        @blur="onBlur"
      >
    </div>
  </form>
</template>

<script>
import ButtonUI from "../button/ButtonUI.vue";
import SearchInputImg from "../../../assets/searchInput.svg";
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
      isError: false,
      value: undefined,
    }
  },
  computed: {
    className() {
      if (this.$data.isError) {
        return [styled.emptySearchQuery];
      }
      return [styled.fillSearchQuery];
    }
  },
  methods: {
    onStartSearch() {
      const searchQuery = this.$refs.searchQuery.value;
      this.$data.isError = !searchQuery;
      this.$emit('startSearch', searchQuery.toLowerCase())
    },
    onBlur(){
      this.$data.isError = false;
    }
  }
}
</script>
