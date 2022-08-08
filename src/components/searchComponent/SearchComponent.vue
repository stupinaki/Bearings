<template>
  <div :class="styled.wrapper">
    <div>
      <div :class="styled.names">
        <div>
          Маркировка подшипника
        </div>
        <div>
          География поиска
        </div>
      </div>
      <form
        action=""
        :class="styled.form"
      >
        <input
          type="text"
          :class="[styled.input, styled.line]"
        >
        <input
          type="text"
          :class="styled.input"
        >
        <ButtonUI type="secondary">
          <FilterVariant />
        </ButtonUI>

        <ButtonUI>
          Найти
        </ButtonUI>
      </form>

      <ButtonUI type="type-link">
        Как узнать маркировку?
      </ButtonUI>
      <div :class="styled.help" />
    </div>

    <div />
  </div>
</template>

<script>
import styled from "./searchComponent.module.css";
import ButtonUI from "../button/ButtonUI.vue";
import FilterVariant from "../../assets/filter_variant.svg"

export default {
  name: "SearchComponent",
  components: {
    ButtonUI,
    FilterVariant,
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
