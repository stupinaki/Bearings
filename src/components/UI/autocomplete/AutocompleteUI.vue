<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      return-object
      :items="items"
      :tabindex="tabindex"
      :multiple="multiple"
      :model-value="value"
      :placeholder="placeholder"
      @update:model-value="changeSelected"
    >
      <template #selection="{ item, index }">
        <v-chip
          v-if="index < 2"
          :key="item.title + index"
          :closable="closableChips"
          @click:close="deleteCity(item)"
        >
          <span>{{ item.title }}</span>
        </v-chip>
        <span v-if="index === 2">
          ещё+ {{ value.length - 2 }}
        </span>
      </template>
    </v-autocomplete>
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
    multiple: Boolean,
    chips: Boolean,
    closableChips: Boolean,
    items: {
      type: Array,
      require: true,
      default: () => [],
    },
    placeholder: {
      type: String,
      require: false,
      default: "",
    },
    tabindex: {
      type: String,
      required: false,
      default: null,
    },

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
    },
    deleteCity(itemToDelete) {
      const newValue = this.value.filter(v => v.value !== itemToDelete.value);
      this.$emit("autocompleteChange", newValue);
    },
  },
}
</script>
