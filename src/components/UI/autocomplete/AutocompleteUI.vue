<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      v-model="citiesAutocomplete"
      :transition="transition"
      :multiple="multiple"
      :chips="chips"
      :items="items"
      :closable-chips="closableChips"
      :placeholder="placeholder"
      return-object
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
    placeholder: {
      type: String,
      require: false,
      default: "",
    }
  },
  emits: ["autocompleteChange"],
  data() {
    return {
      styled,
      citiesAutocomplete: undefined,
    }
  },
  watch: {
    citiesAutocomplete() {
      this.$emit("autocompleteChange", this.$data.citiesAutocomplete);
    }
  }
}
</script>
