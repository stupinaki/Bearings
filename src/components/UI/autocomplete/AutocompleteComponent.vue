<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      :transition="transition"
      :multiple="multiple"
      :chips="chips"
      :items="items"
    />
  </div>
</template>

<script>
import styled from "./autocomplete.module.css";

export default {
  name: "AutocompleteComponent",
  props: {
    transition: Boolean,
    multiple: Boolean,
    chips: Boolean,
    items: Array,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
