<template>
  <v-autocomplete
    :class="[styled.vFieldOutline, styled.vFieldOverlay, styled.vFieldVariantFilled, styled.vInputDetails]"
  />
</template>

<script>
import styled from "./autocomplete.module.css";

export default {
  name: "AutocompleteComponent",
  data() {
    return {
      styled,
    }
  }
}
</script>
