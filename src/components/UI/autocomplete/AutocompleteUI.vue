<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      :model-value="value"
      :transition="transition"
      :multiple="multiple"
      :chips="chips"
      :items="items"
      :closable-chips="closableChips"
      :placeholder="placeholder"
      return-object
      @update:model-value="changeSelected"
    />
  </div>
</template>

<script>
import styled from "./autocompleteUI.module.css";

export default {
  name: "AutocompleteUI",
  props: {
    value: {
      type: Array,
      require: false,
      default: undefined,
    },
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
    }
  },
  methods: {
    changeSelected(e) {
      this.$emit("autocompleteChange", e);
    }
  },
}
</script>
