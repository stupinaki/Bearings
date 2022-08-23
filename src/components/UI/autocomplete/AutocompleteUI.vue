<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      :transition="transition"
      :multiple="multiple"
      :chips="chips"
      :items="items"
      :closable-chips="closableChips"
    />
  </div>
</template>

<script>
import styled from "./autocompleteUI.module.css";

export default {
  name: "AutocompleteUI",
  props: {
    transition: Boolean,
    multiple: Boolean,
    chips: Boolean,
    closableChips: Boolean,
    items: {
      type: Array,
      require: true,
      default: () =>  [],
    },
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
