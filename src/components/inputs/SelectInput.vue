<template>
  <div>
    <select
      name="select"
      :class="styled.select"
    >
      <option
        :class="[styled.option, styled.selected]"
        value="price"
        selected
        disabled
      >
        Сортировать по
        <KeyboardArrow />
      </option>
      <option
        :class="styled.option"
        value="price"
      >
        Цене
      </option>
      <option
        :class="styled.option"
        value="availability"
      >
        Наличию
      </option>
    </select>
  </div>
</template>

<script>
import styled from "./select.module.css";
import KeyboardArrow from "../../assets/keyboardArrow.svg";

export default {
  name: "SelectInput",
  components: {
    KeyboardArrow,
  },
  data(){
    return {
      styled,
    }
  }
}
</script>
