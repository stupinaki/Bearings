<template>
  <div :class="styled.autocomplete">
    <v-autocomplete
      :prepend-icon="icon"
      return-object
      :items="items"
      :tabindex="tabindex"
      :multiple="multiple"
      :model-value="value"
      :placeholder="autocompletePlaceholder"
      @update:model-value="changeSelected"
    >
      <template #selection="{ item, index }">
        <v-chip
          v-if="index < visibleChips"
          :key="item.value"
          :closable="closableChips"
          @click:close="deleteCity(item)"
        >
          <span>{{ item.title }}</span>
        </v-chip>
        <span v-if="index === visibleChips">
          ещё+ {{ value.length - visibleChips }}
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
    icon: {
      type: String,
      require: false,
      default: "",
    },
    visibleChips: {
      type: Number,
      require: false,
      default: 2,
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
  computed: {
    autocompletePlaceholder() {
      return this.$props.value.length
          ? ""
          : this.$props.placeholder;
    },
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
