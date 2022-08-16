<template>
  <select
    name="select"
    :class="styled.select"
  >
    <option
      value=""
      disabled
      selected
    >
      Сортировать по
      <KeyboardArrow />
    </option>
    <option
      v-for="option in options"
      :key="option.id"
      :class="styled.option"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import styled from "./select.module.css";
import KeyboardArrow from "../../../assets/keyboardArrow.svg";

export default {
  name: "SelectInput",
  components: {
    KeyboardArrow,
  },
  data(){
    return {
      styled,
      options: [
        {
          id: 1,
          name: "Возрастанию цены",
        },
        {
          id: 2,
          name: "Убыванию цены",
        },
      ]
    }
  }
}
</script>
